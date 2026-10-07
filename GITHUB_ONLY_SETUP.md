# Recall v1.16 — architettura GitHub + iCloud

## Repository pubblico: Recall-App
Contiene soltanto il codice della PWA pubblicata con GitHub Pages. È qui che vanno caricati gli aggiornamenti dell'app.

## Repository privato della biblioteca
Configurazione attuale: `NewsLetterAI/expert-potato9643019`.
Contiene i documenti dell'Archivio, gli Studi e i piccoli file di configurazione privata. Recall usa un fine-grained token limitato a questo repository con `Contents: Read and write`. Il token resta sul dispositivo e non va mai inserito nel repository pubblico.

Percorsi principali:
- `library/archivio/...` — documenti di studio
- `library/studi/...` — tesi, revisioni e progetti
- `library/.recall/icloud-links.json` — associazioni ai file originali iCloud
- `library/.recall/archive-folders.json` — cartelle personalizzate create dall'interfaccia Archivio

## iCloud Drive
Contiene gli originali che vuoi annotare con gli strumenti Apple. Recall apre l'originale tramite il Comando Rapido configurato; la copia GitHub resta un backup/fallback. Eliminare da Recall/GitHub non elimina l'originale iCloud.

## Gestione Archivio v1.16
Nella pagina Archivio puoi:
- premere `＋ File` per caricare uno o più file direttamente nella cartella aperta;
- premere `＋ Cartella` per creare cartelle personalizzate dove consentito;
- premere `↻` per sincronizzare;
- eliminare file dal repository privato;
- eliminare una cartella personalizzata soltanto quando è vuota.

Restano volutamente senza sottocartelle `Urgenze / emergenze` e `Interventistica`. In `MSK` resta soltanto `Osso`; in `Pelvi` resta soltanto `Utero`.
