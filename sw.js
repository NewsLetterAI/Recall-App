const VERSION="v1141";
const CORE_CACHE=`recall-core-${VERSION}`;
const RUNTIME_CACHE=`recall-runtime-${VERSION}`;
const DOC_CACHE=`recall-docs-${VERSION}`;
const CASE_CACHE=`recall-cases-${VERSION}`;

const scopeURL=self.registration.scope;
const APP_ENTRY=new URL("index.html",scopeURL).href;
const CORE_PATHS=["index.html","styles.css","app.js","manifest.webmanifest","icon.svg","apple-touch-icon.png"];
const CORE_URLS=CORE_PATHS.map(p=>new URL(p,scopeURL).href);

async function cacheAppShell(){
  const cache=await caches.open(CORE_CACHE);
  await Promise.all(CORE_URLS.map(async url=>{
    try{
      const res=await fetch(new Request(url,{cache:"reload"}));
      if(res && res.ok) await cache.put(url,res.clone());
    }catch(_){
      // Se siamo già offline, mantieni ciò che era stato messo in cache in precedenza.
    }
  }));
}

self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(cacheAppShell());
});

self.addEventListener("activate",event=>{
  const keep=new Set([CORE_CACHE,RUNTIME_CACHE,DOC_CACHE,CASE_CACHE]);
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("recall-")&&!keep.has(k)).map(k=>caches.delete(k)))),
    cacheAppShell(),
    self.clients.claim()
  ]));
});

self.addEventListener("message",event=>{
  if(event.data?.type==="CACHE_APP_SHELL") event.waitUntil(cacheAppShell());
});

async function appShell(){
  const cache=await caches.open(CORE_CACHE);
  return (await cache.match(APP_ENTRY)) || (await caches.match(APP_ENTRY));
}

async function navigationResponse(request){
  // Recall è una SPA: per l'avvio da Home serviamo prima la shell locale.
  const cached=await appShell();
  if(cached){
    // Aggiorna in background quando la rete esiste, senza bloccare l'apertura.
    fetch(request).then(async res=>{
      if(res && res.ok){
        const cache=await caches.open(CORE_CACHE);
        await cache.put(APP_ENTRY,res.clone()).catch(()=>{});
      }
    }).catch(()=>{});
    return cached;
  }
  try{
    const fresh=await fetch(request);
    if(fresh && fresh.ok){
      const cache=await caches.open(CORE_CACHE);
      await cache.put(APP_ENTRY,fresh.clone()).catch(()=>{});
    }
    return fresh;
  }catch(_){
    return new Response("Recall non è ancora stato preparato per l'uso offline. Aprilo una volta con Internet e riprova.",{
      status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}
    });
  }
}

async function cacheFirst(request,cacheName){
  const cached=await caches.match(request);
  if(cached) return cached;
  try{
    const fresh=await fetch(request);
    if(fresh && fresh.ok){const cache=await caches.open(cacheName);cache.put(request,fresh.clone()).catch(()=>{});}
    return fresh;
  }catch(_){
    return new Response("Risorsa non disponibile offline",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}});
  }
}

async function networkFirst(request){
  try{
    const fresh=await fetch(request);
    if(fresh && fresh.ok){const cache=await caches.open(RUNTIME_CACHE);cache.put(request,fresh.clone()).catch(()=>{});}
    return fresh;
  }catch(_){
    return (await caches.match(request)) || new Response("Offline",{status:503});
  }
}

self.addEventListener("fetch",event=>{
  const req=event.request;
  if(req.method!=="GET") return;
  const url=new URL(req.url);
  const isPdfJsCdn=url.hostname==="cdnjs.cloudflare.com" && url.pathname.includes("/ajax/libs/pdf.js/4.10.38/");
  if(isPdfJsCdn){event.respondWith(cacheFirst(req,RUNTIME_CACHE));return;}
  if(url.origin!==self.location.origin) return;
  if(req.mode==="navigate"){event.respondWith(navigationResponse(req));return;}
  if(CORE_URLS.includes(url.href)){event.respondWith(cacheFirst(req,CORE_CACHE));return;}
  if(["style","script","image","font"].includes(req.destination)){event.respondWith(cacheFirst(req,RUNTIME_CACHE));return;}
  event.respondWith(networkFirst(req));
});
