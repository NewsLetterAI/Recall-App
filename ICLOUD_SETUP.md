# Recall v1.16 — iCloud Drive

## Obiettivo
Recall può mostrare un nome qualsiasi per un documento e collegarlo a un PDF iCloud con un nome o un percorso completamente diverso.

Esempio:
- In Recall: `Lesioni cistiche`
- In iCloud: `Recall/Archivio/Addome/Pancreas/Pancreas Neoplasie Cistiche Sierose Mucinose.pdf`

Il collegamento viene salvato in `library/.recall/icloud-links.json` nel repository GitHub privato, quindi viene condiviso tra i dispositivi che usano lo stesso archivio Recall.

## Comando Rapido Apple
Il comando deve chiamarsi esattamente:

`Recall Apri iCloud`

Deve contenere due azioni:

1. **Ottieni file da iCloud Drive al percorso [Input comando rapido]**
   - origine: iCloud Drive
   - percorso: variabile `Input comando rapido`
   - `Errore, se il parametro non viene trovato`: ATTIVO

2. **Apri [File] in [App di default]**
   - `Mostra menu "Apri in"`: DISATTIVO

Recall passa al comando rapido il percorso già associato al documento.

## Prima associazione
Quando premi `Apri in iCloud` su un file non ancora associato, Recall apre una finestra.

Inserisci il percorso relativo alla radice di iCloud Drive, ad esempio:

`Recall/Archivio/Addome/Fegato/Metastasi epatiche.pdf`

Puoi anche scrivere solo il nome del file, ad esempio:

`Metastasi epatiche.pdf`

In questo caso Recall usa automaticamente la cartella suggerita in base a distretto e organo.

Premi `Salva e apri`.

## Modificare un collegamento
Nell'Archivio, accanto ad `Apri in iCloud`, premi `⋯` per cambiare il file iCloud associato.

## Nuovi documenti
Durante `+ Materiale` puoi compilare subito il campo `File iCloud corrispondente`. È facoltativo: se lo lasci vuoto, farai l'associazione al primo utilizzo.

## Importante
- Il PDF originale iCloud non viene cancellato quando elimini la copia da Recall/GitHub.
- Recall non modifica il PDF iCloud: lo apre tramite Comandi Rapidi e le annotazioni vengono gestite dalle app Apple.
- Per l'uso senza rete, il PDF deve essere già disponibile localmente in iCloud Drive sul dispositivo.

## Nota v1.15
Per Urgenze / emergenze e Interventistica il percorso iCloud suggerito non contiene sottocartelle. Per MSK e Pelvi puoi usare direttamente la cartella principale oppure, rispettivamente, `Osso` e `Utero`.
