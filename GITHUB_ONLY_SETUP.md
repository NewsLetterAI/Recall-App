# Recall — architettura GitHub + iCloud

## Repository pubblico: Recall-App
Contiene solo il codice della PWA pubblicata con GitHub Pages.

## Repository privato: Recall Library
Contiene i documenti dell'Archivio, gli Studi e i dati di configurazione privati.
Recall usa un fine-grained token limitato a questo repository con `Contents: Read and write`.

## iCloud Drive
Contiene gli originali che vuoi annotare con gli strumenti Apple.
Recall conserva nel repository privato soltanto l'associazione fra documento Recall e percorso iCloud, nel file:

`library/.recall/icloud-links.json`

Il sito pubblico non contiene il token GitHub né i percorsi salvati nel repository privato.
