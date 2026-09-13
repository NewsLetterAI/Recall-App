# Recall v1.9 — SOLO GITHUB

## Architettura
- Repository PRIVATO esistente: contiene documenti e immagini (`library/`, `assets/cases/`).
- Repository PUBBLICO `Recall-App`: contiene solo questa piccola PWA e viene pubblicato con GitHub Pages.
- Nessun Cloudflare, Supabase o servizio esterno.

## Prima configurazione (una sola volta per dispositivo)
1. Crea su GitHub un nuovo repository pubblico chiamato `Recall-App`.
2. Carica nella root TUTTI i file di questa cartella.
3. Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
4. Apri il sito `https://<tuo-username>.github.io/Recall-App/`.
5. Recall → ⚙︎ → Archivio privato GitHub.
6. Premi “Crea token read-only”. In GitHub seleziona SOLO il repository privato di Recall e permission `Contents: Read`. Nessun permesso di scrittura.
7. Copia il token in Recall e premi “Collega GitHub”. Il token viene memorizzato solo in quel browser/dispositivo.

## Uso quotidiano
- Per aggiungere un documento, caricalo nel repository PRIVATO sotto `library/archivio/<distretto>/<organo>/<categoria>/`.
- Aprendo Recall, l'Archivio si sincronizza automaticamente quando c'è internet.
- I documenti aperti vengono conservati sul dispositivo e possono essere riaperti offline.
- Le immagini dei casi restano nel repository privato e possono essere scaricate offline dalle Impostazioni.

## Sicurezza
Il sito GitHub Pages è pubblico, ma NON contiene i documenti personali. I file rimangono nel repository privato e sono letti dal browser con un token GitHub fine-grained, read-only e limitato a quel solo repository. Non committare MAI il token nel repository pubblico.
