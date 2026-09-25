# Recall v1.12

Web app/PWA personale per studio e refertazione radiologica.

## Architettura
- `Recall-App` pubblico: solo codice della PWA.
- Repository GitHub privato: indice/copia di backup dei materiali e caricamento/cancellazione da Recall.
- iCloud Drive: file originali da leggere e annotare con gli strumenti Apple.

## Novità v1.12
- rimossa la modalità di annotazione PDF interna a Recall;
- `Apri in iCloud` avvia il Comando Rapido Apple `Recall Apri iCloud`;
- `Copia GitHub` resta disponibile come fallback/backup;
- cancellazione file dall'Archivio/GitHub;
- upload diretto dei materiali su GitHub;
- layout Archivio compatto a elenco;
- PWA offline-ready e fix iPhone.

Vedi `ICLOUD_SETUP.md` per la configurazione una tantum di iCloud Drive e Comandi Rapidi.
