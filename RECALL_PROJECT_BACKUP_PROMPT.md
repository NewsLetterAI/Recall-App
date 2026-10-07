# PROMPT DI CONTINUITÀ — PROGETTO RECALL

Incolla integralmente questo testo in una nuova chat ChatGPT se la conversazione originale non è più disponibile. Serve a riprendere il progetto senza ricostruire decisioni, architettura e stato del lavoro da zero.

---

Sto sviluppando con ChatGPT una PWA privata/personale chiamata **Recall**, pensata per il mio studio in Radiologia. Devi continuare il progetto esistente, non ricominciarlo da capo e non cambiare autonomamente le decisioni già concordate.

## 1. Obiettivo di Recall
Recall deve essere il mio ambiente personale per:
- archivio dei miei PDF, mappe e documenti di studio;
- ripasso attivo/free recall e spaced repetition;
- casi di refertazione TC/RM;
- casi testuali e casi con immagini didattiche;
- biblioteca personale ordinata per distretto/organo;
- sezione separata **Studi** per tesi, revisioni e progetti scientifici.

L'app deve rimanere semplice, veloce e usabile da iPhone, iPad e computer. Preferisco liste compatte, titoli piccoli e pochi passaggi. Evitare grandi card/quadratoni e strutture inutilmente profonde.

## 2. Architettura attuale
Hosting e codice:
- repository GitHub pubblico: **NewsLetterAI/Recall-App**
- GitHub Pages: **https://newsletterai.github.io/Recall-App/**
- questo repository contiene solo il codice della PWA.

Biblioteca personale:
- repository GitHub privato: **NewsLetterAI/expert-potato9643019**
- contiene i file personali sotto `library/archivio/...` e `library/studi/...`;
- Recall vi accede tramite fine-grained GitHub PAT salvato solo localmente sul dispositivo;
- permesso necessario: **Contents: Read and write**, limitato al solo repository privato;
- non chiedermi mai di incollare il token in chat.

iCloud Drive:
- i PDF originali/annotabili devono restare in **iCloud Drive**;
- su dispositivi Apple Recall usa il Comando Rapido **“Recall Apri iCloud”** per aprire l'originale;
- ogni elemento Recall può avere un `icloudPath` indipendente dal nome del file visualizzato o dal nome della copia GitHub;
- le associazioni vengono salvate nel repository privato in `library/.recall/icloud-links.json`;
- la copia GitHub è backup/fallback e non viene aggiornata automaticamente quando modifico o annoto il PDF su iCloud;
- eliminare un file da Recall/GitHub NON deve eliminare l'originale iCloud.

## 3. Regole dell'Archivio
Semantica:
- **Archivio** = tutto il materiale personale di studio;
- **Studi** = tesi, revisioni, protocolli, progetti scientifici.

Struttura principale attuale dell'Archivio:
- Addome
  - Fegato
  - Vie biliari
  - Pancreas
  - Reni
  - Surreni
  - Milza
  - Gastrointestinale
  - Peritoneo / retroperitoneo
- Torace
  - Polmone
  - Mediastino
  - Pleura
  - Parete toracica
  - Vascolare toracico
- Pelvi
  - file anche direttamente in Pelvi
  - unica sottocartella predefinita: **Utero**
  - **Ovaio/annessi è stata eliminata**
- **MSK**
  - file anche direttamente in MSK
  - unica sottocartella predefinita: **Osso**
  - non devono comparire altre sottocartelle MSK
- **Urgenze / emergenze**
  - nessuna sottocartella: tutti i file direttamente dentro
  - non deve esistere una seconda cartella Urgenza dentro Addome
- **Interventistica**
  - nessuna sottocartella: tutti i file direttamente dentro
- Neuroradiologia
- Testa-collo
- Cardiovascolare

Non introdurre categorie automatiche tipo “lesioni benigne/maligne”. Sotto un organo devono comparire i file realmente presenti.

## 4. Nuova gestione Archivio — da Recall v1.16
La pagina Archivio deve avere comandi contestuali, senza dover passare ogni volta dal form generale:
- **＋ File**: selezione multipla e caricamento diretto nella cartella attualmente aperta;
- **＋ Cartella**: crea una cartella principale oppure una sottocartella quando la struttura lo consente;
- **↻ Sincronizza**: sincronizzazione manuale rapida;
- cancellazione file direttamente dalla riga del file;
- le cartelle personalizzate vuote possono essere cancellate tramite menu `⋯`;
- non cancellare una cartella che contiene file: chiedere prima di eliminare/spostare i file;
- massimo due livelli di cartelle nell'Archivio;
- Urgenze/emergenze e Interventistica non devono accettare sottocartelle;
- MSK e Pelvi devono mantenere solo le sottocartelle predefinite concordate.

Poiché Git non conserva cartelle vuote, le cartelle create dall'utente vengono registrate in:
`library/.recall/archive-folders.json`
così vengono sincronizzate tra dispositivi.

## 5. Caricamento ed eliminazione file
Caricamento:
- il form generale **+ Materiale** continua a esistere;
- nella pagina Archivio, il nuovo **＋ File** deve essere il metodo più rapido;
- il caricamento va nel repository GitHub privato sotto `library/archivio/...`;
- supportare selezione multipla;
- mantenere il limite corrente di GitHub implementato nell'app (circa 50 MB per file) finché non viene progettato un metodo diverso.

