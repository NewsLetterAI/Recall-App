# Recall — configurazione iCloud Drive

## Obiettivo
Recall apre il file originale salvato in iCloud Drive tramite il Comando Rapido Apple `Recall Apri iCloud`.
Le modifiche fatte con Anteprima/File/Markup su iPhone, iPad o Mac restano nello stesso file iCloud e si sincronizzano tramite Apple.

## 1. Struttura iCloud consigliata
Crea in iCloud Drive una cartella `Recall` e usa questa struttura:

- `Recall/Archivio/Addome/Fegato/`
- `Recall/Archivio/Addome/Vie biliari/`
- `Recall/Archivio/Addome/Pancreas/`
- `Recall/Archivio/Addome/Reni/`
- `Recall/Archivio/Addome/Surreni/`
- `Recall/Archivio/Torace/Polmone/`
- `Recall/Archivio/Torace/Mediastino/`
- `Recall/Studi/`

Il nome del file deve essere identico a quello mostrato in Recall.

## 2. Crea il Comando Rapido una sola volta
Su iPhone/iPad/Mac apri **Comandi Rapidi** e crea un comando chiamato esattamente:

`Recall Apri iCloud`

Azioni:
1. Usa **Input comando rapido** come percorso testuale ricevuto da Recall.
2. Aggiungi l'azione per ottenere/aprire un file da **iCloud Drive** usando quel percorso (nelle versioni Apple il nome può apparire come `Ottieni file` o `Ottieni file dalla cartella`). Se presente, disattiva il selettore manuale del documento.
3. Aggiungi **Apri file**.

Salva il comando rapido. Se usi lo stesso Apple Account e la sincronizzazione iCloud di Comandi Rapidi è attiva, il comando si sincronizza tra i tuoi dispositivi Apple.

Recall gli passerà percorsi come:
`Recall/Archivio/Addome/Fegato/FEGATO.pdf`

## 3. Impostazioni Recall
In Recall vai in:
**Impostazioni → Apertura documenti con iCloud Drive**

Lascia:
- Nome Comando Rapido: `Recall Apri iCloud`
- Cartella principale iCloud: `Recall`

Poi premi **Salva impostazioni iCloud**.

## 4. Uso quotidiano
- Metti il PDF originale nella cartella corretta di iCloud Drive.
- Carica una copia in Recall con `+ Materiale` scegliendo lo stesso distretto/organo.
- Nell'Archivio premi **Apri in iCloud**.
- Annota il PDF con gli strumenti Apple. Le modifiche restano sul file iCloud originale.

Il pulsante **Copia GitHub** apre invece la copia di backup presente nel repository privato.

## 5. Offline
Recall continua ad aprirsi offline come PWA. Per usare anche un PDF iCloud senza rete, assicurati che quel file sia già scaricato localmente nell'app File/Finder (su iPhone/iPad puoi usare l'opzione per mantenerlo scaricato).
