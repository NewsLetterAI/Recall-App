const VERSION="v110";
const CORE_CACHE=`recall-core-${VERSION}`;
const RUNTIME_CACHE=`recall-runtime-${VERSION}`;
const DOC_CACHE=`recall-docs-${VERSION}`;
const CASE_CACHE=`recall-cases-${VERSION}`;
const CORE=["./","index.html","styles.css","app.js","manifest.webmanifest","icon.svg","apple-touch-icon.png"];

self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CORE_CACHE).then(cache=>cache.addAll(CORE)));
});

self.addEventListener("activate",event=>{
  const keep=new Set([CORE_CACHE,RUNTIME_CACHE,DOC_CACHE,CASE_CACHE]);
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("recall-")&&!keep.has(k)).map(k=>caches.delete(k)))),
    self.clients.claim()
  ]));
});

async function navigationResponse(request){
  try{
    const fresh=await fetch(request);
    return fresh;
  }catch(_){
    return (await caches.match(request)) || (await caches.match("index.html"));
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
  if(url.origin!==self.location.origin) return;
  if(req.mode==="navigate"){event.respondWith(navigationResponse(req));return;}
  if(["style","script","image","font"].includes(req.destination)){event.respondWith(cacheFirst(req,RUNTIME_CACHE));return;}
  event.respondWith(networkFirst(req));
});
