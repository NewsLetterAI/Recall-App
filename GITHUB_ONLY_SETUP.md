# Recall v1.12 — GitHub + iCloud Drive

## Architettura
- Repository PUBBLICO `Recall-App`: contiene solo la PWA e viene pubblicato con GitHub Pages.
- Repository PRIVATO Recall: contiene la copia di backup dei documenti e consente upload/eliminazione direttamente da Recall.
- iCloud Drive: contiene gli originali che vuoi leggere e annotare con iPhone/iPad/Mac.

## Configurazione GitHub una sola volta per dispositivo
1. Apri Recall dal sito GitHub Pages.
2. Vai in `Impostazioni → Archivio privato GitHub`.
3. Usa un token fine-grained limitato SOLO al repository privato di Recall.
4. Permesso repository: `Contents: Read and write`.
5. Incolla il token in Recall e premi `Collega GitHub`.
6. Non inserire mai il token nel repository pubblico o in chat.

## Configurazione iCloud una sola volta
Segui `ICLOUD_SETUP.md` e crea il Comando Rapido Apple `Recall Apri iCloud`.

## Uso quotidiano
- `+ Materiale` carica una copia del file nel repository privato.
- Per poter usare `Apri in iCloud`, conserva l'originale con lo stesso nome nella struttura `iCloud Drive/Recall/...` corrispondente al distretto/organo scelto.
- `Apri in iCloud` apre l'originale Apple annotabile.
- `Copia GitHub` apre la copia di backup.
- `Elimina` rimuove il file da Recall/GitHub, ma NON elimina l'originale iCloud.

## Sicurezza
GitHub Pages è pubblico ma contiene solo il codice della PWA. I documenti personali restano nel repository privato e/o nel tuo iCloud Drive.