Eliminazione:
- deve rimuovere davvero il file dal repository GitHub privato;
- deve rimuovere associazioni Recall/iCloud e dati locali collegati;
- NON deve eliminare il PDF originale da iCloud Drive.

## 6. UI/UX già decisa
- liste verticali compatte;
- niente grandi quadrati/card di navigazione;
- titoli file più piccoli dei titoli cartella/distretto;
- comportamento mobile corretto: bottom navigation non deve coprire i contenuti;
- PWA deve potersi aprire offline dopo almeno un'apertura online;
- il pulsante “Scarica offline” dei documenti dell'Archivio è stato rimosso perché i documenti di lavoro sono su iCloud Drive;
- rimangono funzioni offline per app shell e immagini didattiche dei casi.

## 7. Apertura documenti
Pulsanti per documento:
- **Apri in iCloud** = principale sui dispositivi Apple;
- `⋯` = imposta/cambia il collegamento iCloud;
- **Copia GitHub** = backup/fallback;
- **Elimina** = elimina da Recall + GitHub privato, non da iCloud.

Nota: alcuni PDF grandi possono richiedere qualche secondo per aprirsi anche se già scaricati in iCloud; parte del ritardo può dipendere dal passaggio PWA → Comandi Rapidi → Files/Preview. Recall non deve fare una sincronizzazione GitHub bloccante prima di aprire un file già associato.

## 8. Backup e continuità
In Recall v1.16 esiste questo stesso file:
`RECALL_PROJECT_BACKUP_PROMPT.md`
nel repository pubblico Recall-App.

Nelle Impostazioni deve esserci:
- **Copia prompt progetto**
- **Scarica prompt .md**

Il backup dati JSON dell'app è separato dal prompt di continuità: il JSON salva lo stato dell'app, mentre questo documento salva le decisioni e l'architettura del progetto per una futura chat.

## 9. Funzioni studio/refertazione già presenti
Recall contiene già:
- ripasso/free recall;
- spaced repetition;
- casi di refertazione;
- casi basati sulle mappe e casi “argomenti non trattati nelle mappe”;
- casi con immagini sintetiche didattiche;
- filtri TC/RM/distretto/argomento;
- libreria di mappe e documenti.

Regola importante: Random/TC/RM deve attingere agli argomenti presenti nelle mie mappe; argomenti extra devono restare chiaramente separati come “Argomenti non trattati nelle mappe”.

## 10. Materiale di studio già usato nel progetto
Mappe principali storicamente integrate:
- FEGATO
- FEGATO — Protocollo RM
- PANCREAS TUTTO
- K PANCREAS
- VIE BILIARI

Sono stati inoltre creati/aggiunti casi didattici e immagini per fegato, pancreas e vie biliari. Quando in futuro vengono create nuove immagini/casi per Recall, devono essere inseriti direttamente nell'ultima versione dell'app e collegati ai casi corretti, non lasciati come file isolati fuori dal pacchetto.

## 11. Versione corrente al momento di questo backup
Versione di riferimento: **Recall v1.16**.

La v1.16 parte dalla v1.15.1 e aggiunge:
- prompt di continuità del progetto;
- pulsante per copiarlo/scaricarlo dalle Impostazioni;
- toolbar contestuale nell'Archivio;
- upload diretto e multiplo nella cartella aperta;
- creazione di cartelle personalizzate;
- cancellazione delle cartelle personalizzate vuote;
- sincronizzazione delle cartelle personalizzate tramite GitHub privato;
- accesso rapido alla sincronizzazione dell'Archivio.

## 12. Problemi già risolti: non reintrodurli
- MIME errato dei PDF GitHub che causava errore JSON nel browser;
- bottom nav iPhone che copriva i contenuti;
- PWA che non partiva correttamente offline;
- vecchio annotatore PDF interno troppo macchinoso: NON reintrodurlo;
- bottone “Scarica offline” per i documenti dell'Archivio: NON reintrodurlo;
- categorie automatiche dell'Archivio: NON reintrodurle;
- richiesta obbligatoria “Organo/sede” dentro MSK: NON reintrodurla;
- sottocartelle in Urgenze/emergenze e Interventistica: NON reintrodurle.

## 13. Roadmap / punti ancora aperti
Da valutare solo se richiesto:
- soluzione migliore per aprire i file iCloud da computer non Apple o senza Comandi Rapidi;
- eventuale pulsante manuale “Aggiorna copia GitHub” per sostituire il backup GitHub con una versione iCloud più recente;
- ottimizzazioni ulteriori per PDF molto grandi;
- ulteriori funzioni di gestione Archivio (sposta/rinomina file, ordinamento, selezione multipla), ma senza complicare l'interfaccia;
- espansione progressiva di casi e mappe di refertazione.

## 14. Come devi lavorare con me su Recall
- Risposte operative, concise e molto specifiche.
- Se devi farmi caricare file su GitHub, indicare esattamente **quale repository**, **quali file** e **quali pulsanti** usare.
- Il repository pubblico `Recall-App` contiene il codice; il repository privato contiene la biblioteca. Non confonderli.
- Quando preparo più modifiche, preferisco caricare un unico aggiornamento finale invece di molti patch intermedi.
- Se dici che un file/ZIP è pronto, devi averlo realmente generato e verificato.
- Prima di modificare l'app, partire dall'ultima versione disponibile e non perdere le funzioni già presenti.
- Non cambiare autonomamente la struttura dell'Archivio concordata.

Continua da questo stato e chiedimi chiarimenti solo quando una decisione cambia davvero l'architettura o il comportamento desiderato.
