# Recall v1.13

PWA personale per studio radiologico e refertazione.

Novità v1.13:
- Archivio compatto per distretto → organo → file reali.
- Upload e cancellazione diretti sul repository GitHub privato.
- PWA offline-ready con fix iPhone.
- Apertura degli originali tramite iCloud Drive e Comandi Rapidi Apple.
- Associazione indipendente tra nome/file Recall e file iCloud.
- Collegamenti iCloud sincronizzati tramite il repository GitHub privato.
- Pulsante `⋯` per cambiare il collegamento iCloud di un documento.

Vedi `ICLOUD_SETUP.md` per la configurazione del Comando Rapido.


## v1.14
- Archivio: Muscoloscheletrico rinominato in MSK.
- Nuovo distretto Urgenze / emergenze.
- Corretto Elimina: rimuove realmente il file dal repository privato GitHub (iCloud non viene toccato).
- Rimosso il tasto Scarica offline dai documenti dell Archivio/Studi.
- Sincronizzazione GitHub ottimizzata con una singola lettura ricorsiva dell albero del repository, con fallback al metodo precedente.
