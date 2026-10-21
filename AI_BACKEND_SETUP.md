# Recall v1.20 — configurazione Correzione AI

Recall resta ospitata su GitHub Pages. La correzione AI usa un piccolo backend separato perché la chiave API OpenAI non deve mai essere inserita nel browser o nel repository pubblico.

## 1. Crea una chiave API OpenAI

Crea una chiave API sulla piattaforma OpenAI. La fatturazione API è separata da ChatGPT Plus.

## 2. Prepara il backend

Usa il pacchetto `Recall_AI_Backend_Vercel.zip` fornito insieme alla v1.20.

Su Vercel crea un nuovo progetto con quei file e aggiungi queste Environment Variables:

- `OPENAI_API_KEY` = la tua chiave API OpenAI
- `RECALL_AI_TOKEN` = una password/token lungo scelto da te
- `OPENAI_MODEL` = opzionale; default `gpt-6-sol`

Dopo il deploy copia l'endpoint:

`https://NOME-PROGETTO.vercel.app/api/grade-report`

## 3. Configura Recall

In **Recall → ⚙︎ Impostazioni → Correzione AI dei referti** inserisci:

- Endpoint backend AI
- lo stesso `RECALL_AI_TOKEN`

Premi **Salva AI** e poi **Testa collegamento**.

## 4. Uso

Apri un caso di Refertazione, scrivi il referto e scegli:

- **Correzione rapida** = checklist locale/offline
- **✨ Correggi con AI** = correzione ragionata con errori, omissioni, terminologia, conclusione e referto migliorato

Per i casi con immagini, Recall invia al backend anche gli URL delle immagini didattiche pubbliche del caso. Il ground truth testuale resta il riferimento principale.

Non usare la funzione con dati identificativi di pazienti reali.
