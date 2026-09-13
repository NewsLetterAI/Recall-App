
const reportCases = [
  // ---------- ARGOMENTI NON TRATTATI NELLE MAPPE ----------
  {
    id:"case_l1_torace_lsd",
    level:1,
    sourceType:"outside",
    sourceLabel:"Argomento non trattato nelle mappe",
    modalityCode:"TC",
    region:"Torace",
    topic:"Neoplasia polmonare",
    title:"TC torace con mdc — massa polmonare al LSD",
    area:"Torace",
    organ:"Polmone",
    modality:"TC torace con mdc",
    clinical:"Uomo di 67 anni, ex fumatore, tosse persistente e calo ponderale.",
    prompt:"Descrivi il quadro e scrivi un referto completo e ordinato.",
    task:"Obiettivo: sede, morfologia, rapporti con pleura e mediastino, eventuale interessamento vascolare, noduli secondari e conclusione.",
    findings:[
      ["Lesione del lobo superiore destro / LSD","lsd|lobo superiore destro|polmone destro|upper lobe destro|lus destro"],
      ["Massa o lesione polmonare solida","massa|lesione|neoformazione|formazione solida|nodulo dominante"],
      ["Margini spiculati / irregolari","spicul|irregolar|frastagliat"],
      ["Contatto pleurico","pleur"],
      ["Contatto / estensione mediastinica","mediast"],
      ["Sospetto coinvolgimento vascolare","vascolar|vaso|arteri|ven"],
      ["Noduli secondari / metastasi polmonari","nodul|metast|mts|secondar"],
      ["Conclusione di sospetta neoplasia polmonare","neoplas|eteroplas|sospetta malignita|tumor"]
    ],
    sampleReport:"TC torace con mezzo di contrasto: nel lobo superiore destro si evidenzia voluminosa formazione solida a margini spiculati, a contatto con la pleura e con ampio rapporto verso il mediastino. Il quadro è sospetto per interessamento di strutture vascolari adiacenti. Si associano ulteriori noduli polmonari in altri lobi, compatibili con secondarismi. Reperto complessivamente sospetto per neoplasia polmonare primaria localmente avanzata."
  },
  {
    id:"case_l2_torace_img",
    level:2,
    sourceType:"outside",
    sourceLabel:"Argomento non trattato nelle mappe",
    modalityCode:"TC",
    region:"Torace",
    topic:"Neoplasia polmonare",
    title:"TC torace — caso con immagini sintetiche",
    area:"Torace",
    organ:"Polmone",
    modality:"TC torace con e senza mdc (caso sintetico)",
    clinical:"Paziente con sospetta neoplasia polmonare. Valutazione stadiante.",
    prompt:"Osserva le immagini sintetiche e scrivi un referto radiologico.",
    task:"Obiettivo: descrivere la lesione dominante, i rapporti con pleura/mediastino/strutture vascolari e gli eventuali noduli aggiuntivi. Le immagini sono didattiche, non DICOM reali.",
    images:["assets/cases/case_torace_axial_lung.png","assets/cases/case_torace_axial_mediastinal.png","assets/cases/case_torace_axial_metastases.png","assets/cases/case_torace_coronal.png"],
    findings:[
      ["Lesione del lobo superiore destro / LSD","lsd|lobo superiore destro|polmone destro|upper lobe destro|apicale destra"],
      ["Massa / formazione solida","massa|lesione|neoformazione|formazione solida|nodulo dominante"],
      ["Margini spiculati / irregolari","spicul|irregolar|stellat|frastagliat"],
      ["Contatto pleurico","pleur"],
      ["Rapporto / contatto mediastinico","mediast"],
      ["Possibile interessamento vascolare","vascolar|vaso|arteri|ven"],
      ["Noduli aggiuntivi compatibili con secondarismi","nodul|metast|mts|secondar"],
      ["Conclusione compatibile con sospetta neoplasia polmonare","neoplas|sospetta malignita|eteroplastica|tumorale"]
    ],
    sampleReport:"Nelle immagini TC del torace si osserva voluminosa formazione solida del lobo superiore destro, a margini spiculati, a contatto con la pleura e con ampio rapporto con il mediastino; nelle immagini mediastiniche vi è sospetto interessamento di strutture vascolari adiacenti. Si associano ulteriori noduli polmonari in altri lobi, compatibili con secondarismi. Quadro sospetto per neoplasia polmonare primaria del LSD con disseminazione intrapolmonare."
  },

  // ---------- CASI DERIVATI DALLA MAPPA FEGATO ----------
  {
    id:"case_rm_hcc",
    level:1,
    sourceType:"map",
    sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato",
    modalityCode:"RM",
    region:"Addome",
    topic:"HCC / LI-RADS",
    title:"RM fegato — nodulo in cirrosi sospetto per HCC",
    area:"Addome",
    organ:"Fegato",
    modality:"RM fegato con mdc epatospecifico",
    clinical:"Paziente con cirrosi in sorveglianza per HCC.",
    prompt:"Scrivi un referto focalizzato sulla lesione epatica e concludi il caso.",
    task:"Obiettivo: contesto cirrotico, nodulo, APHE, washout, capsula, DWI/HBP e conclusione.",
    findings:[
      ["Fegato cirrotico / contesto a rischio","cirrosi|cirrotic|fegato a rischio"],
      ["Nodulo / lesione epatica","nodulo|lesione|formazione"],
      ["Iperenhancement arterioso non periferico","arterios|aphe|ipervascolar"],
      ["Washout nelle fasi successive","washout|ipoenhancement tardiv|portale"],
      ["Capsula","capsul"],
      ["Restrizione della diffusione","dwi|diffusion|restrizion"],
      ["Ipointensità in fase epatobiliare","epatobiliar|hbp|ipointens"],
      ["Conclusione sospetta/compatibile con HCC","hcc|epatocarcinoma|compatibile con hcc"]
    ],
    sampleReport:"In fegato a morfologia cirrotica si apprezza nodulo epatico focale con iperenhancement arterioso non periferico, washout nelle fasi successive e capsula, associato a restrizione della diffusione e ipointensità in fase epatobiliare. Reperto altamente sospetto/compatibile con HCC nel corretto contesto clinico."
  },
  {
    id:"case_rm_hcc_img",
    level:2,
    sourceType:"map",
    sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato",
    modalityCode:"RM",
    region:"Addome",
    topic:"HCC / LI-RADS",
    title:"RM fegato — HCC con immagini sintetiche",
    area:"Addome",
    organ:"Fegato",
    modality:"RM fegato multiparametrica (caso sintetico)",
    clinical:"Paziente con cirrosi. Valutazione di nodulo epatico.",
    prompt:"Osserva l'immagine didattica multiparametrica e scrivi un referto radiologico.",
    task:"Obiettivo: riconoscere APHE, washout, restrizione della diffusione, ipointensità in HBP e concludere per HCC.",
    images:["assets/cases/case_rm_hcc_panel.png"],
    findings:[
      ["Fegato cirrotico / contesto a rischio","cirrosi|cirrotic|fegato a rischio"],
      ["Nodulo / lesione epatica","nodulo|lesione|formazione"],
      ["Iperenhancement arterioso non periferico","arterios|aphe|ipervascolar"],
      ["Washout nelle fasi successive","washout|ipoenhancement tardiv|portale"],
      ["Restrizione della diffusione","dwi|diffusion|restrizion"],
      ["Ipointensità in fase epatobiliare","epatobiliar|hbp|ipointens"],
      ["Conclusione sospetta/compatibile con HCC","hcc|epatocarcinoma|compatibile con hcc"]
    ],
    sampleReport:"Nella figura multiparametrica si osserva, in fegato a morfologia cirrotica, lesione focale epatica con iperenhancement arterioso non periferico, washout nelle fasi successive, restrizione della diffusione e ipointensità in fase epatobiliare. Quadro compatibile con HCC nel corretto contesto clinico."
  },
  {
    id:"case_tc_lirads",
    level:1,
    sourceType:"map",
    sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato",
    modalityCode:"TC",
    region:"Addome",
    topic:"HCC / LI-RADS",
    title:"TC fegato multiphasica — observation in fegato a rischio",
    area:"Addome",
    organ:"Fegato",
    modality:"TC addome multiphasica con mdc",
    clinical:"Paziente con cirrosi. Nodulo epatico rilevato in follow-up.",
    prompt:"Referta la lesione come observation in un paziente eleggibile a LI-RADS.",
    task:"Obiettivo: descrivere APHE non periferico, washout non periferico, capsula, dimensioni/crescita e formulare una conclusione coerente.",
    findings:[
      ["Contesto LI-RADS / cirrosi","cirrosi|li-rads|lirads"],
      ["Observation / lesione focale","observation|nodulo|lesione"],
      ["APHE non periferico","aphe|iperenhancement arterioso|ipervascolarizzazione arteriosa"],
      ["Washout non periferico","washout"],
      ["Capsula con enhancement","capsula"],
      ["Dimensioni della lesione","mm|cm|dimension"],
      ["Conclusione LI-RADS / HCC","lr-5|lr5|hcc|epatocarcinoma"]
    ],
    sampleReport:"In fegato cirrotico si rileva observation focale con iperenhancement arterioso non periferico, washout non periferico nelle fasi portale/tardiva e capsula con enhancement. Nel corretto contesto e in relazione alle dimensioni, reperto altamente suggestivo per HCC e classificabile secondo LI-RADS."
  },
  {
    id:"case_rm_steatosi_focale",
    level:1,
    sourceType:"map",
    sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato",
    modalityCode:"RM",
    region:"Addome",
    topic:"Steatosi focale / focal fatty sparing",
    title:"RM fegato — pseudolesione da steatosi focale",
    area:"Addome",
    organ:"Fegato",
    modality:"RM fegato",
    clinical:"Reperto focale incidentale in paziente con alterazioni metaboliche.",
    prompt:"Descrivi il reperto e imposta la diagnosi differenziale con una vera massa.",
    task:"Obiettivo: chemical shift, assenza di effetto massa, vasi non distorti, sede tipica e conclusione.",
    findings:[
      ["Caduta di segnale in out/opposed phase","out|opposed|fuori fase|caduta di segnale|abbattimento"],
      ["Assenza di effetto massa","assenza di effetto massa|no effetto massa"],
      ["Vasi non distorti / decorso conservato","vasi non distorti|decorso vascolare conservato|non distorce"],
      ["Sede tipica periportale / IV segmento / falciforme","segmento iv|falciforme|periport|vena porta"],
      ["Conclusione per steatosi focale / pseudolesione","steatosi focale|pseudolesione|focal fatty"]
    ],
    sampleReport:"Area focale epatica con caduta di segnale nelle sequenze opposed/out-of-phase, priva di effetto massa e senza distorsione dei vasi attraversanti, in sede tipica. Quadro compatibile con steatosi focale/pseudolesione da alterato apporto ematico, senza caratteristiche di massa solida."
  },
  {
    id:"case_rm_emocromatosi",
    level:1,
    sourceType:"map",
    sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato",
    modalityCode:"RM",
    region:"Addome",
    topic:"Emocromatosi / emosiderosi",
    title:"RM addome — sovraccarico di ferro",
    area:"Addome",
    organ:"Fegato",
    modality:"RM addome con sequenze T2* / GRE",
    clinical:"Sospetto sovraccarico di ferro.",
    prompt:"Descrivi i reperti e orienta tra emocromatosi primaria e sovraccarico secondario.",
    task:"Obiettivo: perdita di segnale, T2*/GRE, distribuzione epatica vs sistema reticolo-endoteliale.",
    findings:[
      ["Riduzione/perdita di segnale epatico","riduzione del segnale|perdita di segnale|ipointens"],
      ["Sequenze T2* / gradient echo","t2*|gradient echo|gre"],
      ["Sovraccarico di ferro","ferro|emocromatosi|emosiderosi"],
      ["Valutazione della milza / distribuzione RES","milza|reticolo|res|midollo"],
      ["Conclusione primaria vs secondaria","primaria|secondaria|emosiderosi|emocromatosi"]
    ],
    sampleReport:"Marcata riduzione dell'intensità di segnale del parenchima epatico, più evidente nelle sequenze gradient-echo/T2*, compatibile con deposito di ferro. La distribuzione del calo di segnale negli organi del sistema reticolo-endoteliale deve essere considerata per orientare tra forma primaria e sovraccarico secondario."
  },
  {
    id:"case_rm_adenoma",
    level:1,
    sourceType:"map",
    sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato",
    modalityCode:"RM",
    region:"Addome",
    topic:"Adenoma epatico",
    title:"RM fegato — adenoma epatocellulare",
    area:"Addome",
    organ:"Fegato",
    modality:"RM fegato con mdc epatospecifico",
    clinical:"Giovane donna in terapia estroprogestinica con massa epatica.",
    prompt:"Scrivi un referto orientato alla caratterizzazione dell'adenoma.",
    task:"Obiettivo: segnale T1/T2 variabile, grasso in/out, enhancement arterioso, fase epatobiliare e possibile emorragia.",
    findings:[
      ["Massa epatica ben circoscritta","massa|lesione|formazione|ben circoscritta"],
      ["Grasso / caduta di segnale in out-phase","grasso|out|opposed|abbattimento"],
      ["Enhancement arterioso precoce","arterios|enhancement precoce|ipervascolar"],
      ["Ipointensità in fase epatobiliare","epatobiliar|hbp|ipointens"],
      ["Possibile emorragia","emorrag|sangue"],
      ["Conclusione per adenoma","adenoma"]
    ],
    sampleReport:"Formazione epatica ben circoscritta a segnale eterogeneo, con possibile componente adiposa documentata da caduta di segnale in opposed-phase, enhancement arterioso precoce e prevalente ipointensità in fase epatobiliare; eventuali componenti emorragiche contribuiscono all'eterogeneità. Quadro compatibile con adenoma epatocellulare nel corretto contesto clinico."
  },
  {
    id:"case_tc_emangioma",
    level:1,
    sourceType:"map",
    sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato",
    modalityCode:"TC",
    region:"Addome",
    topic:"Emangioma",
    title:"TC fegato multiphasica — emangioma tipico",
    area:"Addome",
    organ:"Fegato",
    modality:"TC addome multiphasica con mdc",
    clinical:"Lesione epatica incidentale.",
    prompt:"Descrivi il pattern di enhancement e concludi il caso.",
    task:"Obiettivo: ipodensità basale, enhancement periferico nodulare discontinuo, blood-pool e riempimento centripeto.",
    findings:[
      ["Lesione ipodensa in basale","ipodens"],
      ["Enhancement periferico nodulare discontinuo","periferic|nodular|discontinu"],
      ["Comportamento blood-pool","blood pool|bloodpool|densita arterie"],
      ["Riempimento centripeto/progressivo","centripet|progressiv"],
      ["Conclusione per emangioma","emangioma"]
    ],
    sampleReport:"Lesione epatica ipodensa in basale che dopo mezzo di contrasto mostra enhancement periferico nodulare discontinuo con comportamento blood-pool e progressivo riempimento centripeto nelle fasi successive. Quadro tipico per emangioma."
  },
  {
    id:"case_tc_ascesso",
    level:1,
    sourceType:"map",
    sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato",
    modalityCode:"TC",
    region:"Addome",
    topic:"Ascesso epatico",
    title:"TC addome con mdc — ascesso epatico",
    area:"Addome",
    organ:"Fegato",
    modality:"TC addome con mdc",
    clinical:"Paziente febbrile con dolore in ipocondrio destro e sepsi.",
    prompt:"Descrivi la lesione e i segni che orientano verso ascesso.",
    task:"Obiettivo: centro ipodenso/fluido, enhancement periferico, double target sign, edema e possibile gas/cluster sign.",
    findings:[
      ["Lesione ipodensa / contenuto fluido","ipodens|fluido|raccolta"],
      ["Enhancement periferico / capsulare","enhancement periferic|capsula|anello"],
      ["Double target sign","double target|doppio target"],
      ["Edema periferico","edema"],
      ["Gas / livelli idro-aerei o cluster sign","gas|idro-aereo|cluster"],
      ["Conclusione per ascesso","ascesso"]
    ],
    sampleReport:"Raccolta epatica a contenuto prevalentemente fluido, ipodensa, con enhancement periferico/capsulare e edema del parenchima circostante; il pattern ad anelli è compatibile con double target sign. Eventuali bolle gassose o aggregazione di piccole cavità rafforzano il sospetto di ascesso epatico."
  },
  {
    id:"case_tc_cirrosi",
    level:1,
    sourceType:"map",
    sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato",
    modalityCode:"TC",
    region:"Addome",
    topic:"Cirrosi / ipertensione portale",
    title:"TC addome — cirrosi avanzata e ipertensione portale",
    area:"Addome",
    organ:"Fegato",
    modality:"TC addome con mdc",
    clinical:"Paziente con epatopatia cronica.",
    prompt:"Scrivi un referto completo dei segni morfologici e di ipertensione portale.",
    task:"Obiettivo: margini nodulari, dismorfia/atrofia-ipertrofia, splenomegalia, collaterali, ascite e vena porta.",
    findings:[
      ["Margini epatici nodulari / irregolari","margini nodular|irregolar|bozzut"],
      ["Dismorfia / atrofia-ipertrofia segmentale","atrofia|ipertrofia|dismorf"],
      ["Splenomegalia","splenomegalia|milza aumentata"],
      ["Circoli collaterali / varici","collateral|varici|paraombelical"],
      ["Ascite","ascite"],
      ["Alterazioni portali / trombosi o calibro aumentato","vena porta|trombosi portale|cavernoma"],
      ["Conclusione cirrosi con ipertensione portale","cirrosi|ipertensione portale"]
    ],
    sampleReport:"Fegato dismorfico con margini irregolari/nodulari e alterazioni volumetriche lobari, associato a splenomegalia, circoli collaterali porto-sistemici e ascite; valutare calibro e pervietà della vena porta. Quadro di cirrosi avanzata con segni di ipertensione portale."
  }
,

  // ---------- PANCREAS TUTTO ----------
  {
    id:"case_tc_pancreatite_edematosa",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Pancreatite acuta",
    title:"TC addome — pancreatite acuta interstiziale-edematosa",
    area:"Addome", organ:"Pancreas", modality:"TC addome con mdc",
    clinical:"Paziente con dolore epigastrico a barra e lipasi elevate.",
    prompt:"Scrivi un referto focalizzato sul pancreas e sulle complicanze locali.",
    task:"Obiettivo: aumento volumetrico, enhancement conservato, stranding peripancreatico, raccolte e assenza/presenza di necrosi.",
    findings:[
      ["Aumento volumetrico / edema pancreatico","aumento volum|edema|tumef"],
      ["Enhancement conservato del parenchima","enhancement conserv|captazione conserv|pancreas vitale"],
      ["Stranding / imbibizione del grasso peripancreatico","stranding|imbibizione|grasso peripancreatico"],
      ["Ricerca di raccolte peripancreatiche","raccolt|apfc"],
      ["Assenza di necrosi se enhancement omogeneo","assenza di necrosi|non necrosi|enhancement omogeneo"],
      ["Conclusione per pancreatite acuta edematosa","pancreatite acuta|edematosa|interstiziale"]
    ],
    sampleReport:"Pancreas diffusamente tumefatto con enhancement parenchimale conservato e imbibizione del grasso peripancreatico. Eventuali raccolte fluide peripancreatiche vanno descritte per sede ed estensione. In assenza di aree non perfuse non si documentano segni di necrosi pancreatica. Quadro compatibile con pancreatite acuta interstiziale-edematosa."
  },
  {
    id:"case_tc_pancreatite_necrotizzante",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Pancreatite necrotizzante",
    title:"TC addome — pancreatite acuta necrotizzante",
    area:"Addome", organ:"Pancreas", modality:"TC addome con mdc",
    clinical:"Pancreatite acuta severa con peggioramento clinico dopo alcuni giorni.",
    prompt:"Referta estensione della necrosi e raccolte associate.",
    task:"Obiettivo: aree non captanti, necrosi pancreatica/peripancreatica, ANC, gas e complicanze vascolari.",
    findings:[
      ["Aree pancreatiche non captanti compatibili con necrosi","non capt|ipodens|necrosi"],
      ["Necrosi pancreatica e/o peripancreatica","necrosi pancreatica|peripancreatica"],
      ["Raccolta necrotica acuta ANC se <4 settimane","anc|raccolta necrotica acuta"],
      ["Ricerca di gas come possibile segno di infezione","gas|aria|infetta"],
      ["Ricerca di pseudoaneurisma o trombosi venosa","pseudoaneurisma|trombosi|splenica|porta"],
      ["Conclusione per pancreatite necrotizzante","pancreatite necrotizzante"]
    ],
    sampleReport:"Aree di mancata impregnazione contrastografica del parenchima pancreatico compatibili con necrosi, associate a componente necrotico-fluida peripancreatica. Se insorta da meno di 4 settimane la raccolta è inquadrabile come ANC. Va segnalata l'eventuale presenza di gas e vanno ricercate complicanze vascolari."
  },
  {
    id:"case_rm_ipmn_bd",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"IPMN",
    title:"RM pancreas/MRCP — branch-duct IPMN",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con colangio-RM",
    clinical:"Riscontro incidentale di lesione cistica del processo uncinato.",
    prompt:"Descrivi la lesione e valuta i criteri di rischio presenti nella mappa.",
    task:"Obiettivo: cluster di cisti, comunicazione con Wirsung, dimensioni, nodulo murale, parete, calibro del dotto principale.",
    findings:[
      ["Lesione cistica lobulata / cluster a grappolo d'uva","lobulat|grappolo|cluster|cisti"],
      ["Comunicazione con il dotto pancreatico","comunica|wirsung|dotto pancreatico"],
      ["Localizzazione al processo uncinato","uncinato"],
      ["Misura della cisti","mm|cm|dimension"],
      ["Valutazione del nodulo murale","nodulo murale"],
      ["Valutazione del Wirsung","wirsung|dotto principale"],
      ["Conclusione per BD-IPMN","bd-ipmn|branch duct|ipmn"]
    ],
    sampleReport:"Nel processo uncinato si rileva formazione cistica lobulata/cluster di piccole cisti in comunicazione con un ramo secondario del dotto pancreatico, compatibile con BD-IPMN. Devono essere riportate dimensioni, eventuali noduli murali o ispessimento parietale e calibro del Wirsung."
  },
  {
    id:"case_rm_mcn",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"Neoplasia cistica mucinosa",
    title:"RM pancreas — neoplasia cistica mucinosa",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con mdc",
    clinical:"Donna di 46 anni con lesione cistica del corpo-coda.",
    prompt:"Caratterizza la lesione e distinguila da IPMN e cistoadenoma sieroso.",
    task:"Obiettivo: sede corpo-coda, macrocisti/multiloculazione, setti/noduli, mancata comunicazione con Wirsung.",
    findings:[
      ["Sede corpo-coda","corpo|coda"],
      ["Lesione cistica multiloculare / macrocistica","multiloc|macrocist|cisti"],
      ["Non comunicazione con Wirsung","non comunica|assenza comunicazione"],
      ["Setti o noduli murali se presenti","setti|nodul"],
      ["Dimensioni e ispessimento di parete","dimension|parete ispess"],
      ["Conclusione per MCN / neoplasia cistica mucinosa","mcn|neoplasia cistica mucinosa"]
    ],
    sampleReport:"Formazione cistica multiloculare del corpo-coda pancreatico, senza evidenza di comunicazione con il dotto pancreatico principale. Vanno descritti dimensioni, setti, eventuali noduli murali e ispessimento parietale. Nel corretto contesto clinico il quadro è compatibile con neoplasia cistica mucinosa."
  },
  {
    id:"case_rm_scn",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"Cistoadenoma sieroso",
    title:"RM pancreas — cistoadenoma sieroso microcistico",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con mdc",
    clinical:"Donna anziana con incidentaloma pancreatico.",
    prompt:"Descrivi i caratteri che orientano verso cistoadenoma sieroso.",
    task:"Obiettivo: microcisti, honeycomb, cicatrice centrale, mancata comunicazione col Wirsung.",
    findings:[
      ["Pattern microcistico / honeycomb","microcist|honeycomb|nido d ape"],
      ["Possibile cicatrice centrale stellata","cicatrice centrale|stellata"],
      ["Non comunicazione con Wirsung","non comunica|wirsung"],
      ["Assenza di noduli murali sospetti","assenza nodul|senza nodul"],
      ["Conclusione per cistoadenoma sieroso","cistoadenoma sieroso|sieroso"]
    ],
    sampleReport:"Lesione pancreatica a struttura microcistica con aspetto honeycomb e possibile cicatrice centrale, senza comunicazione con il dotto pancreatico principale. Quadro orientativo per cistoadenoma sieroso."
  },

  // ---------- K PANCREAS ----------
  {
    id:"case_tc_pdac_head",
    level:1, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"TC", region:"Addome", topic:"PDAC",
    title:"TC pancreas — adenocarcinoma della testa",
    area:"Addome", organ:"Pancreas", modality:"TC pancreas multiphasica",
    clinical:"Paziente con ittero ostruttivo indolore.",
    prompt:"Scrivi un referto diagnostico e di staging locale.",
    task:"Obiettivo: massa ipovascolare, double duct, atrofia a monte, rapporti vascolari e metastasi.",
    findings:[
      ["Massa della testa pancreatica","testa|massa|lesione"],
      ["Ipovascolarizzazione / ipoattenuazione","ipovascolar|ipodens|ipoatten"],
      ["Double duct sign","double duct|doppio dotto|coledoco|wirsung"],
      ["Atrofia pancreatica a monte","atrofia"],
      ["Rapporti con VMS/VP/AMS/TC/AEC","vms|vena porta|ams|celiaco|epatica"],
      ["Ricerca di linfonodi e metastasi","linfonod|metast|mts"],
      ["Conclusione per PDAC","pdac|adenocarcinoma duttale|adenocarcinoma pancreatico"]
    ],
    sampleReport:"Massa ipovascolare della testa pancreatica con dilatazione a monte del dotto pancreatico e delle vie biliari, configurando double duct sign. Va descritta l'eventuale atrofia distale, il rapporto angolare con VMS/VP e assi arteriosi e la presenza di malattia linfonodale o metastatica. Quadro sospetto per PDAC."
  },
  {
    id:"case_tc_pdac_borderline",
    level:1, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"TC", region:"Addome", topic:"PDAC: resecabilità",
    title:"TC pancreas — staging vascolare borderline",
    area:"Addome", organ:"Pancreas", modality:"TC pancreas multiphasica",
    clinical:"PDAC noto, valutazione preoperatoria.",
    prompt:"Referta i rapporti vascolari usando abutment/encasement e formula il giudizio di resecabilità.",
    task:"Obiettivo: gradi di contatto, irregolarità/trombosi venosa, ricostruibilità e assi arteriosi.",
    findings:[
      ["Abutment <180° o encasement >180°","abutment|encasement|180"],
      ["VMS e vena porta","vms|vena mesenterica superiore|vena porta"],
      ["Irregolarità del contorno / trombosi venosa","irregolar|trombosi"],
      ["AMS / tripode celiaco / arteria epatica comune","ams|celiaco|epatica comune"],
      ["Valutazione della ricostruibilità venosa","ricostru|ricostruibile"],
      ["Conclusione resecabile/borderline/non resecabile","resecabil|borderline|non resecabile"]
    ],
    sampleReport:"La lesione deve essere descritta in rapporto a VMS/VP e assi arteriosi indicando l'estensione angolare del contatto: abutment se <180°, encasement se >180°. Per il comparto venoso vanno riportati irregolarità, trombosi e possibilità di ricostruzione; la conclusione deve esprimere la categoria di resecabilità."
  },
  {
    id:"case_rm_pdac_liver_staging",
    level:1, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"RM", region:"Addome", topic:"PDAC: metastasi epatiche",
    title:"RM fegato — staging di PDAC con TC negativa",
    area:"Addome", organ:"Fegato/Pancreas", modality:"RM fegato con DWI e mdc epatospecifico",
    clinical:"PDAC potenzialmente operabile; TC senza metastasi epatiche ma sospetto clinico elevato.",
    prompt:"Referta la ricerca di piccole metastasi epatiche.",
    task:"Obiettivo: DWI ad alto b, ADC, fase epatobiliare e distinzione da piccole lesioni benigne.",
    findings:[
      ["Ricerca di lesioni focali epatiche","lesion|focale|epatic"],
      ["DWI ad alto b","dwi|b800|b1000"],
      ["ADC per confermare restrizione","adc|restrizion"],
      ["Fase epatobiliare","epatobiliar|hbp"],
      ["Conclusione presenza/assenza di metastasi","metast|mts|secondar"],
      ["Eventuale DD con cisti/amartomi/angioma fibroso","cisti|amartom|angioma"]
    ],
    sampleReport:"La RM deve ricercare piccole lesioni focali epatiche mediante DWI/ADC e fase epatobiliare. Le lesioni sospette per metastasi mostrano restrizione della diffusione e difetto di captazione epatobiliare; devono essere considerate le possibili mimics benigne descritte nella mappa."
  },
  {
    id:"case_tc_pdac_post_nat",
    level:1, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"TC", region:"Addome", topic:"PDAC post-neoadiuvante",
    title:"TC pancreas — restaging dopo neoadiuvante",
    area:"Addome", organ:"Pancreas", modality:"TC pancreas post-neoadiuvante",
    clinical:"PDAC borderline dopo trattamento neoadiuvante.",
    prompt:"Confronta con il baseline e formula il restaging.",
    task:"Obiettivo: dimensioni, progressione, rapporti vascolari, pattern solido→halo e limiti nel distinguere fibrosi da residuo.",
    findings:[
      ["Confronto dimensionale","dimension|riduzione|aumento"],
      ["Assenza/presenza di progressione","progression|stabile|progressiva"],
      ["Rapporti vascolari residui","vascolar|vms|porta|ams"],
      ["Halo perivascolare / fibrosi post-trattamento","halo|fibrosi|perivascolare"],
      ["Limite DD fibrosi vs residuo tumorale","fibrosi|residuo tumorale"],
      ["Conclusione sulla risposta/restaging","risposta|restaging|resecabil"]
    ],
    sampleReport:"Nel confronto con il baseline vanno riportate variazioni dimensionali, comparsa di nuove sedi di malattia e modificazioni dei rapporti vascolari. La persistenza di tessuto perivascolare può riflettere fibrosi post-trattamento; il passaggio a un halo sfumato può accompagnare una risposta favorevole. La distinzione tra fibrosi e residuo tumorale resta limitata."
  },

  // ---------- VIE BILIARI ----------
  {
    id:"case_rm_psc",
    level:1, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"PSC",
    title:"Colangio-RM — colangite sclerosante primitiva",
    area:"Addome", organ:"Vie biliari", modality:"RM fegato con colangio-RM",
    clinical:"Paziente con colestasi cronica e MICI.",
    prompt:"Descrivi l'albero biliare e le complicanze.",
    task:"Obiettivo: stenosi multifocali, beading, albero potato, diverticoli, flogosi e segni di colangiocarcinoma.",
    findings:[
      ["Stenosi multifocali intra/extraepatiche","stenosi|multifocal"],
      ["Dilatazioni alternate / collana di perle","collana|beaded|dilatazioni"],
      ["Pruned tree / albero potato","albero potato|pruned"],
      ["Diverticoli sacculari","diverticoli|saccular"],
      ["Ispessimento/enhancement periduttale se flogosi","enhancement peridutt|ispessimento"],
      ["Ricerca di stenosi dominante / sospetto CCA","stenosi dominante|colangiocarcinoma|cca"],
      ["Conclusione compatibile con PSC","psc|colangite sclerosante primitiva"]
    ],
    sampleReport:"La colangio-RM mostra multiple stenosi brevi alternate a segmenti duttali normali o dilatati, con aspetto a collana di perle e progressiva rarefazione dei dotti periferici. Vanno segnalati diverticoli, segni di flogosi, calcoli e soprattutto stenosi dominanti o reperti sospetti per colangiocarcinoma."
  },
  {
    id:"case_rm_igg4_cholangitis",
    level:1, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Colangite IgG4-correlata",
    title:"RM pancreas e vie biliari — colangite IgG4-correlata",
    area:"Addome", organ:"Vie biliari/Pancreas", modality:"RM addome + colangio-RM",
    clinical:"Colestasi con IgG4 elevate e sospetta malattia multiorgano.",
    prompt:"Descrivi vie biliari e pancreas e imposta la DD con PSC.",
    task:"Obiettivo: stenosi lunghe, sede distale, pancreas coinvolto, progressivo enhancement e conclusione IgG4.",
    findings:[
      ["Stenosi biliari lunghe","stenosi lung"],
      ["Coinvolgimento distale della via biliare principale","distale|coledoco"],
      ["Pancreas aumentato / coinvolto","pancreas|aumentato|salsiccia"],
      ["Restrizione pancreatica","dwi|restrizion"],
      ["Progressivo enhancement tardivo pancreatico","progressivo enhancement|tardiv"],
      ["Conclusione per malattia IgG4-correlata","igg4|colangite igg4"]
    ],
    sampleReport:"Si documentano stenosi biliari relativamente lunghe, con prevalente interessamento distale, associate a reperti pancreatici compatibili con pancreatite autoimmune. Nel corretto contesto laboratoristico il quadro orienta per colangite IgG4-correlata, da distinguere dalla PSC."
  },
  {
    id:"case_tc_cca_hilar",
    level:1, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"TC", region:"Addome", topic:"Colangiocarcinoma ilare",
    title:"TC addome — colangiocarcinoma ilare",
    area:"Addome", organ:"Vie biliari", modality:"TC multiphasica",
    clinical:"Ittero ostruttivo con dilatazione delle vie biliari intraepatiche.",
    prompt:"Scrivi un referto di stadiazione locale.",
    task:"Obiettivo: sede della stenosi, Bismuth-Corlette, enhancement tardivo, atrofia lobare, rapporti vascolari e metastasi.",
    findings:[
      ["Sede ilare / confluenza dei dotti","ilare|confluenza|klatskin"],
      ["Dilatazione biliare a monte","dilatazione|a monte"],
      ["Classificazione Bismuth-Corlette","bismuth|corlette"],
      ["Enhancement ritardato fibroso","ritard|fibros|equilibrio"],
      ["Atrofia / retrazione capsulare","atrofia|retrazione"],
      ["Rapporti con vena porta e arteria epatica","vena porta|arteria epatica|abut|encase"],
      ["Linfonodi e metastasi","linfonod|metast|mts"],
      ["Conclusione per colangiocarcinoma ilare","colangiocarcinoma|klatskin"]
    ],
    sampleReport:"Stenosi/massa ilare con dilatazione delle vie biliari intraepatiche a monte e progressivo enhancement tardivo della componente fibrosa. Il referto deve definire l'estensione duttale secondo Bismuth-Corlette, eventuale atrofia lobare e i rapporti con vena porta e arteria epatica, oltre a linfonodi e metastasi."
  },
  {
    id:"case_rm_caroli",
    level:1, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Malattia di Caroli",
    title:"Colangio-RM — malattia di Caroli",
    area:"Addome", organ:"Vie biliari", modality:"RM con colangio-RM",
    clinical:"Paziente con colangiti ricorrenti e dilatazioni duttali intraepatiche.",
    prompt:"Descrivi il pattern duttale e i segni caratteristici.",
    task:"Obiettivo: ectasie sacculari intraepatiche, central dot sign, assenza di ostruzione e complicanze.",
    findings:[
      ["Dilatazioni/ectasie sacculari intraepatiche","saccular|ectasi|dilatazioni intraepatiche"],
      ["Central dot sign","central dot"],
      ["Ramo portale al centro delle ectasie","vena porta|ramo portale"],
      ["Assenza di ostruzione meccanica","assenza ostruzione|non ostruttiva"],
      ["Complicanze: calcoli, colangite, ascessi, CCA","calcoli|colangite|ascess|colangiocarcinoma"],
      ["Conclusione per malattia di Caroli","caroli"]
    ],
    sampleReport:"Diffuse/segmentarie ectasie sacculari dei dotti biliari intraepatici, comunicanti con l'albero biliare, con central dot sign rappresentato da rami portali all'interno delle dilatazioni. In assenza di una stenosi ostruttiva il quadro è compatibile con malattia di Caroli; vanno ricercate litiasi, colangite, ascessi e complicanze neoplastiche."
  }

,

  // ---------- PANCREAS TUTTO: ulteriori casi ----------
  {
    id:"case_tc_apfc",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Raccolte della pancreatite",
    title:"TC addome — APFC",
    area:"Addome", organ:"Pancreas", modality:"TC addome con mdc",
    clinical:"Pancreatite acuta edematosa insorta da 10 giorni.",
    prompt:"Classifica correttamente la raccolta.",
    task:"Obiettivo: contenuto fluido, assenza di parete definita e timing <4 settimane.",
    findings:[
      ["Raccolta peripancreatica","raccolta|peripancreatica"],
      ["Contenuto fluido","fluido|liquido"],
      ["Assenza di parete definita","assenza di parete|non capsulata|senza parete"],
      ["Insorgenza <4 settimane","10 giorni|meno di 4 settimane|<4 settimane"],
      ["Conclusione APFC","apfc|raccolta fluida peripancreatica acuta"]
    ],
    sampleReport:"Raccolta fluida peripancreatica priva di parete definita, insorta entro le prime 4 settimane in corso di pancreatite acuta interstiziale-edematosa: quadro compatibile con APFC."
  },
  {
    id:"case_rm_pseudocisti",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"Raccolte della pancreatite",
    title:"RM pancreas — pseudocisti",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas",
    clinical:"Pregressa pancreatite acuta 7 settimane prima.",
    prompt:"Descrivi e classifica la raccolta.",
    task:"Obiettivo: contenuto fluido, parete ben definita, timing >4 settimane e assenza di componente necrotica.",
    findings:[
      ["Raccolta a contenuto fluido","raccolta|fluido|liquido"],
      ["Parete ben definita","parete ben definita|capsula"],
      ["Timing >4 settimane","7 settimane|oltre 4 settimane|>4 settimane"],
      ["Assenza di detriti necrotici rilevanti","assenza detriti|senza componente necrotica|liquida"],
      ["Conclusione pseudocisti","pseudocisti"]
    ],
    sampleReport:"Raccolta a contenuto prevalentemente fluido, ben delimitata da parete definita, comparsa a distanza di oltre 4 settimane dalla pancreatite, senza significativa componente necrotica: quadro compatibile con pseudocisti."
  },
  {
    id:"case_tc_won",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Raccolte della pancreatite",
    title:"TC addome — WON",
    area:"Addome", organ:"Pancreas", modality:"TC addome con mdc",
    clinical:"Pancreatite necrotizzante insorta 6 settimane prima.",
    prompt:"Classifica la raccolta secondo Atlanta.",
    task:"Obiettivo: contenuto necrotico + fluido, parete definita, timing >4 settimane.",
    findings:[
      ["Raccolta necrotico-fluida","necrot|fluido|eterogenea"],
      ["Parete ben definita","parete|capsula|ben definita"],
      ["Timing >4 settimane","6 settimane|oltre 4 settimane|>4 settimane"],
      ["Conclusione WON / necrosi murata","won|necrosi murata|walled off"]
    ],
    sampleReport:"Raccolta ben delimitata, a contenuto misto fluido-necrotico, insorta a distanza di oltre 4 settimane da pancreatite necrotizzante: quadro compatibile con WON (walled-off necrosis)."
  },
  {
    id:"case_tc_necrosi_infetta",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Necrosi infetta",
    title:"TC addome — sospetta necrosi pancreatica infetta",
    area:"Addome", organ:"Pancreas", modality:"TC addome con mdc",
    clinical:"Pancreatite necrotizzante con febbre e peggioramento clinico alla terza settimana.",
    prompt:"Descrivi i reperti che fanno sospettare sovrainfezione.",
    task:"Obiettivo: raccolta necrotica, presenza/assenza di gas e correlazione clinica.",
    findings:[
      ["Raccolta necrotica","necrot|raccolta"],
      ["Gas/aria nella raccolta se presente","gas|aria"],
      ["Timing 2-4 settimana","settimana|3 settimana"],
      ["Conclusione di sospetta necrosi infetta","necrosi infetta|sovrainfezione|infetta"]
    ],
    sampleReport:"Raccolta necrotica pancreatica/peripancreatica con presenza di bolle gassose al suo interno nel corretto contesto clinico, reperto suggestivo per sovrainfezione della necrosi."
  },
  {
    id:"case_rm_md_ipmn",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"IPMN",
    title:"RM/MRCP — main-duct IPMN",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con colangio-RM",
    clinical:"Paziente con dilatazione del dotto pancreatico principale.",
    prompt:"Descrivi il Wirsung e valuta il rischio.",
    task:"Obiettivo: dilatazione segmentaria/diffusa >5 mm, noduli murali e soglie 5-9 mm / ≥10 mm.",
    findings:[
      ["Dilatazione del dotto pancreatico principale","wirsung|dotto principale|dilatazione"],
      ["Calibro >5 mm","5 mm|>5"],
      ["Valutazione nodulo murale","nodulo murale"],
      ["Soglia 5-9 mm come worrisome","5-9|worrisome"],
      ["Soglia ≥10 mm come high-risk","10 mm|high risk"],
      ["Conclusione MD-IPMN","md-ipmn|main duct|ipmn"]
    ],
    sampleReport:"Dilatazione segmentaria/diffusa del dotto pancreatico principale superiore a 5 mm, in assenza di altra causa ostruttiva, compatibile con MD-IPMN. Devono essere riportati calibro massimo del Wirsung ed eventuali noduli murali; calibro 5-9 mm rappresenta worrisome feature, ≥10 mm high-risk stigma nella mappa."
  },
  {
    id:"case_rm_ipmn_misto",
    level:1, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"IPMN",
    title:"RM/MRCP — IPMN misto",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con colangio-RM",
    clinical:"Dilatazione del Wirsung associata a multiple ectasie cistiche dei rami secondari.",
    prompt:"Classifica il tipo di IPMN.",
    task:"Obiettivo: interessamento contemporaneo del dotto principale e dei rami secondari.",
    findings:[
      ["Dilatazione del dotto principale","wirsung|dotto principale|dilatazione"],
      ["Dilatazione/lesioni dei rami secondari","rami secondari|branch duct|cisti"],
      ["Comunicazione con il sistema duttale","comunica|sistema duttale"],
      ["Conclusione IPMN misto","misto|mixed|ipmn"]
    ],
    sampleReport:"Dilatazione del dotto pancreatico principale associata a ectasie cistiche comunicanti dei rami secondari: quadro compatibile con IPMN di tipo misto."
  },

  // ---------- K PANCREAS: ulteriori casi ----------
  {
    id:"case_tc_pdac_body_tail",
    level:1, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"TC", region:"Addome", topic:"PDAC",
    title:"TC pancreas — PDAC corpo-coda",
    area:"Addome", organ:"Pancreas", modality:"TC pancreas multiphasica",
    clinical:"Dolore dorsale e calo ponderale, senza ittero.",
    prompt:"Descrivi una neoplasia del corpo-coda e i segni indiretti.",
    task:"Obiettivo: massa ipovascolare, atrofia e dilatazione duttale a monte, rapporti vascolari e metastasi.",
    findings:[
      ["Massa del corpo/coda","corpo|coda|massa|lesione"],
      ["Ipovascolarizzazione","ipovascolar|ipodens|ipoatten"],
      ["Atrofia pancreatica distale/a monte","atrofia"],
      ["Dilatazione del dotto pancreatico","wirsung|dotto pancreatico|dilatazione"],
      ["Rapporti vascolari","splenica|celiaco|vascolar|vasi"],
      ["Ricerca di metastasi","metast|mts"],
      ["Conclusione per PDAC","pdac|adenocarcinoma duttale"]
    ],
    sampleReport:"Massa ipovascolare del corpo-coda pancreatico con alterazioni del dotto pancreatico e atrofia del parenchima a monte. Devono essere descritti rapporti vascolari e diffusione metastatica. Quadro sospetto per PDAC."
  },
  {
    id:"case_tc_pdac_peritoneo",
    level:1, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"TC", region:"Addome", topic:"PDAC: carcinosi peritoneale",
    title:"TC addome — carcinosi peritoneale da PDAC",
    area:"Addome", organ:"Peritoneo/Pancreas", modality:"TC addome con mdc",
    clinical:"PDAC noto in stadiazione.",
    prompt:"Descrivi i reperti di diffusione peritoneale.",
    task:"Obiettivo: noduli, ispessimento peritoneale, fat stranding, ascite e omental cake.",
    findings:[
      ["Noduli peritoneali","noduli|peritoneali"],
      ["Ispessimento peritoneale","ispessimento|peritoneo"],
      ["Fat stranding","fat stranding|stranding"],
      ["Ascite","ascite"],
      ["Omental cake","omental cake"],
      ["Conclusione per carcinosi/metastasi peritoneali","carcinosi|metastasi peritoneali|mts peritoneali"]
    ],
    sampleReport:"Diffuso ispessimento e nodularità del peritoneo, associati a stranding del grasso, eventuale ascite e omental cake, reperti compatibili con diffusione peritoneale di malattia."
  },
  {
    id:"case_tc_pdac_lung_mets",
    level:1, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"TC", region:"Torace", topic:"PDAC: metastasi polmonari",
    title:"TC torace — metastasi polmonari da PDAC",
    area:"Torace", organ:"Polmone", modality:"TC torace",
    clinical:"Follow-up di PDAC.",
    prompt:"Descrivi le possibili metastasi polmonari riportate nella mappa.",
    task:"Obiettivo: noduli multipli, lobi inferiori e possibili pattern halo/ground-glass/consolidativo.",
    findings:[
      ["Noduli polmonari multipli","noduli|multipli"],
      ["Distribuzione anche ai lobi inferiori","lobi inferiori|basi"],
      ["Possibile halo sign","halo"],
      ["Possibile ground-glass","ground glass|vetro smerigliato"],
      ["Possibile consolidamento focale","consolidamento"],
      ["Conclusione per secondarismi polmonari","metastasi|mts|secondarismi"]
    ],
    sampleReport:"Multipli noduli polmonari, anche a prevalenza basale, compatibili con secondarismi nel corretto contesto oncologico; la mappa ricorda possibili presentazioni con halo sign, componente ground-glass o consolidativa, soprattutto nella variante mucinosa."
  },

  // ---------- VIE BILIARI: ulteriori casi ----------
  {
    id:"case_rm_choledochal_cyst",
    level:1, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Cisti del coledoco",
    title:"Colangio-RM — cisti del coledoco",
    area:"Addome", organ:"Vie biliari", modality:"RM con colangio-RM",
    clinical:"Dilatazione congenita della via biliare extraepatica.",
    prompt:"Descrivi la morfologia e classifica secondo Todani.",
    task:"Obiettivo: dilatazione extraepatica, eventuale coinvolgimento intraepatico e tipo I-III-IV-V.",
    findings:[
      ["Dilatazione congenita della via biliare","dilatazione|congenita|coledoco"],
      ["Morfologia della dilatazione","fusiform|cistica|diverticolo|coledococele"],
      ["Coinvolgimento intraepatico sì/no","intraepatic"],
      ["Classificazione di Todani","todani|tipo i|tipo ii|tipo iii|tipo iv|tipo v"]
    ],
    sampleReport:"Dilatazione congenita della via biliare extraepatica, da caratterizzare per morfologia ed eventuale coinvolgimento intraepatico; il quadro va classificato secondo Todani."
  },
  {
    id:"case_rm_recurrent_pyogenic_cholangitis",
    level:1, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Colangite piogenica ricorrente",
    title:"RM/MRCP — colangite piogenica ricorrente",
    area:"Addome", organ:"Vie biliari", modality:"RM con colangio-RM",
    clinical:"Paziente con colangiti ricorrenti e litiasi intraepatica.",
    prompt:"Descrivi le alterazioni biliari e i calcoli.",
    task:"Obiettivo: dilatazione intraepatica, calcoli pigmentati/intraduttali e predominanza del lobo sinistro.",
    findings:[
      ["Dilatazione delle vie biliari intraepatiche","dilatazione|intraepatiche"],
      ["Calcoli intraduttali","calcoli|intraduttali|litiasi"],
      ["Possibile iperintensità T1 dei calcoli","t1|iperintens"],
      ["Predominanza del lobo sinistro","lobo sinistro"],
      ["Conclusione per colangite piogenica ricorrente","colangite piogenica ricorrente"]
    ],
    sampleReport:"Dilatazione irregolare delle vie biliari intraepatiche con calcoli intraduttali, nella mappa descritti anche come possibili foci iperintensi in T1, con frequente interessamento del lobo sinistro. Quadro compatibile con colangite piogenica ricorrente."
  },
  {
    id:"case_rm_secondary_sclerosing_ischemic",
    level:1, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Colangite sclerosante secondaria ischemica",
    title:"Colangio-RM — colangite ischemica post-TAE",
    area:"Addome", organ:"Vie biliari", modality:"RM con colangio-RM",
    clinical:"Paziente sottoposto a TAE per HCC, con successiva colestasi.",
    prompt:"Descrivi le alterazioni biliari e collegale al trattamento.",
    task:"Obiettivo: nuove stenosi/dilatazioni dopo ischemia dei plessi peribiliari.",
    findings:[
      ["Stenosi biliari","stenosi"],
      ["Dilatazione delle vie biliari","dilatazione"],
      ["Pregressa TAE / causa ischemica","tae|embolizzazione|ischemica"],
      ["Pattern simile a PSC","psc|sclerosante"],
      ["Conclusione per colangite sclerosante secondaria ischemica","colangite ischemica|sclerosante secondaria"]
    ],
    sampleReport:"Nuove stenosi e dilatazioni dell'albero biliare comparse dopo embolizzazione arteriosa, in un quadro morfologicamente simile alla PSC, compatibili con colangite sclerosante secondaria su base ischemica."
  },
  {
    id:"case_tc_icc_mass_forming",
    level:1, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"TC", region:"Addome", topic:"Colangiocarcinoma intraepatico",
    title:"TC fegato — colangiocarcinoma intraepatico mass-forming",
    area:"Addome", organ:"Fegato/Vie biliari", modality:"TC fegato multiphasica",
    clinical:"Massa epatica periferica in paziente con dolore e colestasi.",
    prompt:"Descrivi il pattern contrastografico e i segni associati.",
    task:"Obiettivo: massa mal definita, ipodensa precoce, enhancement tardivo, retrazione capsulare e dilatazione a monte.",
    findings:[
      ["Massa intraepatica mal definita","massa|mal definita|intraepatica"],
      ["Ipoattenuazione in fase arteriosa/portale","ipodens|ipoatten"],
      ["Enhancement progressivo/tardivo","tardiv|progressiv|equilibrio"],
      ["Retrrazione capsulare","retrazione|capsula"],
      ["Dilatazione biliare periferica a monte","dilatazione|a monte|periferica"],
      ["Possibili noduli perilesionali","noduli perilesionali"],
      ["Conclusione per colangiocarcinoma intraepatico","colangiocarcinoma intraepatico|icc"]
    ],
    sampleReport:"Massa intraepatica mal definita, ipoattenuante nelle fasi precoci e con progressivo enhancement tardivo della componente fibrosa, associata a retrazione capsulare e dilatazione dei dotti biliari a monte: quadro sospetto per colangiocarcinoma intraepatico mass-forming."
  },
  {
    id:"case_tc_biliary_double_duct",
    level:1, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"TC", region:"Addome", topic:"Ostruzione biliare / double duct",
    title:"TC addome — double duct sign",
    area:"Addome", organ:"Pancreas/Vie biliari", modality:"TC addome con mdc",
    clinical:"Ittero ostruttivo.",
    prompt:"Descrivi il segno e proponi le principali cause presenti nella mappa.",
    task:"Obiettivo: dilatazione coledoco + Wirsung e ricerca di massa della testa pancreatica o ampollare.",
    findings:[
      ["Dilatazione del coledoco","coledoco|dilatazione"],
      ["Dilatazione del Wirsung","wirsung|dotto pancreatico"],
      ["Double duct sign","double duct|doppio dotto"],
      ["Ricerca di massa della testa pancreatica","testa pancreas|massa pancreatica"],
      ["Ricerca di tumore ampollare","ampoll|papilla"],
      ["Conclusione di ostruzione distale","ostruzione|distale"]
    ],
    sampleReport:"Contestuale dilatazione del coledoco e del dotto pancreatico principale, configurando double duct sign. Va ricercata una causa ostruttiva distale, in particolare massa della testa pancreatica o lesione ampollare secondo la mappa."
  }

,

  // ---------- IMMAGINI: PANCREAS E VIE BILIARI ----------
  {
    id:"case_rm_ipmn_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"IPMN",
    title:"RM/MRCP — branch-duct IPMN con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con colangio-RM (caso sintetico)",
    clinical:"Lesione cistica incidentale del processo uncinato.",
    prompt:"Osserva il pannello didattico e scrivi un referto radiologico.",
    task:"Obiettivo: riconoscere cluster cistico side-branch, comunicazione con il sistema duttale, Wirsung non dilatato e assenza di noduli murali.",
    images:["assets/cases/case_rm_ipmn_panel.png"],
    findings:[
      ["Lesione cistica side-branch / cluster a grappolo","side branch|ramo secondario|cluster|grappolo|cisti"],
      ["Sede uncinato / testa del pancreas","uncinato|testa pancreatica|testa pancreas"],
      ["Comunicazione con il dotto pancreatico","comunica|wirsung|dotto pancreatico|sistema duttale"],
      ["Wirsung non dilatato o non significativamente dilatato","non dilatato|non significativamente dilatato|wirsung nei limiti"],
      ["Assenza di nodulo murale captante","assenza di nodulo|senza nodulo|nodulo murale assente"],
      ["Conclusione per BD-IPMN","bd-ipmn|branch duct|ipmn"]
    ],
    sampleReport:"Nel processo uncinato si osserva lesione cistica lobulata/cluster di cisti dei rami secondari, in comunicazione con il sistema duttale pancreatico, senza significativa dilatazione del Wirsung né evidenza di noduli murali captanti. Quadro compatibile con BD-IPMN."
  },
  {
    id:"case_tc_pdac_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"TC", region:"Addome", topic:"PDAC",
    title:"TC pancreas — PDAC della testa con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"TC pancreas multiphasica (caso sintetico)",
    clinical:"Ittero ostruttivo indolore.",
    prompt:"Osserva il pannello TC didattico e scrivi un referto con inquadramento locale.",
    task:"Obiettivo: massa ipovascolare della testa, double duct sign, atrofia a monte e contatto con SMV <180°.",
    images:["assets/cases/case_tc_pdac_panel.png"],
    findings:[
      ["Massa della testa pancreatica","testa|testa pancreatica|massa|lesione"],
      ["Ipovascolarizzazione / ipoattenuazione","ipovascolar|ipodens|ipoatten"],
      ["Double duct sign","double duct|doppio dotto|coledoco|wirsung"],
      ["Atrofia pancreatica a monte","atrofia"],
      ["Contatto con SMV/VMS inferiore a 180°","smv|vms|180|contatto venoso|abutment"],
      ["Conclusione per PDAC","pdac|adenocarcinoma duttale|adenocarcinoma pancreatico"]
    ],
    sampleReport:"Le immagini mostrano massa ipoattenuante/ipovascolare della testa pancreatica, associata a dilatazione del coledoco e del Wirsung (double duct sign) e lieve atrofia del corpo-coda a monte. È presente contatto con la VMS/SMV inferiore a 180°. Quadro compatibile con PDAC della testa."
  },
  {
    id:"case_rm_psc_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"PSC",
    title:"Colangio-RM — PSC con immagini sintetiche",
    area:"Addome", organ:"Vie biliari", modality:"RM fegato con colangio-RM (caso sintetico)",
    clinical:"Colestasi cronica in paziente con sospetta PSC.",
    prompt:"Osserva il pannello MRCP e scrivi un referto radiologico.",
    task:"Obiettivo: stenosi multifocali, dilatazioni alternate, beaded appearance, pruned tree e lieve coinvolgimento extraepatico.",
    images:["assets/cases/case_rm_psc_panel.png"],
    findings:[
      ["Stenosi multifocali intraepatiche","stenosi|multifocali|intraepatic"],
      ["Dilatazioni alternate / beaded appearance","beaded|collana di perle|dilatazioni alternate"],
      ["Pruned tree / rarefazione periferica","pruned|albero potato|rarefazione"],
      ["Coinvolgimento extraepatico / dotto epatico comune","extraepatic|dotto epatico comune|coledoco"],
      ["Conclusione per PSC","psc|colangite sclerosante primitiva"]
    ],
    sampleReport:"La colangio-RM mostra multiple stenosi brevi multifocali dei dotti intraepatici, alternate a segmenti duttali normali o lievemente dilatati, con aspetto a collana di perle e rarefazione dei rami periferici (pruned-tree appearance). È presente lieve coinvolgimento extraepatico. Quadro compatibile con PSC."
  },
  {
    id:"case_tc_won_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Raccolte della pancreatite",
    title:"TC addome — WON con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"TC addome con mdc (caso sintetico)",
    clinical:"Pancreatite necrotizzante insorta circa 6 settimane prima.",
    prompt:"Osserva il pannello TC e scrivi un referto classificando la raccolta.",
    task:"Obiettivo: raccolta incapsulata, contenuto eterogeneo necrotico-fluido, timing >4 settimane e mass effect.",
    images:["assets/cases/case_tc_won_panel.png"],
    findings:[
      ["Raccolta peripancreatica incapsulata","raccolta|incapsulat|parete"],
      ["Contenuto eterogeneo con componente necrotica","eterogene|necrot|detriti"],
      ["Timing >4 settimane","6 settimane|oltre 4 settimane|>4 settimane"],
      ["Effetto massa sulle strutture adiacenti","effetto massa|compressione"],
      ["Conclusione WON / necrosi murata","won|necrosi murata|walled off"]
    ],
    sampleReport:"Voluminosa raccolta peripancreatica ben delimitata da parete definita, a contenuto eterogeneo fluido-necrotico con detriti non liquidi, insorta a distanza di oltre 4 settimane da pancreatite necrotizzante e con effetto massa sulle strutture adiacenti. Quadro compatibile con WON."
  }

,

  // ---------- IMMAGINI: SECONDO BLOCCO ----------
  {
    id:"case_rm_mcn_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"Neoplasia cistica mucinosa",
    title:"RM pancreas — MCN con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con MRCP (caso sintetico)",
    clinical:"Donna di 46 anni con lesione cistica del corpo-coda.",
    prompt:"Osserva il pannello didattico e scrivi un referto radiologico.",
    task:"Obiettivo: lesione macrocistica/multiloculata in corpo-coda, setti sottili, mancata comunicazione con Wirsung, assenza di pattern microcistico.",
    images:["assets/cases/case_rm_mcn_panel.png"],
    findings:[
      ["Lesione cistica multiloculata / macrocistica","multiloc|macrocist|cistica|lesione cistica"],
      ["Sede corpo-coda pancreatica","corpo|coda|corpo-coda"],
      ["Setti interni","setti|setti sottili"],
      ["Mancata comunicazione con Wirsung","non comunica|mancata comunicazione|wirsung"],
      ["Assenza di pattern microcistico honeycomb","non microcistica|non honeycomb|non sieroso"],
      ["Conclusione per MCN","mcn|neoplasia cistica mucinosa"]
    ],
    sampleReport:"Formazione cistica multiloculata/macrocistica del corpo-coda pancreatico, con setti interni e senza evidenza di comunicazione con il dotto pancreatico principale. Quadro compatibile con neoplasia cistica mucinosa."
  },
  {
    id:"case_rm_scn_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"Cistoadenoma sieroso",
    title:"RM pancreas — cistoadenoma sieroso con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con MRCP (caso sintetico)",
    clinical:"Incidentaloma pancreatico.",
    prompt:"Osserva il pannello didattico e scrivi un referto radiologico.",
    task:"Obiettivo: lesione microcistica/honeycomb, cicatrice centrale stellata, assenza di comunicazione con il Wirsung.",
    images:["assets/cases/case_rm_scn_panel.png"],
    findings:[
      ["Lesione microcistica / honeycomb","microcist|honeycomb|nido d ape"],
      ["Cicatrice centrale stellata","cicatrice centrale|stellata"],
      ["Mancata comunicazione con Wirsung","non comunica|wirsung|assenza comunicazione"],
      ["Assenza di noduli murali sospetti","assenza di nodul|noduli murali assenti"],
      ["Conclusione per cistoadenoma sieroso","cistoadenoma sieroso|sieroso"]
    ],
    sampleReport:"Lesione pancreatica ben circoscritta a struttura microcistica, con aspetto honeycomb e cicatrice centrale stellata, senza evidenza di comunicazione con il dotto pancreatico principale. Quadro compatibile con cistoadenoma sieroso."
  },
  {
    id:"case_rm_aip_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"Pancreatite autoimmune",
    title:"RM pancreas — pancreatite autoimmune con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con MRCP (caso sintetico)",
    clinical:"Colestasi e sospetta malattia IgG4-correlata.",
    prompt:"Osserva il pannello didattico e scrivi un referto radiologico.",
    task:"Obiettivo: pancreas diffusamente aumentato di volume sausage-like, capsule-like rim, ridotto enhancement precoce con enhancement tardivo omogeneo, restringimento lungo e regolare del Wirsung e del CBD distale.",
    images:["assets/cases/case_rm_aip_panel.png"],
    findings:[
      ["Pancreas diffusamente aumentato di volume / sausage-like","sausage|aumentato di volume|diffuso"],
      ["Capsule-like rim","capsule|rim|capsule-like"],
      ["Ridotto enhancement precoce","ridotto enhancement precoce|ipoenhancement precoce"],
      ["Enhancement tardivo omogeneo","enhancement tardivo|progressivo|omogeneo"],
      ["Lieve restrizione della diffusione","dwi|restrizione|diffusione"],
      ["Restringimento lungo e regolare del Wirsung","wirsung|restringimento lungo|regolare"],
      ["Duct-penetrating sign / assenza di brusco cutoff","duct-penetrating|no abrupt cut off|non brusca interruzione"],
      ["Stenosi lieve del CBD distale","coledoco distale|cbd distale|stenosi distale"],
      ["Conclusione per pancreatite autoimmune","pancreatite autoimmune|aip|igg4"]
    ],
    sampleReport:"Pancreas diffusamente aumentato di volume con morfologia sausage-like e sottile capsule-like rim. Si associa ridotto enhancement precoce con più omogeneo enhancement tardivo e lieve restrizione della diffusione. La MRCP mostra restringimento lungo e regolare del Wirsung con duct-penetrating sign e lieve stenosi del coledoco distale. Quadro compatibile con pancreatite autoimmune."
  },
  {
    id:"case_cca_hilar_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Colangiocarcinoma ilare",
    title:"MRCP/TC — colangiocarcinoma ilare con immagini sintetiche",
    area:"Addome", organ:"Vie biliari", modality:"MRCP + imaging contrastografico (caso sintetico)",
    clinical:"Ittero ostruttivo con dilatazione biliare intraepatica.",
    prompt:"Osserva il pannello didattico e scrivi un referto di stadiazione locale.",
    task:"Obiettivo: stenosi/lesione della confluenza ilare, dilatazione biliare a monte, enhancement tardivo della componente fibrosa, possibile inquadramento tipo Klatskin.",
    images:["assets/cases/case_cca_hilar_panel.png"],
    findings:[
      ["Lesione/stenosi della confluenza ilare","confluenza|ilare|klatskin|porta epatica"],
      ["Dilatazione intraepatica a monte","dilatazione|intraepatica|a monte"],
      ["Enhancement progressivo/tardivo della lesione","tardiv|progressiv|enhancement fibroso"],
      ["Coinvolgimento bilaterale dei dotti epatici se presente","bilateral|dotto epatico destro|dotto epatico sinistro"],
      ["Conclusione per colangiocarcinoma ilare","colangiocarcinoma ilare|klatskin|cca ilare"]
    ],
    sampleReport:"Immagini compatibili con lesione stenosante della confluenza biliare ilare, associata a dilatazione biliare intraepatica a monte. La componente lesionale mostra progressivo enhancement tardivo, suggestivo di componente fibrosa. Quadro compatibile con colangiocarcinoma ilare (tumore di Klatskin)."
  }

,

  // ---------- IMMAGINI: TERZO BLOCCO ----------
  {
    id:"case_tc_pancreatite_edematosa_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Pancreatite acuta",
    title:"TC addome — pancreatite acuta edematosa con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"TC addome con mdc (caso sintetico)",
    clinical:"Dolore epigastrico acuto e lipasi elevate.",
    prompt:"Osserva il pannello TC didattico e scrivi un referto radiologico.",
    task:"Obiettivo: pancreas aumentato di volume, enhancement conservato, stranding peripancreatico e piccola raccolta fluida acuta senza parete.",
    images:["assets/cases/case_tc_edematous_pancreatitis_panel.png"],
    findings:[
      ["Pancreas aumentato di volume / edematoso","aumento volum|edema|edematos|tumef"],
      ["Enhancement omogeneo / conservato","enhancement omogeneo|enhancement conserv|captazione conserv"],
      ["Stranding / imbibizione del grasso peripancreatico","stranding|imbibizione|grasso peripancreatico"],
      ["Piccola raccolta fluida acuta senza parete","raccolta fluida|senza parete|apfc|acuta peripancreatica"],
      ["Assenza di necrosi","assenza di necrosi|non necrosi"],
      ["Conclusione per pancreatite acuta edematosa","pancreatite acuta|interstiziale|edematosa"]
    ],
    sampleReport:"Le immagini mostrano pancreas aumentato di volume con enhancement omogeneo e conservato, associato a lieve stranding del grasso peripancreatico e piccola raccolta fluida acuta senza parete definita. Non si evidenziano aree non perfuse. Quadro compatibile con pancreatite acuta interstiziale-edematosa."
  },
  {
    id:"case_tc_necrosi_infetta_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Necrosi infetta",
    title:"TC addome — necrosi pancreatica infetta con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"TC addome con mdc (caso sintetico)",
    clinical:"Pancreatite severa con febbre e peggioramento clinico.",
    prompt:"Osserva il pannello TC didattico e scrivi un referto radiologico.",
    task:"Obiettivo: necrosi pancreatica/peripancreatica, raccolta necrotica e bolle gassose suggestive di sovrainfezione.",
    images:["assets/cases/case_tc_infected_necrosis_panel.png"],
    findings:[
      ["Aree non perfuse / necrosi pancreatica","non perfus|non capt|necrosi pancreatica"],
      ["Raccolta necrotica peripancreatica","raccolta necrotica|peripancreatica|necrotic debris"],
      ["Gas nella raccolta","gas|aria|bolle gassose"],
      ["Possibile estensione in sede retrocavità degli epiploon / lesser sac","lesser sac|retrocavità|ampia raccolta"],
      ["Conclusione per necrosi infetta","necrosi infetta|sovrainfezione|infetta"]
    ],
    sampleReport:"Ampia raccolta necrotica pancreatico-peripancreatica con aree di mancata impregnazione del parenchima e presenza di multiple bolle gassose intralesionali, reperto fortemente suggestivo per necrosi pancreatica infetta nel corretto contesto clinico."
  },
  {
    id:"case_rm_md_ipmn_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"IPMN",
    title:"RM/MRCP — main-duct IPMN con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con MRCP (caso sintetico)",
    clinical:"Dilatazione del Wirsung in paziente in follow-up.",
    prompt:"Osserva il pannello RM/MRCP e scrivi un referto radiologico.",
    task:"Obiettivo: marcata dilatazione del dotto pancreatico principale, comunicazione duttale e nodulo murale intraduttale.",
    images:["assets/cases/case_rm_md_ipmn_panel.png"],
    findings:[
      ["Marcata dilatazione del Wirsung / dotto principale","wirsung|dotto principale|dilatazione"],
      ["Calibro >10 mm o nettamente aumentato","10 mm|>10|marcata dilatazione"],
      ["Nodulo murale intraduttale","nodulo murale|intraduttale"],
      ["Comunicazione con il sistema duttale alla MRCP","comunicazione|mrcp|sistema duttale"],
      ["Assenza di pattern microcistico honeycomb","non honeycomb|non microcistico|non sieroso"],
      ["Conclusione per MD-IPMN","md-ipmn|main duct|ipmn"]
    ],
    sampleReport:"Le immagini mostrano marcata dilatazione del dotto pancreatico principale, con evidenza di comunicazione duttale alla MRCP e piccolo nodulo murale intraduttale. Assente pattern microcistico tipo honeycomb. Quadro compatibile con main-duct IPMN."
  },
  {
    id:"case_tc_icc_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"TC", region:"Addome", topic:"Colangiocarcinoma intraepatico",
    title:"TC fegato — colangiocarcinoma intraepatico con immagini sintetiche",
    area:"Addome", organ:"Fegato/Vie biliari", modality:"TC fegato multiphasica (caso sintetico)",
    clinical:"Massa epatica periferica in paziente con colestasi.",
    prompt:"Osserva il pannello TC multiphasico e scrivi un referto radiologico.",
    task:"Obiettivo: massa periferica mal definita, ipoenhancement precoce, progressivo enhancement tardivo, retrazione capsulare e dilatazione biliare periferica.",
    images:["assets/cases/case_tc_icc_panel.png"],
    findings:[
      ["Massa intraepatica periferica / mal definita","massa|intraepatica|periferica|mal definita"],
      ["Ipoenhancement nelle fasi precoci","ipoenhancement|ipodens|ipoatten"],
      ["Progressivo enhancement tardivo","tardiv|progressiv|fibroso"],
      ["Retrrazione capsulare","retrazione|capsulare"],
      ["Dilatazione dei dotti biliari periferici a monte","dilatazione|dotti biliari|a monte|periferici"],
      ["Conclusione per colangiocarcinoma intraepatico","colangiocarcinoma intraepatico|icc"]
    ],
    sampleReport:"Massa intraepatica periferica mal definita, ipoenhancing nelle fasi precoci e con progressivo enhancement tardivo della componente fibrosa, associata a retrazione capsulare e lieve dilatazione dei dotti biliari periferici a monte. Quadro compatibile con colangiocarcinoma intraepatico mass-forming."
  }

,

  // ---------- IMMAGINI: QUARTO BLOCCO ----------
  {
    id:"case_tc_apfc_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Raccolte della pancreatite",
    title:"TC addome — APFC con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"TC addome con mdc (caso sintetico)",
    clinical:"Pancreatite acuta interstiziale-edematosa insorta da pochi giorni.",
    prompt:"Osserva il pannello TC e scrivi un referto classificando correttamente la raccolta.",
    task:"Obiettivo: piccola raccolta fluida peripancreatica acuta, ill-defined, senza parete, entro 4 settimane, con pancreas ancora omogeneamente perfuso.",
    images:["assets/cases/case_tc_apfc_panel.png"],
    findings:[
      ["Piccola raccolta fluida peripancreatica","raccolta fluida|peripancreatica|fluida"],
      ["Assenza di parete definita / non capsulata","assenza di parete|non capsulata|non encapsulated|senza parete"],
      ["Tempistica entro 4 settimane","4 settimane|entro 4 settimane|acuta"],
      ["Pancreas edematoso con enhancement conservato","edematos|enhancement conserv|enhancement omogeneo"],
      ["Assenza di necrosi","assenza di necrosi|non necrosi"],
      ["Conclusione per APFC","apfc|acute peripancreatic fluid collection|raccolta fluida peripancreatica acuta"]
    ],
    sampleReport:"Le immagini documentano modesta raccolta fluida peripancreatica, mal delimitata e priva di parete definita, in corso di pancreatite acuta interstiziale-edematosa con enhancement pancreatico conservato e senza segni di necrosi. Nel corretto timing evolutivo il quadro è compatibile con APFC."
  },
  {
    id:"case_tc_pseudocyst_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Raccolte della pancreatite",
    title:"TC/RM — pseudocisti pancreatica con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"TC/RM addome (caso sintetico)",
    clinical:"Pregressa pancreatite acuta, a distanza di oltre un mese.",
    prompt:"Osserva il pannello didattico e scrivi un referto classificando correttamente la raccolta.",
    task:"Obiettivo: raccolta ben circoscritta, omogeneamente fluida, con parete sottile e regolare, senza detriti necrotici significativi, >4 settimane.",
    images:["assets/cases/case_tc_pseudocyst_panel.png"],
    findings:[
      ["Raccolta ben delimitata / capsulata","ben delimitata|capsulata|encapsulated|parete"],
      ["Contenuto omogeneamente fluido","contenuto fluido|omogenea|low attenuation|t2 iperintensa"],
      ["Parete sottile e regolare","parete sottile|parete regolare|enhancing wall"],
      ["Assenza di rilevante componente necrotica","assenza di componente necrotica|senza detriti|no necrotic debris"],
      ["Tempistica >4 settimane","oltre 4 settimane|>4 settimane"],
      ["Conclusione per pseudocisti","pseudocisti|pseudocyst"]
    ],
    sampleReport:"Voluminosa raccolta peripancreatica ben delimitata da sottile parete, a contenuto omogeneamente fluido, priva di significativa componente necrotica interna e insorta a distanza di oltre 4 settimane dalla pancreatite. Quadro compatibile con pseudocisti pancreatica."
  },
  {
    id:"case_rm_mixed_ipmn_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"RM", region:"Addome", topic:"IPMN",
    title:"RM/MRCP — IPMN misto con immagini sintetiche",
    area:"Addome", organ:"Pancreas", modality:"RM pancreas con MRCP (caso sintetico)",
    clinical:"Rilievo cistico pancreatico con concomitante dilatazione del Wirsung.",
    prompt:"Osserva il pannello RM/MRCP e scrivi un referto radiologico.",
    task:"Obiettivo: coesistenza di coinvolgimento del dotto principale e dei rami secondari, comunicazione duttale e assenza di massa aggressiva.",
    images:["assets/cases/case_rm_mixed_ipmn_panel.png"],
    findings:[
      ["Dilatazione del dotto pancreatico principale","wirsung|dotto principale|dilatazione"],
      ["Dilatazioni cistiche dei rami secondari","rami secondari|side branch|cistiche|cluster"],
      ["Comunicazione con il sistema duttale","comunicazione|mrcp|sistema duttale"],
      ["Assenza di massa solida aggressiva","assenza di massa|no aggressive solid mass|massa solida assente"],
      ["Assenza di nodulo murale captante rilevante","nodulo murale assente|no enhancing mural nodule"],
      ["Conclusione per IPMN misto","ipmn misto|mixed-type ipmn|misto"]
    ],
    sampleReport:"Le immagini RM/MRCP documentano dilatazione del dotto pancreatico principale associata a multiple dilatazioni cistiche dei rami secondari in comunicazione con il sistema duttale, in assenza di evidente massa solida aggressiva o significativo nodulo murale captante. Quadro compatibile con IPMN di tipo misto."
  },
  {
    id:"case_rm_igg4_cholangitis_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Colangite IgG4-correlata",
    title:"RM/MRCP — colangite IgG4-correlata con immagini sintetiche",
    area:"Addome", organ:"Vie biliari/Pancreas", modality:"RM addome con MRCP (caso sintetico)",
    clinical:"Colestasi con sospetta malattia IgG4-correlata.",
    prompt:"Osserva il pannello RM/MRCP e scrivi un referto radiologico, includendo il pancreas.",
    task:"Obiettivo: stenosi biliari lunghe e lisce, soprattutto distali, con dilatazione prossimale e concomitanti segni di pancreatite autoimmune.",
    images:["assets/cases/case_rm_igg4_cholangitis_panel.png"],
    findings:[
      ["Stenosi biliari lunghe e lisce","stenosi lunghe|smooth strictures|lungo tratto"],
      ["Coinvolgimento del coledoco distale / dotto extraepatico","coledoco distale|cbd distale|extraepatico"],
      ["Dilatazione biliare prossimale/intraepatica lieve","dilatazione prossimale|intraepatica|proximal dilatation"],
      ["Pancreas sausage-like","sausage|aumentato di volume|pancreas diffusamente aumentato"],
      ["Capsule-like rim / enhancement tardivo omogeneo","capsule-like rim|enhancement tardivo|omogeneo"],
      ["Conclusione a favore di colangite IgG4-correlata con AIP","igg4|colangite igg4|pancreatite autoimmune|aip"]
    ],
    sampleReport:"La MRCP mostra stenosi biliari lunghe e regolari, con prevalente coinvolgimento della via biliare extraepatica/distale e modesta dilatazione a monte, senza aspetto beaded. Si associano reperti pancreatici compatibili con pancreatite autoimmune, con pancreas diffusamente aumentato di volume, morfologia sausage-like e sottile capsule-like rim. Quadro a favore di colangite sclerosante IgG4-correlata."
  }

,

  // ---------- IMMAGINI: QUINTO BLOCCO ----------
  {
    id:"case_rm_caroli_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Malattia di Caroli",
    title:"RM/MRCP — malattia di Caroli con immagini sintetiche",
    area:"Addome", organ:"Vie biliari", modality:"RM addome con MRCP (caso sintetico)",
    clinical:"Colangiti ricorrenti e sospette ectasie congenite delle vie biliari intraepatiche.",
    prompt:"Osserva il pannello RM/MRCP e scrivi un referto radiologico.",
    task:"Obiettivo: ectasie sacculari intraepatiche comunicanti con l'albero biliare e central dot sign.",
    images:["assets/cases/case_rm_caroli_panel.png"],
    findings:[
      ["Ectasie/dilatazioni sacculari intraepatiche","ectasie|dilatazioni sacculari|saccular"],
      ["Comunicazione con l'albero biliare","comunicazione|comunicanti|albero biliare"],
      ["Central dot sign","central dot|dot sign"],
      ["Rami portali al centro delle ectasie","rami portali|vena porta|portali"],
      ["Assenza di causa ostruttiva dominante","assenza ostruzione|non ostruttiva|senza stenosi dominante"],
      ["Conclusione per malattia di Caroli","caroli"]
    ],
    sampleReport:"Diffuse ectasie sacculari dei dotti biliari intraepatici, comunicanti con l'albero biliare, con central dot sign rappresentato da rami portali all'interno delle dilatazioni. In assenza di una stenosi ostruttiva dominante il quadro è compatibile con malattia di Caroli."
  },
  {
    id:"case_rm_choledochal_cyst_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Cisti del coledoco",
    title:"RM/MRCP — cisti del coledoco con immagini sintetiche",
    area:"Addome", organ:"Vie biliari", modality:"RM addome con MRCP (caso sintetico)",
    clinical:"Dilatazione congenita della via biliare extraepatica.",
    prompt:"Osserva il pannello MRCP e scrivi un referto radiologico.",
    task:"Obiettivo: descrivere la marcata dilatazione fusiforme/cistica della via biliare extraepatica e proporre classificazione Todani.",
    images:["assets/cases/case_rm_choledochal_cyst_panel.png"],
    findings:[
      ["Marcata dilatazione della via biliare extraepatica","dilatazione|via biliare extraepatica|coledoco"],
      ["Morfologia fusiforme/cistica","fusiform|cistica|saccular"],
      ["Valutazione del coinvolgimento intraepatico","intraepatic|coinvolgimento intraepatico"],
      ["Descrizione della giunzione distale/ampollare","distale|ampolla|papilla"],
      ["Classificazione secondo Todani","todani|tipo i|type i"],
      ["Conclusione per cisti del coledoco","cisti del coledoco|choledochal cyst"]
    ],
    sampleReport:"Marcata dilatazione fusiforme della via biliare extraepatica, con calibro nettamente aumentato del coledoco e senza evidenza di massa ostruttiva. Il reperto è compatibile con cisti del coledoco, da classificare secondo Todani in relazione alla morfologia e all'eventuale coinvolgimento intraepatico."
  },
  {
    id:"case_rm_recurrent_pyogenic_cholangitis_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Colangite piogenica ricorrente",
    title:"RM/MRCP — colangite piogenica ricorrente con immagini sintetiche",
    area:"Addome", organ:"Vie biliari", modality:"RM addome con MRCP (caso sintetico)",
    clinical:"Colangiti ricorrenti con sospetta litiasi intraepatica.",
    prompt:"Osserva il pannello MRCP e scrivi un referto radiologico.",
    task:"Obiettivo: dilatazioni intraepatiche irregolari e multipli difetti di riempimento da calcoli intraduttali.",
    images:["assets/cases/case_rm_recurrent_pyogenic_cholangitis_panel.png"],
    findings:[
      ["Dilatazione irregolare delle vie biliari intraepatiche","dilatazione|irregolare|intraepatic"],
      ["Multipli difetti di riempimento / calcoli intraduttali","difetti di riempimento|calcoli|litiasi|intraduttali"],
      ["Possibile distribuzione segmentaria/lobare","segmentaria|lobare|lobo sinistro"],
      ["Alterazioni duttali croniche","croniche|stenosi|ectasie"],
      ["Conclusione per colangite piogenica ricorrente","colangite piogenica ricorrente|recurrent pyogenic cholangitis"]
    ],
    sampleReport:"Dilatazione irregolare e segmentaria delle vie biliari intraepatiche con multipli difetti di riempimento intraduttali compatibili con litiasi. Il quadro, nel corretto contesto clinico, è compatibile con colangite piogenica ricorrente."
  },
  {
    id:"case_rm_pdac_liver_mets_img",
    level:2, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"RM", region:"Addome", topic:"PDAC: metastasi epatiche",
    title:"RM fegato — metastasi epatiche da PDAC con immagini sintetiche",
    area:"Addome", organ:"Fegato/Pancreas", modality:"RM fegato con DWI/ADC e fase epatobiliare (caso sintetico)",
    clinical:"PDAC noto, stadiazione epatica.",
    prompt:"Osserva il pannello multiparametrico e scrivi un referto radiologico.",
    task:"Obiettivo: multiple lesioni con restrizione della diffusione e difetto di captazione in fase epatobiliare.",
    images:["assets/cases/case_rm_pdac_liver_mets_panel.png"],
    findings:[
      ["Multiple lesioni focali epatiche","multiple lesioni|lesioni focali|noduli epatici"],
      ["Iperintensità in DWI","dwi|iperintens"],
      ["Riduzione ADC / restrizione della diffusione","adc|restrizione|ridotto adc"],
      ["Ipointensità/difetto in fase epatobiliare","epatobiliare|hbp|ipointens|difetto di captazione"],
      ["Conclusione per secondarismi epatici","metastasi epatiche|secondarismi|mts epatiche"]
    ],
    sampleReport:"Multiple lesioni focali epatiche, iperintense in DWI con corrispondente riduzione dei valori ADC e ipointense in fase epatobiliare, compatibili con secondarismi epatici nel paziente con PDAC noto."
  }

,

  // ---------- IMMAGINI: SESTO BLOCCO ----------
  {
    id:"case_tc_necrotizing_pancreatitis_img", level:2, sourceType:"map", sourceLabel:"Da mappa: PANCREAS TUTTO",
    mapId:"pancreas_tutto", modalityCode:"TC", region:"Addome", topic:"Pancreatite necrotizzante",
    title:"TC — pancreatite necrotizzante con immagini sintetiche", area:"Addome", organ:"Pancreas", modality:"TC addome con mdc (caso sintetico)",
    clinical:"Dolore addominale e rialzo degli enzimi pancreatici.", prompt:"Osserva il pannello TC e scrivi un referto radiologico.",
    task:"Obiettivo: riconoscere necrosi pancreatica non perfusa e raccolta necrotica acuta peripancreatica con detriti, senza gas.",
    images:["assets/cases/case_tc_necrotizing_pancreatitis_panel.png"],
    findings:[["Pancreas aumentato/eterogeneo","pancreas|aumentato|eterogene"],["Aree non perfuse di necrosi","necrosi|non perfus|non enhancement"],["Infiammazione peripancreatica","peripancreatic|imbibizione|stranding"],["Raccolta necrotica acuta con detriti","raccolta necrotica|anc|detriti"],["Assenza di gas","assenza di gas|senza gas|non gas"],["Conclusione per pancreatite necrotizzante","pancreatite necrotizzante|necrotizing pancreatitis"]],
    sampleReport:"Pancreas aumentato di volume e disomogeneo, con aree di mancata perfusione parenchimale compatibili con necrosi. Associate marcate alterazioni infiammatorie peripancreatiche e raccolta necrotica acuta a contenuto disomogeneo/detritico, senza evidenza di gas. Quadro di pancreatite acuta necrotizzante."
  },
  {
    id:"case_ct_double_duct_img", level:2, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"TC", region:"Addome", topic:"Ostruzione biliare / double duct",
    title:"TC/MRCP — double duct sign con immagini sintetiche", area:"Addome", organ:"Vie biliari/Pancreas", modality:"TC + MRCP (caso sintetico)",
    clinical:"Ittero ostruttivo.", prompt:"Osserva il pannello e scrivi un referto focalizzato sulla sede dell'ostruzione.",
    task:"Obiettivo: dilatazione contemporanea di coledoco e Wirsung con brusca interruzione distale e sospetta causa periampollare/testa pancreatica.",
    images:["assets/cases/case_ct_double_duct_panel.png"],
    findings:[["Dilatazione del coledoco","coledoco|via biliare principale|dilat"],["Dilatazione del Wirsung","wirsung|dotto pancreatico principale|dilat"],["Double duct sign","double duct|doppio dotto"],["Brusco cutoff distale","cutoff|interruzione|stenosi distale"],["Sospetta ostruzione periampollare/testa pancreatica","periampollar|testa pancreatica|ostruzione distale"]],
    sampleReport:"Dilatazione della via biliare principale e del dotto pancreatico principale, configurando double-duct sign, con brusca interruzione distale in sede periampollare/testa pancreatica. Reperto sospetto per causa ostruttiva distale da caratterizzare nel contesto clinico."
  },
  {
    id:"case_tc_pdac_resectability_img", level:2, sourceType:"map", sourceLabel:"Da mappa: K PANCREAS",
    mapId:"k_pancreas", modalityCode:"TC", region:"Addome", topic:"PDAC: resecabilità",
    title:"TC pancreas — resecabilità PDAC con immagini sintetiche", area:"Addome", organ:"Pancreas", modality:"TC pancreas multiphasica (caso sintetico)",
    clinical:"Adenocarcinoma della testa pancreatica da stadiare.", prompt:"Valuta i rapporti vascolari e formula il giudizio di resecabilità.",
    task:"Obiettivo: massa ipovascolare, contatto SMA <180°, abutment SMV senza occlusione, assenza di encasement arterioso maggiore e di metastasi a distanza nel caso.",
    images:["assets/cases/case_tc_pdac_resectability_panel.png"],
    findings:[["Massa ipovascolare della testa pancreatica","massa|testa pancreatica|ipovascolar"],["Contatto SMA inferiore a 180°","sma|mesenterica superiore|180"],["Contatto/abutment della SMV senza occlusione","smv|mesenterica superiore|abutment|senza occlusione"],["Assenza di encasement arterioso maggiore","assenza|encasement|arterioso"],["Conclusione borderline resectable","borderline|resecabil"]],
    sampleReport:"Massa ipovascolare della testa pancreatica con contatto dell'arteria mesenterica superiore inferiore a 180° e abutment della vena mesenterica superiore senza occlusione; non evidenza di encasement arterioso maggiore né di metastasi a distanza nel caso illustrato. Quadro compatibile con PDAC borderline resectable."
  },
  {
    id:"case_rm_ischemic_cholangitis_img", level:2, sourceType:"map", sourceLabel:"Da mappa: VIE BILIARI",
    mapId:"vie_biliari", modalityCode:"RM", region:"Addome", topic:"Colangite sclerosante secondaria ischemica",
    title:"RM/MRCP — colangite ischemica post-TAE con immagini sintetiche", area:"Addome", organ:"Vie biliari", modality:"RM/MRCP (caso sintetico)",
    clinical:"Pregresso trattamento endovascolare/TAE con successiva colestasi.", prompt:"Osserva il pannello RM/MRCP e scrivi il referto.",
    task:"Obiettivo: stenosi irregolari multifocali intraepatiche, dilatazioni segmentarie a monte, enhancement peribiliare/periportale e assenza di massa dominante.",
    images:["assets/cases/case_rm_ischemic_cholangitis_panel.png"],
    findings:[["Stenosi irregolari multifocali intraepatiche","stenosi|multifocal|intraepatic"],["Dilatazioni segmentarie a monte","dilatazioni|segmentarie|a monte"],["Enhancement peribiliare/periportale","peribiliare|periportale|enhancement"],["Assenza di massa dominante","assenza di massa|nessuna massa|non massa"],["Correlazione con danno ischemico/TAE","ischemi|tae|embolizzazione"],["Conclusione per colangite sclerosante secondaria ischemica","colangite sclerosante secondaria|colangite ischemica"]],
    sampleReport:"MRCP con irregolarità multifocali e stenosi delle vie biliari intraepatiche, associate a dilatazioni segmentarie a monte e alterazioni infiammatorie/peribiliari, senza evidenza di massa dominante. Nel contesto di pregresso danno vascolare/TAE, quadro compatibile con colangite sclerosante secondaria di genesi ischemica."
  }
,

  // ---------- IMMAGINI: SETTIMO BLOCCO (FEGATO) ----------
  {
    id:"case_rm_adenoma_img", level:2, sourceType:"map", sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato", modalityCode:"RM", region:"Addome", topic:"Adenoma epatico",
    title:"RM fegato — adenoma epatico con immagini sintetiche", area:"Addome", organ:"Fegato", modality:"RM fegato multiparametrica (caso sintetico)",
    clinical:"Lesione focale epatica in giovane donna.", prompt:"Osserva il pannello RM e scrivi un referto radiologico.", task:"Obiettivo: lesione ben circoscritta, T1 lievemente iperintensa, T2 moderatamente iperintensa, iperenhancement arterioso con tendenza al washout/isointensità nelle fasi successive.",
    images:["assets/cases/case_rm_adenoma_panel.png"],
    findings:[["Lesione focale ben definita","lesione|nodulo|ben definita|ben circoscritta"],["Segnale T1 relativamente alto o lievemente iperintenso","t1|iperintens|lievemente iperintensa"],["T2 lievemente/moderatamente iperintensa","t2|moderatamente iperintensa|lievemente iperintensa"],["Iperenhancement in fase arteriosa","arterios|iperenhancement|ipervascolare"],["Washout o attenuazione nelle fasi portale/tardiva","washout|portale|tardiv|isointensa"],["Conclusione per adenoma epatico","adenoma epatico|adenoma"]],
    sampleReport:"Formazione nodulare epatica ben circoscritta, lievemente iperintensa in T1 e moderatamente iperintensa in T2, con marcato iperenhancement in fase arteriosa e tendenza all'isointensità/relativo washout nelle fasi successive. Quadro compatibile con adenoma epatico."
  },
  {
    id:"case_ct_mri_liver_abscess_img", level:2, sourceType:"map", sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato", modalityCode:"TC", region:"Addome", topic:"Ascesso epatico",
    title:"TC/RM fegato — ascesso epatico con immagini sintetiche", area:"Addome", organ:"Fegato", modality:"TC/RM fegato (caso sintetico)",
    clinical:"Febbre e dolore in ipocondrio destro.", prompt:"Osserva il pannello TC/RM e scrivi un referto radiologico.", task:"Obiettivo: lesione a contenuto fluido con parete spessa/ring enhancement, edema circostante, possibile piccolo livello aereo e restrizione della diffusione periferica.",
    images:["assets/cases/case_ct_mri_liver_abscess_panel.png"],
    findings:[["Lesione ipodensa/fluida epatica","lesione|raccolta|fluida|ipodensa"],["Parete spessa con ring enhancement","parete spessa|ring enhancement|orletto"],["Edema / imbibizione del parenchima circostante","edema|imbibizione|circostante|perilesionale"],["Eventuale gas intralesionale","gas|aereo|bolla gassosa"],["Restrizione della diffusione della componente purulenta/periferica","restrizione|diffusion|dwi"],["Conclusione per ascesso epatico","ascesso epatico|ascesso"]],
    sampleReport:"Voluminosa lesione epatica a prevalente contenuto fluido, con spessa parete ad enhancement periferico anulare e marcata imbibizione del parenchima circostante; si apprezza anche piccolo focus aereo intralesionale. Nelle sequenze DWI è presente restrizione della diffusione della componente purulenta. Quadro compatibile con ascesso epatico."
  },
  {
    id:"case_ct_mri_portal_hypertension_img", level:2, sourceType:"map", sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato", modalityCode:"TC", region:"Addome", topic:"Cirrosi e ipertensione portale",
    title:"TC/RM — cirrosi e ipertensione portale con immagini sintetiche", area:"Addome", organ:"Fegato", modality:"TC/RM addome (caso sintetico)",
    clinical:"Epatopatia cronica con sospetta ipertensione portale.", prompt:"Osserva il pannello TC/RM e scrivi un referto radiologico.", task:"Obiettivo: fegato a profilo nodulare, lobi dismorfici, splenomegalia, piccoli versamenti/ascite, varici/collaterali e ricanalizzazione della vena paraombelicale.",
    images:["assets/cases/case_ct_mri_portal_hypertension_panel.png"],
    findings:[["Fegato a profilo nodulare / cirrotico","profilo nodulare|cirrosi|cirrotico|dismorfico"],["Ipertrofia lobo caudato o sinistro","caudato|lobo sinistro|ipertrof"],["Splenomegalia","splenomegalia|milza aumentata"],["Ascite","ascite|versamento"],["Collaterali portosistemiche / varici","collaterali|varici|portosistemiche"],["Ricanalizzazione vena paraombelicale / segni di ipertensione portale","paraombelicale|ipertensione portale|vena porta dilatata"],["Conclusione per cirrosi con ipertensione portale","cirrosi con ipertensione portale|ipertensione portale"]],
    sampleReport:"Fegato dismorfico a contorni nodulari, con ipertrofia del lobo caudato/sinistro, associato a splenomegalia, modesta ascite e circoli collaterali portosistemici, inclusa ricanalizzazione della vena paraombelicale. Quadro compatibile con cirrosi epatica e ipertensione portale."
  },
  {
    id:"case_rm_hemangioma_img", level:2, sourceType:"map", sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato", modalityCode:"RM", region:"Addome", topic:"Emangioma epatico",
    title:"RM fegato — emangioma epatico con immagini sintetiche", area:"Addome", organ:"Fegato", modality:"RM fegato multiparametrica (caso sintetico)",
    clinical:"Incidentaloma epatico benigno.", prompt:"Osserva il pannello RM e scrivi un referto radiologico.", task:"Obiettivo: lesione T1 ipo/isointensa, marcatamente iperintensa in T2, enhancement periferico nodulare discontinuo in arteriosa e riempimento centripeto tardivo.",
    images:["assets/cases/case_rm_hemangioma_panel.png"],
    findings:[["Lesione ben circoscritta","lesione|nodulo|ben circoscritta"],["T1 ipo/isointensa","t1|ipointens|isointens"],["T2 marcatamente iperintensa","t2|marcatamente iperintensa|light bulb"],["Enhancement periferico nodulare discontinuo in arteriosa","periferico nodulare|discontinuo|arterios"],["Riempimento centripeto tardivo/progressivo","centripeto|riempimento|tardiv|progressivo"],["Conclusione per emangioma epatico","emangioma epatico|emangioma"]],
    sampleReport:"Formazione focale epatica ben delimitata, ipo/isointensa in T1 e marcatamente iperintensa nelle sequenze T2, con enhancement periferico nodulare discontinuo in fase arteriosa e progressivo riempimento centripeto nelle fasi tardive. Quadro tipico per emangioma epatico."
  },
  {
    id:"case_rm_hemochromatosis_img", level:2, sourceType:"map", sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato", modalityCode:"RM", region:"Addome", topic:"Emocromatosi / emosiderosi",
    title:"RM fegato — emocromatosi/emosiderosi con immagini sintetiche", area:"Addome", organ:"Fegato", modality:"RM fegato con T2* / multi-echo (caso sintetico)",
    clinical:"Sovraccarico marziale.", prompt:"Osserva il pannello RM e scrivi un referto radiologico.", task:"Obiettivo: marcata ipointensità diffusa del fegato soprattutto in T2* GRE / multi-echo, compatibile con accumulo di ferro, con eventuale quantificazione R2*.",
    images:["assets/cases/case_rm_hemochromatosis_panel.png"],
    findings:[["Marcata riduzione diffusa del segnale epatico","riduzione del segnale|ipointens|diffusa|fegato scuro"],["Maggiore evidenza nelle sequenze T2* / GRE / multi-echo","t2\\*|gre|multi-echo|r2\\*"],["Compatibile con sovraccarico marziale","sovraccarico marziale|ferro|iron overload|emocromatosi|emosiderosi"],["Eventuale quantificazione T2*/R2*","t2\\*|r2\\*|quantific"],["Conclusione per emocromatosi/emosiderosi","emocromatosi|emosiderosi"]],
    sampleReport:"Marcata ipointensità diffusa del parenchima epatico, particolarmente evidente nelle sequenze T2*/GRE multi-echo, compatibile con importante accumulo di ferro; i reperti sono suggestivi per emocromatosi/emosiderosi epatica, con possibile quantificazione mediante R2*/T2*."
  },
  {
    id:"case_rm_steatosis_img", level:2, sourceType:"map", sourceLabel:"Da mappa: FEGATO",
    mapId:"fegato", modalityCode:"RM", region:"Addome", topic:"Steatosi focale e focal fatty sparing",
    title:"RM fegato — steatosi focale / focal fatty sparing con immagini sintetiche", area:"Addome", organ:"Fegato", modality:"RM fegato in/opposed phase (caso sintetico)",
    clinical:"Aree focali di alterato contenuto di grasso.", prompt:"Osserva il pannello RM in/opposed phase e scrivi un referto radiologico.", task:"Obiettivo: riconoscere steatosi focale con drop di segnale nelle opposed-phase e focal fatty sparing come area relativamente risparmiata, senza effetto massa o distorsione vascolare.",
    images:["assets/cases/case_rm_steatosis_panel.png"],
    findings:[["Drop di segnale nelle sequenze opposed-phase nelle aree steatosiche","drop di segnale|opposed-phase|out of phase|steatosi"],["Area di focal fatty sparing in fegato steatosico","fatty sparing|risparmio focale|area risparmiata"],["Distribuzione tipica peri-falciforme / fossa colecistica","peri-falciform|fossa colecistica|subcapsular|segmentaria"],["Assenza di effetto massa o distorsione vascolare","assenza di effetto massa|nessun effetto massa|non distorce i vasi"],["Conclusione per steatosi focale/focal fatty sparing","steatosi focale|focal fatty sparing"]],
    sampleReport:"Nelle sequenze opposed-phase si apprezza marcato drop di segnale di alcune aree parenchimali, compatibile con steatosi focale, mentre altre aree relativamente iperintense rappresentano focal fatty sparing su fegato diffusamente steatosico. I reperti non determinano effetto massa né distorsione dei vasi, favorendo natura pseudolesionale."
  }

];

const reportTopicCatalog = [
  // Presente nella mappa FEGATO: catalogo di partenza
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"HCC / LI-RADS"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"HCC / LI-RADS"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Steatosi focale / focal fatty sparing"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Emocromatosi / emosiderosi"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Adenoma epatico"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Emangioma"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Ascesso epatico"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Cirrosi / ipertensione portale"},

  // Presenti nella mappa ma senza un caso pronto in questa versione
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"FNH"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"FNH"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Cisti epatica / lesioni cistiche"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Cisti epatica / lesioni cistiche"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Cisti idatidea"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Epatite acuta / cronica"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Metastasi epatiche"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Metastasi epatiche"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Colangiocarcinoma intraepatico"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Colangiocarcinoma intraepatico"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Budd-Chiari / patologie vascolari"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Wilson / patologie da accumulo"},


  // PANCREAS TUTTO
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"TC", region:"Addome", topic:"Pancreatite acuta"},
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"TC", region:"Addome", topic:"Pancreatite necrotizzante"},
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"RM", region:"Addome", topic:"IPMN"},
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"RM", region:"Addome", topic:"Neoplasia cistica mucinosa"},
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"RM", region:"Addome", topic:"Cistoadenoma sieroso"},

  // K PANCREAS
  {sourceType:"map", mapId:"k_pancreas", mapName:"K PANCREAS", modality:"TC", region:"Addome", topic:"PDAC"},
  {sourceType:"map", mapId:"k_pancreas", mapName:"K PANCREAS", modality:"TC", region:"Addome", topic:"PDAC: resecabilità"},
  {sourceType:"map", mapId:"k_pancreas", mapName:"K PANCREAS", modality:"RM", region:"Addome", topic:"PDAC: metastasi epatiche"},
  {sourceType:"map", mapId:"k_pancreas", mapName:"K PANCREAS", modality:"TC", region:"Addome", topic:"PDAC post-neoadiuvante"},

  // VIE BILIARI
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"PSC"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Colangite IgG4-correlata"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"TC", region:"Addome", topic:"Colangiocarcinoma ilare"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Malattia di Caroli"},


  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"TC", region:"Addome", topic:"Raccolte della pancreatite"},
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"RM", region:"Addome", topic:"Raccolte della pancreatite"},
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"TC", region:"Addome", topic:"Necrosi infetta"},

  {sourceType:"map", mapId:"k_pancreas", mapName:"K PANCREAS", modality:"TC", region:"Addome", topic:"PDAC: carcinosi peritoneale"},
  {sourceType:"map", mapId:"k_pancreas", mapName:"K PANCREAS", modality:"TC", region:"Torace", topic:"PDAC: metastasi polmonari"},

  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Cisti del coledoco"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Colangite piogenica ricorrente"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Colangite sclerosante secondaria ischemica"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"TC", region:"Addome", topic:"Colangiocarcinoma intraepatico"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"TC", region:"Addome", topic:"Ostruzione biliare / double duct"},


  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"RM", region:"Addome", topic:"IPMN"},
  {sourceType:"map", mapId:"k_pancreas", mapName:"K PANCREAS", modality:"TC", region:"Addome", topic:"PDAC"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"PSC"},
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"TC", region:"Addome", topic:"Raccolte della pancreatite"},


  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"RM", region:"Addome", topic:"Pancreatite autoimmune"},


  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"TC", region:"Addome", topic:"Pancreatite acuta"},
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"TC", region:"Addome", topic:"Necrosi infetta"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"TC", region:"Addome", topic:"Colangiocarcinoma intraepatico"},


  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"TC", region:"Addome", topic:"Raccolte della pancreatite"},
  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"RM", region:"Addome", topic:"IPMN"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Colangite IgG4-correlata"},


  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Malattia di Caroli"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Cisti del coledoco"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Colangite piogenica ricorrente"},
  {sourceType:"map", mapId:"k_pancreas", mapName:"K PANCREAS", modality:"RM", region:"Addome", topic:"PDAC: metastasi epatiche"},


  {sourceType:"map", mapId:"pancreas_tutto", mapName:"PANCREAS TUTTO", modality:"TC", region:"Addome", topic:"Pancreatite necrotizzante"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"TC", region:"Addome", topic:"Ostruzione biliare / double duct"},
  {sourceType:"map", mapId:"k_pancreas", mapName:"K PANCREAS", modality:"TC", region:"Addome", topic:"PDAC: resecabilità"},
  {sourceType:"map", mapId:"vie_biliari", mapName:"VIE BILIARI", modality:"RM", region:"Addome", topic:"Colangite sclerosante secondaria ischemica"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Adenoma epatico"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Ascesso epatico"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"TC", region:"Addome", topic:"Cirrosi e ipertensione portale"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Emangioma epatico"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Emocromatosi / emosiderosi"},
  {sourceType:"map", mapId:"fegato", mapName:"FEGATO", modality:"RM", region:"Addome", topic:"Steatosi focale e focal fatty sparing"},

  // Fuori mappa: casi già presenti
  {sourceType:"outside", mapName:null, modality:"TC", region:"Torace", topic:"Neoplasia polmonare"}
];

const reportRegions = ["Encefalo","Testa-collo","Torace","Addome","Pelvi","Muscoloscheletrico","Cardiovascolare"];


const archiveTaxonomy = {
  "Addome": {
    "Fegato": ["Generale", "Protocollo RM", "Lesioni focali benigne", "HCC / LI-RADS", "Metastasi", "Cirrosi e ipertensione portale", "Steatosi / pseudolesioni", "Sovraccarico di ferro", "Infezioni / ascessi"],
    "Vie biliari": ["Generale", "Anatomia / MRCP", "Malattie infiammatorie", "Malformazioni / ectasie", "Ostruzione biliare", "Colangiocarcinoma"],
    "Pancreas": ["Generale", "Pancreatiti", "Raccolte", "Lesioni cistiche", "IPMN", "Neoplasie / PDAC", "Staging e resecabilità"],
    "Reni": ["Generale", "Cisti e malattie cistiche", "Masse renali", "Infezioni", "Uropatia ostruttiva", "Trauma"],
    "Surreni": ["Generale", "Adenoma", "Feocromocitoma", "Metastasi", "Incidentaloma"],
    "Milza": ["Generale", "Lesioni focali", "Infarto / trauma", "Splenomegalia"],
    "Gastrointestinale": ["Esofago / stomaco", "Intestino tenue", "Colon", "Appendice", "Emergenze"],
    "Peritoneo / retroperitoneo": ["Peritoneo", "Retroperitoneo", "Carcinosi", "Raccolte"]
  },
  "Torace": {
    "Polmone": ["Noduli polmonari", "Neoplasie", "Infezioni", "Interstiziopatie", "Vie aeree", "Emergenze"],
    "Mediastino": ["Masse mediastiniche", "Linfonodi", "Timo", "Esofago"],
    "Pleura": ["Versamento", "Pneumotorace", "Ispessimenti / placche", "Neoplasie pleuriche"],
    "Parete toracica": ["Coste", "Sterno", "Tessuti molli"],
    "Vascolare toracico": ["Aorta", "Embolia polmonare", "Arterie polmonari", "Vene cave"]
  },
  "Pelvi": {
    "Ovaio / annessi": ["Cisti", "Endometriosi", "Masse ovariche", "Torsione", "O-RADS"],
    "Utero": ["Miomi", "Endometrio", "Cervice"],
    "Vescica": ["Generale", "Neoplasie"],
    "Prostata": ["PI-RADS", "Staging"],
    "Retto": ["Staging RM", "Follow-up"]
  },
  "Muscoloscheletrico": {
    "Ginocchio": ["Menischi", "Legamenti", "Cartilagine", "Osso / midollo", "Post-operatorio"],
    "Spalla": ["Cuffia", "Labrum", "Instabilità"],
    "Anca": ["Generale", "Impingement", "Artrosi"],
    "Rachide": ["Degenerativo", "Trauma", "Neoplasie / infezioni"],
    "Caviglia / piede": ["Legamenti", "Tendini", "Osso"],
    "Gomito / polso / mano": ["Generale"]
  },
  "Neuroradiologia": {
    "Encefalo": ["Vascolare", "Neoplasie", "Infezioni", "Demyelinating", "Emergenze"],
    "Rachide": ["Midollo", "Degenerativo", "Neoplasie"],
    "Ipofisi": ["Adenomi", "Regione sellare"],
    "Orbite": ["Generale"]
  },
  "Testa-collo": {
    "Collo": ["Linfonodi", "Spazi cervicali"],
    "Faringe / laringe": ["Neoplasie", "Infezioni"],
    "Ghiandole salivari": ["Parotide", "Sottomandibolare"]
  },
  "Cardiovascolare": {
    "Aorta": ["Aneurisma", "Dissezione", "Sindrome aortica acuta"],
    "Cuore": ["Generale", "Cardio-RM"],
    "Arterie periferiche": ["PAD", "Aneurismi"],
    "Vene": ["Trombosi", "Malformazioni"]
  },
  "Interventistica": {
    "Embolizzazione": ["Emorragie", "Tumori", "UAE"],
    "Drenaggi / biopsie": ["Drenaggi", "Biopsie"],
    "Accessi / procedure": ["Accessi", "Complicanze"]
  }
};

const bundledArchiveMeta = {
  fegato:{area:"Addome",organ:"Fegato",category:"Generale"},
  fegato_protocollo:{area:"Addome",organ:"Fegato",category:"Protocollo RM"},
  pancreas_tutto:{area:"Addome",organ:"Pancreas",category:"Generale"},
  k_pancreas:{area:"Addome",organ:"Pancreas",category:"Neoplasie / PDAC"},
  vie_biliari:{area:"Addome",organ:"Vie biliari",category:"Generale"}
};




const DAY = 86400000;
const todayISO = () => new Date().toISOString().slice(0,10);
const addDays = (d,n)=>{const x=new Date(d+"T12:00:00");x.setDate(x.getDate()+n);return x.toISOString().slice(0,10)};
const norm = s => (s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s]/g," ");

const demo = {
  version:1,
  maps:[{
    id:"fegato",
    title:"FEGATO",
    area:"Addome", organ:"Fegato", tags:["RM","TC","epatologia"],
    source:"FEGATO.pdf", pdfMode:"bundled", pdfPath:"library/archivio/addome/fegato/FEGATO.pdf",
    created:todayISO(),
    units:[
      {
        id:"steatosi",
        title:"Steatosi epatica",
        mastery:45, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Scrivi tutto quello che ricordi sulla steatosi epatica. Nessun suggerimento: includi solo ciò che riesci a recuperare spontaneamente.",
        concepts:[
          ["forme: diffusa, focale, nodulare multifocale","diffusa|focale|nodulare|multifocale|pseudonodulare"],
          ["RM: caduta di segnale in opposed/out-of-phase","out of phase|out-of-phase|opposed phase|opposed-phase|fuori fase|abbattimento del segnale|caduta di segnale"],
          ["TC: riduzione della densità","ridotta densita|ipodens|hu"],
          ["US: aumentata ecogenicità","aumentata ecogenicita|iperecogen"],
          ["assenza di effetto massa","no effetto massa|assenza effetto massa|non distorce i vasi|vasi non distorti"],
          ["focal fatty sparing","focal fatty sparing|risparmio focale|aree di risparmio"],
          ["sede tipica: IV segmento / falciforme / periportale","segmento iv|iv segmento|falciforme|vena porta|periport"],
          ["third inflow","third inflow|terzo flusso"],
          ["DD con neoplasie/metastasi","metastasi|neoplas|massa"]
        ],
        questions:[
          {q:"Qual è il reperto RM fondamentale della steatosi nella chemical shift imaging?", a:"Caduta di segnale nelle immagini opposed/out-of-phase."},
          {q:"Quali elementi aiutano a distinguere una steatosi focale da una vera massa?", a:"Assenza di effetto massa, decorso vascolare conservato e comportamento compatibile con grasso."},
          {q:"Perché steatosi focale e focal fatty sparing ricorrono in sedi tipiche?", a:"Per fenomeni di third inflow / apporto venoso accessorio."}
        ]
      },
      {
        id:"cirrosi", title:"Cirrosi", mastery:62, interval:1, due:todayISO(), reviews:1, lapses:0,
        freeRecallPrompt:"Ricostruisci la cirrosi come se dovessi spiegarla senza vedere la mappa: morfologia, segnale, noduli, fibrosi e segni di ipertensione portale.",
        concepts:[
          ["alterazioni morfologiche e margini nodulari","margini nodulari|bozzut|dismorf|atrofia|ipertrofia"],
          ["noduli di rigenerazione","noduli di rigenerazione|rigenerativi"],
          ["noduli siderotici","siderot|ferro"],
          ["fibrosi","fibrosi|reticolare|settale|confluente"],
          ["ipertensione portale","ipertensione portale|splenomegalia|collaterali|varici|ascite"],
          ["vena porta e trombosi","vena porta|trombosi portale|cavernoma"]
        ],
        questions:[
          {q:"Quali sono i principali segni morfologici di cirrosi avanzata?",a:"Margini nodulari, dismorfia, atrofia/ipertrofia segmentale, eterogeneità parenchimale e segni di ipertensione portale."}
        ]
      },
      {
        id:"emocromatosi", title:"Emocromatosi / emosiderosi", mastery:38, interval:0, due:todayISO(), reviews:0, lapses:1,
        freeRecallPrompt:"Scrivi tutto ciò che ricordi su emocromatosi ed emosiderosi, soprattutto distribuzione del ferro e comportamento in TC/RM.",
        concepts:[
          ["ferro paramagnetico e perdita di segnale","paramagnet|perdita di segnale|riduzione del segnale"],
          ["T2* / gradient echo sensibili al ferro","t2*|gradient echo|gre"],
          ["primaria: prevalente non-RES / epatociti","primaria|epatocit|non res|non-res"],
          ["secondaria: RES, milza e midollo","secondaria|res|milza|midollo"],
          ["TC: aumento densità","aumento densita|iperdens|75|130 hu"]
        ],
        questions:[
          {q:"Quali sequenze RM sono più sensibili alla presenza di ferro?",a:"Le gradient-echo, in particolare T2*."},
          {q:"Quale distribuzione orienta maggiormente verso sovraccarico secondario/emosiderosi?",a:"Coinvolgimento del sistema reticolo-endoteliale, con milza e midollo oltre al fegato."}
        ]
      },
      {
        id:"hcc", title:"HCC", mastery:55, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Scrivi tutto quello che ricordi sull'HCC: contesto, morfologia, enhancement, RM, diagnosi differenziale e criteri diagnostici.",
        concepts:[
          ["vascolarizzazione prevalentemente arteriosa / APHE","arterios|aphe|iperenhancement"],
          ["washout portale/tardivo","washout|portale|tardiv"],
          ["capsula","capsula"],
          ["mosaico / necrosi / emorragia","mosaico|necrosi|emorrag"],
          ["cirrosi / fegato a rischio","cirrosi|hbv|hcv|rischio"],
          ["LI-RADS","li-rads|lirads"]
        ],
        questions:[
          {q:"Qual è il pattern dinamico classico dell'HCC?",a:"Iperenhancement arterioso non-rim con washout non periferico nelle fasi successive, nel corretto contesto clinico."}
        ]
      },
      {
        id:"lirads", title:"LI-RADS", mastery:35, interval:0, due:todayISO(), reviews:0, lapses:1,
        freeRecallPrompt:"Senza guardare la mappa, ricostruisci LI-RADS: quando si usa, major features, categorie principali e criteri che ricordi.",
        concepts:[
          ["uso in popolazione a rischio","cirrosi|hbv|rischio"],
          ["APHE non periferico","aphe|iperenhancement|non periferico|non rim"],
          ["washout non periferico","washout|non periferico"],
          ["capsula con enhancement","capsula|enhancement"],
          ["dimensioni","dimension"],
          ["crescita","crescita|50%|6 mesi"],
          ["LR-3 / LR-4 / LR-5","lr-3|lr3|lr-4|lr4|lr-5|lr5"],
          ["LR-TIV","lr-tiv|tiv|tumor in vein"],
          ["LR-M","lr-m|lrm"]
        ],
        questions:[
          {q:"Elenca le major features LI-RADS che hai inserito nella tua mappa.",a:"APHE non periferico, washout non periferico, capsula con enhancement, dimensioni e crescita."},
          {q:"Che cosa indica LR-TIV?",a:"Tumor in vein."}
        ]
      },
      {
        id:"adenoma_fnh", title:"Adenoma ↔ FNH", mastery:40, interval:0, due:todayISO(), reviews:0, lapses:1,
        freeRecallPrompt:"Confronta a memoria adenoma epatico e FNH. Scrivi analogie e differenze: clinica, anatomia, comportamento dinamico, grasso, sanguinamento e fase epatobiliare.",
        concepts:[
          ["adenoma: giovani donne / contraccettivi","contraccett|giovani|donna"],
          ["adenoma: tendenza al sanguinamento","sanguin|emorrag"],
          ["adenoma: grasso possibile","grasso|lipid"],
          ["FNH: dotti biliari / architettura epatocitaria","dotti biliari|biliare|fnh"],
          ["DD dinamica adenoma-FNH","arterios|portale|tardiv|epatobil"]
        ],
        questions:[
          {q:"Quali elementi della tua mappa spiegano la propensione dell'adenoma al sanguinamento?",a:"Sinusoidi a parete sottile perfusi a pressione arteriosa, scarso tessuto connettivo di supporto e capsula assente/incompleta."},
          {q:"Quale differenza istologica tra adenoma e FNH è evidenziata nella tua mappa?",a:"Nell'adenoma i dotti biliari sono assenti, a differenza della FNH."}
        ]
      }
    ],
    confusions:[
      {a:"Adenoma",b:"FNH",score:78},
      {a:"Emocromatosi",b:"Emosiderosi",score:72},
      {a:"Steatosi focale",b:"Massa",score:55},
      {a:"HCC",b:"LR-M / non-HCC malignancy",score:45}
    ]
  }]
};



const bundledMapAdditions = [
  {
    id:"pancreas_tutto",
    title:"PANCREAS TUTTO",
    area:"Addome",
    organ:"Pancreas",
    tags:["TC","RM","pancreatite","cisti","IPMN"],
    source:"PANCREAS_TUTTO.pdf",
    pdfMode:"bundled",
    pdfPath:"library/archivio/addome/pancreas/PANCREAS_TUTTO.pdf",
    created:todayISO(),
    confusions:[
      ["Pseudocisti","WON"],
      ["Cistoadenoma sieroso","Neoplasia cistica mucinosa"],
      ["IPMN","Neoplasia cistica mucinosa"],
      ["Pancreatite focale","PDAC"]
    ],
    units:[
      {
        id:"pancreatite_acuta",
        title:"Pancreatite acuta",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Scrivi tutto quello che ricordi sulla pancreatite acuta: eziologia, diagnosi, Atlanta, imaging e complicanze.",
        concepts:[
          ["Diagnosi clinico-laboratoristica e imaging","dolore|amilasi|lipasi|radiologia|imaging"],
          ["Forma edematosa vs necrotizzante","edematosa|necrotizzante|necrosi"],
          ["Atlanta: precoce/tardiva e severità","atlanta|precoce|tardiva|lieve|moderata|severa"],
          ["TC non indicata troppo precocemente per necrosi","72 ore|72h|necrosi"],
          ["Complicanze locali e vascolari","pseudoaneurisma|trombosi|necrosi infetta|ostruzione biliare"]
        ],
        questions:[
          {q:"Quali sono le due principali forme di pancreatite acuta all'imaging?",a:"Interstiziale-edematosa e necrotizzante."},
          {q:"Perché la TC troppo precoce può sottostimare la necrosi?",a:"Perché la necrosi può non essere ancora pienamente sviluppata/evidente nelle prime 72 ore."}
        ]
      },
      {
        id:"raccolte_pancreatite",
        title:"Raccolte della pancreatite",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Ricostruisci la classificazione delle raccolte pancreatiche secondo contenuto, parete e tempo.",
        concepts:[
          ["APFC <4 settimane, contenuto fluido, senza parete definita","apfc|raccolta fluida peripancreatica acuta|4 settimane"],
          ["Pseudocisti >4 settimane, fluida, parete definita","pseudocisti|parete definita|4 settimane"],
          ["ANC <4 settimane, necrotica","anc|raccolta necrotica acuta"],
          ["WON >4 settimane, necrosi murata","won|necrosi murata|walled off"],
          ["Pseudocisti non rivestita da epitelio","tessuto fibroso|non epitelio"]
        ],
        questions:[
          {q:"Qual è la differenza fondamentale tra pseudocisti e WON?",a:"La pseudocisti contiene fluido; la WON contiene componente necrotica/solida oltre al fluido."}
        ]
      },
      {
        id:"lesioni_cistiche_pancreas",
        title:"Lesioni cistiche pancreatiche",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Confronta pseudocisti, cistoadenoma sieroso, neoplasia cistica mucinosa e IPMN.",
        concepts:[
          ["Cistoadenoma sieroso: microcistico, honeycomb, cicatrice centrale","sieroso|microcistico|honeycomb|cicatrice centrale"],
          ["MCN: donne, corpo-coda, stroma ovarico, non comunica con Wirsung","mcn|mucinosa|corpo|coda|stroma ovarico|non comunica"],
          ["IPMN: comunica con dotto pancreatico","ipmn|comunica|wirsung"],
          ["CEA >192 ng/ml suggerisce lesione mucinosa","cea|192"],
          ["Noduli murali, parete e dotto principale sono elementi di rischio","nodulo murale|parete|wirsung|rischio"]
        ],
        questions:[
          {q:"Quale lesione cistica comunica tipicamente con il dotto pancreatico?",a:"IPMN."},
          {q:"Quale lesione mucinosa è tipica di donne e corpo-coda e non comunica con Wirsung?",a:"Neoplasia cistica mucinosa (MCN)."}
        ]
      },
      {
        id:"ipmn",
        title:"IPMN",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Scrivi classificazione, imaging e criteri di rischio dell'IPMN.",
        concepts:[
          ["MD-IPMN, BD-IPMN, misto","md-ipmn|bd-ipmn|mista|misto"],
          ["Main duct >5 mm","5 mm|dotto principale"],
          ["High-risk: ittero, nodulo murale enhancing ≥5 mm, Wirsung ≥10 mm","ittero|5 mm|10 mm|high risk"],
          ["Worrisome: cisti >3 cm, Wirsung 5-9 mm, parete ispessita/captante, atrofia distale","3 cm|5-9|parete|atrofia distale|worrisome"],
          ["Comunicazione con Wirsung","comunica|wirsung"],
          ["Crescita ≥2,5 mm/anno","2.5 mm|anno|crescita"]
        ],
        questions:[
          {q:"Quali sono i tre tipi principali di IPMN?",a:"Main-duct, branch-duct e misto."},
          {q:"Quali reperti della mappa sono high-risk stigmata?",a:"Ittero ostruttivo, nodulo murale con enhancement ≥5 mm, Wirsung ≥10 mm."}
        ]
      }
    ]
  },
  {
    id:"k_pancreas",
    title:"K PANCREAS",
    area:"Addome",
    organ:"Pancreas",
    tags:["TC","RM","PDAC","staging","resecabilità"],
    source:"K_PANCREAS.pdf",
    pdfMode:"bundled",
    pdfPath:"library/archivio/addome/pancreas/K_PANCREAS.pdf",
    created:todayISO(),
    confusions:[
      ["Abutment","Encasement"],
      ["Tumore residuo","Fibrosi post-neoadiuvante"],
      ["Linfonodo regionale","Linfonodo a distanza"]
    ],
    units:[
      {
        id:"pdac_imaging",
        title:"PDAC: imaging",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Descrivi il PDAC in TC e RM, incluse fasi contrastografiche e segni indiretti.",
        concepts:[
          ["Massa tipicamente ipovascolare/ipodensa","ipovascolare|ipodensa"],
          ["Fase pancreatica 35-50 s / circa 40-50 s","35-50|40-50|fase pancreatica"],
          ["Double duct sign","double duct|doppio dotto"],
          ["Atrofia distale e dilatazione duttale","atrofia|dilatazione|wirsung"],
          ["T1 ipointenso, DWI alta e ADC basso","t1|dwi|adc|restrizione"],
          ["Enhancement tardivo per stroma fibrotico","tardiva|fibrosi|stroma"]
        ],
        questions:[
          {q:"In quale fase TC si ottiene il massimo contrasto tra PDAC e pancreas sano secondo la mappa?",a:"Fase pancreatica, circa 40-50 secondi."}
        ]
      },
      {
        id:"pdac_vasi",
        title:"PDAC: rapporti vascolari e resecabilità",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Ricostruisci abutment, encasement e criteri di resecabilità/borderline/non resecabilità presenti nella mappa.",
        concepts:[
          ["Abutment <180°","abutment|<180|180"],
          ["Encasement >180°","encasement|>180|180"],
          ["VMS/VP: contorno, trombosi e ricostruibilità","vms|vena porta|trombosi|ricostru"],
          ["AMS, tripode celiaco, arteria epatica comune","ams|tripode|celiaco|epatica comune"],
          ["Teardrop SMV sign","teardrop|lacrima|vms"],
          ["Metastasi a distanza = non resecabilità biologica","m1|metastasi|non resecabile"]
        ],
        questions:[
          {q:"Come distingui abutment ed encasement?",a:"Abutment: contatto <180°; encasement: contatto >180°."}
        ]
      },
      {
        id:"pdac_metastasi",
        title:"PDAC: metastasi e staging",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Scrivi sedi metastatiche, ruolo RM epatica, linfonodi e reperti di carcinosi.",
        concepts:[
          ["Sedi più frequenti: fegato e peritoneo","fegato|peritoneo"],
          ["RM epatica con DWI e mdc epatospecifico per piccole metastasi","dwi|epatospecifico|metastasi epatiche"],
          ["Carcinosi: noduli, ispessimento peritoneale, ascite, omental cake","omental cake|peritoneo|ascite|noduli"],
          ["Polmone e osso meno frequenti","polmone|ossa"],
          ["Linfonodi para-aortici/interaortocavali come sedi a distanza nella mappa","para-aortic|interaorto|m1"]
        ],
        questions:[
          {q:"Quali sono le due sedi metastatiche più frequenti riportate nella mappa?",a:"Fegato e peritoneo."}
        ]
      },
      {
        id:"pdac_post_nat",
        title:"PDAC: post-neoadiuvante",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Come valuti il PDAC dopo neoadiuvante? Descrivi limiti e segni favorevoli della mappa.",
        concepts:[
          ["DD residuo tumorale vs fibrosi","residuo|fibrosi"],
          ["Possibile persistenza di contatto vascolare fibrotico","contatto vascolare|fibrosi"],
          ["CA19.9 stabile/ridotto e assenza di progressione","ca19.9|stabile|ridotto|progressione"],
          ["Passaggio da tessuto solido a halo perivascolare","halo|perivascolare"],
          ["Riduzione dimensionale","riduzione|dimensioni"]
        ],
        questions:[
          {q:"Perché il restaging dopo neoadiuvante è difficile?",a:"Perché la fibrosi post-trattamento può simulare residuo tumorale e contatto vascolare persistente."}
        ]
      }
    ]
  },
  {
    id:"vie_biliari",
    title:"VIE BILIARI",
    area:"Addome",
    organ:"Vie biliari",
    tags:["RM","TC","MRCP","PSC","colangiocarcinoma"],
    source:"VIE_BILIARI.pdf",
    pdfMode:"bundled",
    pdfPath:"library/archivio/addome/vie-biliari/VIE_BILIARI.pdf",
    created:todayISO(),
    confusions:[
      ["PSC","Colangite IgG4-correlata"],
      ["Colangiocarcinoma","Stenosi infiammatoria"],
      ["Caroli","Cisti del coledoco"]
    ],
    units:[
      {
        id:"biliary_anatomy",
        title:"Anatomia e diagnostica vie biliari",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Ricostruisci anatomia intra/extraepatica, coledoco, varianti e diagnostica delle vie biliari.",
        concepts:[
          ["Coledoco: dotto epatico comune + dotto cistico","coledoco|epatico comune|cistico"],
          ["Diametro normale fino a circa 6 mm","6 mm|diametro"],
          ["Double duct sign","double duct|doppio dotto"],
          ["Colangio-RM T2: bile iperintensa, calcoli come difetti di riempimento","t2|iperintensa|difetto di riempimento|calcoli"],
          ["Varianti dei dotti epatici destri","posteriore destro|anteriore destro|varianti"]
        ],
        questions:[
          {q:"Quali strutture si dilatano nel double duct sign?",a:"Coledoco e dotto pancreatico principale."}
        ]
      },
      {
        id:"psc",
        title:"Colangite sclerosante primitiva",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Scrivi tutto sulla PSC: distribuzione, MRCP, complicanze e rischio neoplastico.",
        concepts:[
          ["Stenosi multifocali alternate a dotti normali/dilatati","stenosi|dilatazioni|multifocali"],
          ["Beaded appearance / collana di perle","collana di perle|beaded"],
          ["Pruned tree / albero potato","albero potato|pruned tree"],
          ["Diverticoli sacculari","diverticoli|sacculari"],
          ["Coinvolgimento intra ed extraepatico frequente","intra|extraepatiche"],
          ["Rischio aumentato di colangiocarcinoma","colangiocarcinoma|rischio"]
        ],
        questions:[
          {q:"Quali sono i principali pattern colangiografici della PSC riportati nella mappa?",a:"Band-like strictures, collana di perle, albero potato e diverticoli."}
        ]
      },
      {
        id:"igg4_cholangitis",
        title:"Colangite IgG4-correlata",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Confronta colangite IgG4-correlata e PSC e ricorda il rapporto con pancreatite autoimmune.",
        concepts:[
          ["IgG4 elevate e plasmacellule IgG4-positive","igg4|plasmacellule"],
          ["Stenosi più lunghe e spesso distali","stenosi lunghe|distale"],
          ["Associazione con pancreatite autoimmune","pancreatite autoimmune"],
          ["Risposta a steroidi","steroidi|regressione"],
          ["Coinvolgimento multiorgano IgG4","dacrioadenite|scialoadenite|fibrosi retroperitoneale"]
        ],
        questions:[
          {q:"Quale organo va sempre osservato in sospetta colangite IgG4-correlata secondo la mappa?",a:"Il pancreas, per la frequente associazione con pancreatite autoimmune."}
        ]
      },
      {
        id:"cholangiocarcinoma",
        title:"Colangiocarcinoma",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Descrivi sedi, pattern di crescita, TC tardiva, Bismuth-Corlette e punti essenziali del referto.",
        concepts:[
          ["Intraepatico periferico/centrale, ilare, extraepatico","intraepatico|ilare|extraepatico|klatskin"],
          ["Pattern mass-forming, papillare, infiltrante","mass forming|papillare|infiltrante"],
          ["Enhancement ritardato per tessuto fibroso","ritardato|fibroso|equilibrio"],
          ["Dilatazione a monte e retrazione capsulare","dilatazione|retrazione capsula"],
          ["Bismuth-Corlette per ilare","bismuth|corlette"],
          ["Rapporti con vena porta e arteria epatica","vena porta|arteria epatica|abut|encase"]
        ],
        questions:[
          {q:"Perché la fase tardiva è utile nel colangiocarcinoma secondo la mappa?",a:"Per il progressivo enhancement del tessuto fibroso tumorale."}
        ]
      }
    ]
  },
  {
    id:"fegato_protocollo",
    title:"FEGATO — PROTOCOLLO RM",
    area:"Addome",
    organ:"Fegato",
    tags:["RM","protocollo","DWI","GRE","MRCP"],
    source:"FEGATO_PROTOCOLLO.pdf",
    pdfMode:"bundled",
    pdfPath:"library/archivio/addome/fegato/FEGATO_PROTOCOLLO.pdf",
    created:todayISO(),
    confusions:[
      ["HASTE","TSE"],
      ["In-phase","Out-of-phase"],
      ["T2","T2*"]
    ],
    units:[
      {
        id:"rm_haste_tse",
        title:"HASTE, TSE e BLADE",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Spiega HASTE, TSE, half-Fourier e BLADE/PROPELLER.",
        concepts:[
          ["HASTE = single-shot TSE con partial Fourier","haste|single shot|partial fourier"],
          ["TSE = multishot, multipli TR","tse|multishot"],
          ["BLADE/PROPELLER = acquisizione radiale del k-spazio","blade|propeller|radiale"],
          ["Oversampling del centro del k-spazio per motion correction","oversampling|centro|motion"],
          ["HASTE rapida e utile per anatomia/cisti","rapida|cisti|anatomia"]
        ],
        questions:[
          {q:"Qual è la differenza essenziale tra TSE e HASTE riportata nella mappa?",a:"TSE è multishot; HASTE è single-shot con acquisizione molto rapida."}
        ]
      },
      {
        id:"rm_gre_chemical_shift",
        title:"GRE e chemical shift",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Ricostruisci GRE, in/out-of-phase, grasso intracellulare e ink artifact.",
        concepts:[
          ["A 1,5 T opposed-phase circa 2,4 ms e in-phase circa 4,8 ms","2.4|4.8|opposed|in phase"],
          ["Caduta di segnale se voxel contiene acqua+grasso","caduta|acqua|grasso"],
          ["Ink artifact ai bordi grasso-parenchima","ink|inchiostro"],
          ["Utile per steatosi e grasso intracellulare","steatosi|adenoma|hcc|grasso"],
          ["GRE sensibile a disomogeneità di campo","gre|disomogeneita"]
        ],
        questions:[
          {q:"Cosa determina la caduta di segnale in opposed-phase?",a:"La cancellazione vettoriale tra segnali di acqua e grasso nello stesso voxel."}
        ]
      },
      {
        id:"rm_dwi",
        title:"DWI epatica",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Spiega b-value, black-blood, restrizione e ruolo dell'ADC.",
        concepts:[
          ["b50 quasi T2 ma black-blood","b50|black blood"],
          ["Alti b-value evidenziano acqua con mobilità ridotta","b800|b1000|restrizione"],
          ["ADC sintetizza il decadimento del segnale","adc"],
          ["DWI utile per riconoscimento/caratterizzazione/risposta","riconoscere|caratterizzazione|risposta"],
          ["Cisti perdono segnale ad alti b","cisti|scompare|b800"]
        ],
        questions:[
          {q:"Perché b50 è utile nel fegato secondo la mappa?",a:"È quasi T2 ma con effetto black-blood, quindi sopprime il segnale dei vasi."}
        ]
      },
      {
        id:"rm_mrcp",
        title:"Colangio-RM e fase dinamica",
        mastery:0, interval:0, due:todayISO(), reviews:0, lapses:0,
        freeRecallPrompt:"Descrivi 2D/3D MRCP, preparazione, mdc e multiarteriosa.",
        concepts:[
          ["MRCP T2 con sezioni sottili 2D/3D","mrcp|colangio|2d|3d"],
          ["Soppressione segnale liquidi intestinali","liquidi intestinali|orale"],
          ["Multiarteriosa utile con Primovist per rischio di motion","multiarteriosa|primovist|motion"],
          ["CAIPIRINHA consente più campionamenti arteriosi","caipirinha|arteriosa"],
          ["Fase epatobiliare con acquisizione ad alta risoluzione","epatobiliare|risoluzione"]
        ],
        questions:[
          {q:"Perché la multiarteriosa è particolarmente utile con Primovist?",a:"Per aumentare la probabilità di ottenere almeno una fase arteriosa diagnostica nonostante il possibile artefatto respiratorio."}
        ]
      }
    ]
  }
];

let state = JSON.parse(localStorage.getItem("recall_state")||"null") || structuredClone(demo);
let queue = [], qIndex=0, currentUnit=null, currentQuestion=null;
state.documents = state.documents || [];

// Migration from older Recall versions: localStorage may contain the FEGATO map
// without the new PDF metadata, even though FEGATO.pdf is bundled in v0.3+.
state.maps.forEach(m=>{
  if(m.id==="fegato" || (m.source||"").toLowerCase()==="fegato.pdf"){
    m.pdfMode="github";
    m.pdfPath="library/archivio/addome/fegato/FEGATO.pdf";
    m.source="FEGATO.pdf";
  }
});

// Add/update bundled maps without erasing existing study progress.
bundledMapAdditions.forEach(srcMap=>{
  const existing=state.maps.find(m=>m.id===srcMap.id);
  if(!existing){
    state.maps.push(structuredClone(srcMap));
  }else{
    existing.title=srcMap.title;
    existing.area=srcMap.area;
    existing.organ=srcMap.organ;
    existing.tags=srcMap.tags;
    existing.source=srcMap.source;
    existing.pdfMode="github";
    existing.pdfPath=srcMap.pdfPath;
    existing.confusions=srcMap.confusions;
    existing.units=existing.units||[];
    srcMap.units.forEach(srcUnit=>{
      if(!existing.units.some(u=>u.id===srcUnit.id)) existing.units.push(structuredClone(srcUnit));
    });
  }
});
state.maps.forEach(m=>{ if(m.pdfPath && m.pdfPath.startsWith("library/")) m.pdfMode="github"; });
localStorage.setItem("recall_state", JSON.stringify(state));


// Recall v1.9 — GitHub-only private archive.
// The public GitHub Pages app contains no personal documents. A read-only,
// fine-grained GitHub token is stored only in this browser/device and is used
// to read the private data repository through the GitHub REST API.
const GH_DEFAULT={owner:"NewsLetterAI",repo:"expert-potato9643019",branch:"main"};
const GH_DB="recall_github_private", GH_STORE="kv";
let githubLibrarySynced=false;

function openGhDB(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open(GH_DB,1);
    req.onupgradeneeded=()=>{ if(!req.result.objectStoreNames.contains(GH_STORE)) req.result.createObjectStore(GH_STORE); };
    req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error);
  });
}
async function ghKvPut(key,value){const db=await openGhDB();return new Promise((resolve,reject)=>{const tx=db.transaction(GH_STORE,"readwrite");tx.objectStore(GH_STORE).put(value,key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});}
async function ghKvGet(key){const db=await openGhDB();return new Promise((resolve,reject)=>{const r=db.transaction(GH_STORE,"readonly").objectStore(GH_STORE).get(key);r.onsuccess=()=>resolve(r.result??null);r.onerror=()=>reject(r.error);});}
async function ghKvDelete(key){const db=await openGhDB();return new Promise((resolve,reject)=>{const tx=db.transaction(GH_STORE,"readwrite");tx.objectStore(GH_STORE).delete(key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});}
function getGithubConfig(){try{return {...GH_DEFAULT,...JSON.parse(localStorage.getItem("recall_github_config")||"{}")};}catch(_){return {...GH_DEFAULT};}}
function setGithubConfig(c){localStorage.setItem("recall_github_config",JSON.stringify({...GH_DEFAULT,...c}));}
async function getGithubToken(){return await ghKvGet("token");}
async function hasGithubConnection(){return !!(await getGithubToken());}
function ghEncodePath(path){return path.split('/').map(encodeURIComponent).join('/');}
async function githubApi(path,{raw=false}={}){
  const cfg=getGithubConfig(), token=await getGithubToken();
  if(!token) throw new Error("GitHub non collegato");
  const sep=path.includes('?')?'&':'?';
  const url=`https://api.github.com/repos/${encodeURIComponent(cfg.owner)}/${encodeURIComponent(cfg.repo)}/${path}${sep}ref=${encodeURIComponent(cfg.branch||'main')}`;
  const r=await fetch(url,{headers:{Authorization:`Bearer ${token}`,Accept:raw?'application/vnd.github.raw+json':'application/vnd.github+json','X-GitHub-Api-Version':'2026-03-10'},cache:'no-store'});
  if(!r.ok){const t=await r.text().catch(()=>"");throw new Error(`GitHub ${r.status}${t?`: ${t.slice(0,120)}`:""}`);}
  return r;
}
function mimeForPath(path){
  const ext=String(path||'').toLowerCase().split('.').pop();
  return ({
    pdf:'application/pdf',
    png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',
    txt:'text/plain; charset=utf-8',md:'text/markdown; charset=utf-8',rtf:'application/rtf',
    doc:'application/msword',
    docx:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ppt:'application/vnd.ms-powerpoint',
    pptx:'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    xls:'application/vnd.ms-excel',
    xlsx:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })[ext] || 'application/octet-stream';
}
function normalizeBlobMime(blob,path){
  const type=mimeForPath(path);
  if(!blob) return blob;
  if((blob.type||'').toLowerCase()===type.toLowerCase()) return blob;
  return new Blob([blob],{type});
}
async function githubBlob(repoPath){
  const r=await githubApi(`contents/${ghEncodePath(repoPath)}`,{raw:true});
  const bytes=await r.arrayBuffer();
  return new Blob([bytes],{type:mimeForPath(repoPath)});
}
async function githubListDir(repoPath){const r=await githubApi(`contents/${ghEncodePath(repoPath)}`);return await r.json();}
async function githubExistingFile(repoPath){
  try{
    const r=await githubApi(`contents/${ghEncodePath(repoPath)}`);
    return await r.json();
  }catch(e){
    if(String(e.message).includes('404')) return null;
    throw e;
  }
}
function ghSlug(value){
  return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')||'altro';
}
function safeGithubFilename(name){
  return String(name||'file').replace(/[\\/:*?"<>|]/g,'-').replace(/^\.+/,'').trim()||'file';
}
function fileToBase64(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>{const s=String(reader.result||'');resolve(s.includes(',')?s.split(',')[1]:s);};
    reader.onerror=()=>reject(reader.error||new Error('Impossibile leggere il file'));
    reader.readAsDataURL(file);
  });
}
async function githubUploadFile(repoPath,file){
  if(!navigator.onLine) throw new Error('Serve una connessione internet per caricare su GitHub');
  if(!(await hasGithubConnection())) throw new Error('Collega prima GitHub dalle Impostazioni');
  if(file.size>50*1024*1024) throw new Error('Per ora carica file inferiori a 50 MB');
  const cfg=getGithubConfig(), token=await getGithubToken();
  const existing=await githubExistingFile(repoPath);
  if(existing && !confirm(`Esiste già “${file.name}” in questa cartella. Vuoi sostituirlo?`)) throw new Error('Caricamento annullato');
  const content=await fileToBase64(file);
  const body={message:`Recall: ${existing?'aggiorna':'aggiunge'} ${file.name}`,content,branch:cfg.branch||'main'};
  if(existing?.sha) body.sha=existing.sha;
  const url=`https://api.github.com/repos/${encodeURIComponent(cfg.owner)}/${encodeURIComponent(cfg.repo)}/contents/${ghEncodePath(repoPath)}`;
  const r=await fetch(url,{method:'PUT',headers:{Authorization:`Bearer ${token}`,Accept:'application/vnd.github+json','Content-Type':'application/json','X-GitHub-Api-Version':'2026-03-10'},body:JSON.stringify(body)});
  if(!r.ok){
    const t=await r.text().catch(()=>'');
    if(r.status===403) throw new Error('Il token non ha permesso di scrittura. Creane uno con Contents: Read and write.');
    throw new Error(`GitHub ${r.status}${t?`: ${t.slice(0,140)}`:''}`);
  }
  return await r.json();
}
async function githubTest(){
  const cfg=getGithubConfig(), token=await getGithubToken(); if(!token) throw new Error('Inserisci il token');
  const r=await fetch(`https://api.github.com/repos/${encodeURIComponent(cfg.owner)}/${encodeURIComponent(cfg.repo)}`,{headers:{Authorization:`Bearer ${token}`,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2026-03-10'},cache:'no-store'});
  if(!r.ok) throw new Error(`Accesso negato (${r.status})`); return await r.json();
}
function humanSlug(s){const known={'vie-biliari':'Vie biliari','peritoneo-retroperitoneo':'Peritoneo / retroperitoneo','testa-collo':'Testa-collo','muscoloscheletrico':'Muscoloscheletrico','neuroradiologia':'Neuroradiologia','gastrointestinale':'Gastrointestinale','cardiovascolare':'Cardiovascolare','interventistica':'Interventistica'};return known[s]||String(s||'').replace(/[-_]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase());}
const GH_FILE_EXT=/\.(pdf|doc|docx|ppt|pptx|xls|xlsx|txt|md|rtf|png|jpe?g|webp)$/i;
async function githubWalk(root){
  let out=[]; let items=[];
  try{items=await githubListDir(root);}catch(e){if(String(e.message).includes('404'))return out;throw e;}
  if(!Array.isArray(items)) return out;
  for(const it of items){
    if(it.type==='dir') out.push(...await githubWalk(it.path));
    else if(it.type==='file' && GH_FILE_EXT.test(it.name)) out.push(it);
  }
  return out;
}
function titleFromFilename(name){return name.replace(/\.[^.]+$/,'').replace(/_/g,' ').replace(/\s+/g,' ').trim();}
async function syncGithubLibrary({silent=false}={}){
  if(!navigator.onLine || !(await hasGithubConnection())) return false;
  try{
    const [archiveFiles,studyFiles]=await Promise.all([githubWalk('library/archivio'),githubWalk('library/studi')]);
    const mapPaths=new Set(state.maps.map(m=>m.pdfPath).filter(Boolean));
    state.documents=(state.documents||[]).filter(d=>d.storage!=='github');
    for(const f of archiveFiles){
      if(mapPaths.has(f.path)) continue;
      const p=f.path.split('/'), area=humanSlug(p[2]||'Altro'), organ=humanSlug(p[3]||'Altro');
      const sub=p.slice(4,-1); const category=sub.length?sub.map(humanSlug).join(' › '):'Generale';
      state.documents.push({id:`gh_${f.sha}`,title:titleFromFilename(f.name),filename:f.name,collection:'archivio',area,organ,category:'Generale',tags:[organ],storage:'github',path:f.path,githubSha:f.sha});
    }
    for(const f of studyFiles){
      const p=f.path.split('/'), sub=p.slice(2,-1);
      state.documents.push({id:`gh_${f.sha}`,title:titleFromFilename(f.name),filename:f.name,collection:'studi',project:sub.length?sub.map(humanSlug).join(' › '):'Studi',storage:'github',path:f.path,githubSha:f.sha});
    }
    save(); githubLibrarySynced=true; if(!silent) toast(`Archivio sincronizzato: ${archiveFiles.length+studyFiles.length} file`); return true;
  }catch(e){console.error(e);if(!silent)toast(`GitHub: ${e.message}`);return false;}
}
function openBlobTab(blob,path=''){const safe=normalizeBlobMime(blob,path);const url=URL.createObjectURL(safe);const w=window.open(url,'_blank');if(!w)toast('Consenti l’apertura delle finestre');setTimeout(()=>URL.revokeObjectURL(url),120000);}
function githubTokenUrl(){const cfg=getGithubConfig();return `https://github.com/settings/personal-access-tokens/new?name=Recall%20Read%20Write&description=Recall%20puo%20leggere%20e%20caricare%20file%20nel%20solo%20repository%20selezionato&target_name=${encodeURIComponent(cfg.owner)}&expires_in=366&contents=write`; }
async function saveGithubSettings(){
  const owner=document.getElementById('ghOwner')?.value.trim(), repo=document.getElementById('ghRepo')?.value.trim(), branch=document.getElementById('ghBranch')?.value.trim()||'main', token=document.getElementById('ghToken')?.value.trim();
  if(!owner||!repo){toast('Inserisci owner e repository');return;}
  setGithubConfig({owner,repo,branch}); if(token) await ghKvPut('token',token);
  try{await githubTest();toast('GitHub collegato');await updateGithubSettingsUI();await syncGithubLibrary();renderHome();}catch(e){toast(e.message);await updateGithubSettingsUI();}
}
async function forgetGithub(){if(!confirm('Rimuovere il collegamento GitHub da questo dispositivo?'))return;await ghKvDelete('token');githubLibrarySynced=false;await updateGithubSettingsUI();toast('Collegamento rimosso');}
async function updateGithubSettingsUI(){
  const cfg=getGithubConfig(), connected=await hasGithubConnection();
  const o=document.getElementById('ghOwner'),r=document.getElementById('ghRepo'),b=document.getElementById('ghBranch'),s=document.getElementById('ghConnectionStatus');
  if(o)o.value=cfg.owner;if(r)r.value=cfg.repo;if(b)b.value=cfg.branch||'main';
  if(s){s.textContent=connected?`✓ Collegato a ${cfg.owner}/${cfg.repo}`:'Non collegato';s.className=`badge ${connected?'good':'mid'}`;}
  const token=document.getElementById('ghToken');if(token)token.value='';
}

// PDF library: actual file bytes are kept in IndexedDB so they survive page reloads.
const PDF_DB="recall_pdf_library", PDF_STORE="pdfs";
function openPdfDB(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open(PDF_DB,1);
    req.onupgradeneeded=()=>{ if(!req.result.objectStoreNames.contains(PDF_STORE)) req.result.createObjectStore(PDF_STORE); };
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}
async function storePdf(mapId,file){
  const db=await openPdfDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction(PDF_STORE,"readwrite");
    tx.objectStore(PDF_STORE).put(file,mapId);
    tx.oncomplete=()=>resolve();
    tx.onerror=()=>reject(tx.error);
  });
}
async function getPdf(mapId){
  const db=await openPdfDB();
  return new Promise((resolve,reject)=>{
    const req=db.transaction(PDF_STORE,"readonly").objectStore(PDF_STORE).get(mapId);
    req.onsuccess=()=>resolve(req.result||null);
    req.onerror=()=>reject(req.error);
  });
}
async function deletePdf(mapId){
  const db=await openPdfDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction(PDF_STORE,"readwrite");
    tx.objectStore(PDF_STORE).delete(mapId);
    tx.oncomplete=()=>resolve();
    tx.onerror=()=>reject(tx.error);
  });
}
async function openPdfForMap(mapId){
  const map=state.maps.find(m=>m.id===mapId); if(!map){toast("Mappa non trovata");return}
  try{
    if((map.pdfMode==="github" || (map.pdfPath||'').startsWith('library/')) && map.pdfPath){
      let blob=await getPdf(mapId);
      if(!blob){if(!navigator.onLine){toast("Documento non scaricato offline");return;}blob=await githubBlob(map.pdfPath);await storePdf(mapId,blob);}
      openBlobTab(blob,map.pdfPath); return;
    }
    const blob=await getPdf(mapId); if(!blob){toast("PDF non presente su questo dispositivo");return} openBlobTab(blob,map.pdfPath);
  }catch(e){console.error(e);toast(`Impossibile aprire: ${e.message||'errore'}`);}
}


const FILE_DB="recall_general_library", FILE_STORE="files";
function openFileDB(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open(FILE_DB,1);
    req.onupgradeneeded=()=>{ if(!req.result.objectStoreNames.contains(FILE_STORE)) req.result.createObjectStore(FILE_STORE); };
    req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error);
  });
}
async function storeGeneralFile(id,file){
  const db=await openFileDB();
  return new Promise((resolve,reject)=>{const tx=db.transaction(FILE_STORE,"readwrite");tx.objectStore(FILE_STORE).put(file,id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);});
}
async function getGeneralFile(id){
  const db=await openFileDB();
  return new Promise((resolve,reject)=>{const req=db.transaction(FILE_STORE,"readonly").objectStore(FILE_STORE).get(id);req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error);});
}
async function deleteGeneralFile(id){
  const db=await openFileDB();
  return new Promise((resolve,reject)=>{const tx=db.transaction(FILE_STORE,"readwrite");tx.objectStore(FILE_STORE).delete(id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});
}
async function openGeneralFile(id){
  const doc=state.documents.find(d=>d.id===id); if(!doc){toast("Documento non trovato");return;}
  try{
    if(doc.storage==="github" && doc.path){let blob=await getGeneralFile(id);if(!blob){if(!navigator.onLine){toast('Documento non scaricato offline');return;}blob=await githubBlob(doc.path);await storeGeneralFile(id,blob);}openBlobTab(blob,doc.path);return;}
    const blob=await getGeneralFile(id); if(!blob){toast("File non disponibile in questo dispositivo");return;} openBlobTab(blob,doc.filename||doc.path||'');
  }catch(e){console.error(e);toast(`Impossibile aprire: ${e.message||'errore'}`);}
}


function save(){ localStorage.setItem("recall_state", JSON.stringify(state)); }

// Recall v1.8 — PWA / offline manager
const RECALL_VERSION="1.10.1";
const OFFLINE_DOC_CACHE="recall-docs-v1101";
const OFFLINE_CASE_CACHE="recall-cases-v1101";
let deferredInstallPrompt=null;

function absUrl(path){ return new URL(path,window.location.href).href; }
function isIOS(){ return /iphone|ipad|ipod/i.test(navigator.userAgent); }
function isStandalone(){ return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone===true; }
async function cacheMatchAny(url){
  if(!('caches' in window)) return null;
  const absolute=absUrl(url);
  for(const name of await caches.keys()){
    const cache=await caches.open(name);
    const hit=await cache.match(absolute) || await cache.match(url);
    if(hit) return hit;
  }
  return null;
}
async function isOfflineReady(url){ return !!(await cacheMatchAny(url)); }
async function cacheUrlForOffline(url,cacheName=OFFLINE_DOC_CACHE){
  if(!('caches' in window)) throw new Error('Cache Storage non disponibile');
  const absolute=absUrl(url);
  const response=await fetch(absolute,{cache:'reload'});
  if(!response.ok) throw new Error(`HTTP ${response.status}`);
  const cache=await caches.open(cacheName);
  await cache.put(absolute,response.clone());
  return true;
}
async function removeCachedUrl(url){
  if(!('caches' in window)) return;
  const absolute=absUrl(url);
  for(const name of await caches.keys()){
    if(name===OFFLINE_DOC_CACHE){ const c=await caches.open(name); await c.delete(absolute); await c.delete(url); }
  }
}
function githubPathForMaterial(kind,id){
  if(kind==='map'){const m=state.maps.find(x=>x.id===id);return m?.pdfPath||null;}
  const d=state.documents.find(x=>x.id===id);return d?.storage==='github'?d.path:null;
}
async function materialOfflineBlob(kind,id){return kind==='map'?await getPdf(id):await getGeneralFile(id);}
async function toggleMaterialOffline(btn){
  const kind=btn.dataset.kind,id=btn.dataset.offlineMaterial,path=githubPathForMaterial(kind,id); if(!path)return;
  btn.disabled=true;btn.classList.add('loading');
  try{
    const existing=await materialOfflineBlob(kind,id);
    if(existing){kind==='map'?await deletePdf(id):await deleteGeneralFile(id);toast('Rimosso dal dispositivo');}
    else{if(!navigator.onLine){toast('Serve internet per il primo download');return;}btn.textContent='Scaricamento…';const blob=await githubBlob(path);kind==='map'?await storePdf(id,blob):await storeGeneralFile(id,blob);toast('Disponibile offline');}
  }catch(e){console.error(e);toast(`Download non riuscito: ${e.message||'errore'}`);}finally{btn.disabled=false;btn.classList.remove('loading');await refreshOfflineButtons(document);}
}
async function refreshOfflineButtons(scope=document){
  const buttons=[...scope.querySelectorAll('[data-offline-material]')];
  await Promise.all(buttons.map(async btn=>{const ready=!!(await materialOfflineBlob(btn.dataset.kind,btn.dataset.offlineMaterial));btn.textContent=ready?'✓ Offline':'↓ Scarica offline';btn.classList.toggle('ready',ready);btn.title=ready?'Già disponibile senza internet. Clicca per rimuoverlo.':'Scarica sul dispositivo';}));
}
function uniqueCaseImages(){ return [...new Set(reportCases.flatMap(c=>c.images||[]))]; }
async function getCaseBlob(path){return await getGeneralFile(`case:${path}`);}
async function ensureCaseBlob(path,{store=true}={}){let blob=await getCaseBlob(path);if(blob)return blob;if(!navigator.onLine)throw new Error('Immagine non disponibile offline');blob=await githubBlob(path);if(store)await storeGeneralFile(`case:${path}`,blob);return blob;}
async function updateCaseOfflineStatus(){
  const label=document.getElementById('caseOfflineStatus'),badge=document.getElementById('caseOfflineBadge');if(!label||!badge)return;
  const imgs=uniqueCaseImages();let ready=0;for(const p of imgs)if(await getCaseBlob(p))ready++;
  label.textContent=`${ready} di ${imgs.length} immagini disponibili offline`;badge.textContent=ready===imgs.length&&imgs.length?'Completo':`${ready}/${imgs.length}`;badge.className=`badge ${ready===imgs.length&&imgs.length?'good':'mid'}`;
}
async function downloadAllCaseImagesOffline(){
  const btn=document.getElementById('downloadCasesOfflineBtn'),imgs=uniqueCaseImages();if(!navigator.onLine){toast('Serve internet per scaricare le immagini');return;}btn.disabled=true;
  try{let done=0;for(const p of imgs){await ensureCaseBlob(p,{store:true});done++;btn.textContent=`Scaricamento ${done}/${imgs.length}`;}toast('Casi con immagini disponibili offline');}catch(e){console.error(e);toast(`Download interrotto: ${e.message}`);}finally{btn.disabled=false;btn.textContent='Scarica immagini dei casi';await updateCaseOfflineStatus();}
}
async function clearCaseImagesOffline(){for(const p of uniqueCaseImages())await deleteGeneralFile(`case:${p}`);toast('Immagini offline rimosse');await updateCaseOfflineStatus();}
async function loadPrivateCaseImage(img,path){try{const blob=await ensureCaseBlob(path,{store:true});const url=URL.createObjectURL(blob);img.src=url;img.onload=()=>setTimeout(()=>URL.revokeObjectURL(url),60000);}catch(e){img.alt='Immagine non disponibile offline';img.classList.add('image-unavailable');}}
function updateConnectionUI(){
  const online=navigator.onLine;
  const pill=document.getElementById('connectionPill');
  if(pill){pill.textContent=online?'● Online':'● Offline';pill.classList.toggle('offline',!online);}
  const badge=document.getElementById('offlineStatusBadge'), text=document.getElementById('offlineStatusText'), card=document.querySelector('.offline-card');
  if(badge){badge.textContent=online?'Online':'Offline';badge.className=`badge ${online?'good':'mid'}`;}
  if(text) text.textContent=online?'Connesso: Recall può controllare aggiornamenti e scaricare nuovi materiali.':'Senza rete: stai usando la copia salvata su questo dispositivo.';
  card?.classList.toggle('is-offline',!online);
}
function updateInstallUI(){
  const btn=document.getElementById('installAppBtn'), help=document.getElementById('installHelpText'); if(!btn||!help)return;
  if(isStandalone()){btn.textContent='✓ Recall è installato';btn.disabled=true;help.textContent='Si apre dalla schermata Home e può funzionare offline.';return;}
  btn.disabled=false;
  if(isIOS()) help.textContent='Su iPhone/iPad: Safari → Condividi → Aggiungi alla schermata Home.';
  else if(deferredInstallPrompt) help.textContent='Installazione disponibile su questo dispositivo.';
  else help.textContent='Se il pulsante non apre l’installazione, usa il menu del browser → Installa app / Aggiungi alla schermata Home.';
}
async function triggerInstall(){
  if(isStandalone()){toast('Recall è già installato');return;}
  if(deferredInstallPrompt){deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;updateInstallUI();return;}
  if(isIOS()) toast('Safari: Condividi → Aggiungi alla schermata Home'); else toast('Usa il menu del browser → Installa app');
}
async function registerRecallServiceWorker(){
  if(!('serviceWorker' in navigator)) return;
  try{
    const reg=await navigator.serviceWorker.register('sw.js');
    if(navigator.onLine) reg.update().catch(()=>{});
  }catch(e){console.warn('Service worker non registrato',e);}
}
function initOfflineFeatures(){
  updateConnectionUI(); updateInstallUI(); updateCaseOfflineStatus();
  window.addEventListener('online',()=>{updateConnectionUI();if('serviceWorker' in navigator) navigator.serviceWorker.getRegistration().then(r=>r?.update?.()).catch(()=>{});});
  window.addEventListener('offline',updateConnectionUI);
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;updateInstallUI();});
  window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;updateInstallUI();toast('Recall installato');});
  document.getElementById('installAppBtn')?.addEventListener('click',triggerInstall);
  document.getElementById('downloadCasesOfflineBtn')?.addEventListener('click',downloadAllCaseImagesOffline);
  document.getElementById('clearCasesOfflineBtn')?.addEventListener('click',clearCaseImagesOffline);
  document.getElementById('openArchiveSettingsBtn')?.addEventListener('click',()=>{openLibrary();openArchiveRoot();});
  registerRecallServiceWorker();
}

function allUnits(){ return state.maps.flatMap(m=>m.units.map(u=>({...u,mapId:m.id,mapTitle:m.title}))); }
function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".navitem").forEach(n=>n.classList.remove("active"));
  if(id==="homeView") document.querySelector('[data-view="homeView"]').classList.add("active");
  if(id==="libraryView") document.getElementById("navLibrary")?.classList.add("active");
  if(id==="reportView" || id==="reportBrowseView" || id==="imageReportGeneratorView" || id==="reportCaseView") document.getElementById("navReports")?.classList.add("active");
  renderHome();
}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}

function renderHome(){
  document.getElementById("todayLabel").textContent = new Intl.DateTimeFormat("it-IT",{weekday:"long",day:"numeric",month:"long"}).format(new Date());
  const units=allUnits(), due=units.filter(u=>u.due<=todayISO()), weak=units.filter(u=>u.mastery<55);
  document.getElementById("dueCount").textContent=due.length;
  document.getElementById("weakCount").textContent=weak.length;
  document.getElementById("mapsCount").textContent=state.maps.length;
  const reportBadge=document.getElementById("reportCountBadge"); if(reportBadge) reportBadge.textContent = `${reportCases.length} casi pronti`;
  document.getElementById("dueSubtitle").textContent = due.length ? `${due.length} unità pronte per il recupero attivo.` : "Nessun ripasso urgente. Puoi fare una sessione di mantenimento.";

  const maps=document.getElementById("mapsList");maps.innerHTML="";
  state.maps.forEach(m=>{
    const avg=m.units.length?Math.round(m.units.reduce((s,u)=>s+u.mastery,0)/m.units.length):0;
    const dueN=m.units.filter(u=>u.due<=todayISO()).length;
    const row=document.createElement("div");row.className="card map-row";
    row.innerHTML=`<div class="meta"><div class="map-title">${m.title}</div><div class="muted small">${m.units.length} unità · ${dueN} da ripassare</div><div class="bar"><span style="width:${avg}%"></span></div></div><span class="badge ${avg<55?'weak':avg<75?'mid':'good'}">${avg}%</span>`;
    row.onclick=()=>openMap(m.id); maps.appendChild(row);
  });

  const wl=document.getElementById("weakList");wl.innerHTML="";
  weak.sort((a,b)=>a.mastery-b.mastery).slice(0,6).forEach(u=>{
    const r=document.createElement("div");r.className="card weak-row";
    r.innerHTML=`<div class="meta"><div class="map-title">${u.title}</div><div class="muted small">${u.mapTitle}</div></div><span class="badge weak">${u.mastery}%</span>`;
    wl.appendChild(r);
  });
  if(!weak.length) wl.innerHTML=`<div class="card muted">Nessun punto debole evidente.</div>`;
}



let archiveNav={area:null,organ:null};

function archiveMaterials(){
  const maps=state.maps.map(m=>{
    const meta=bundledArchiveMeta[m.id]||{area:m.area||"Altro",organ:m.organ||m.title};
    return {id:m.id,title:m.title,area:meta.area,organ:meta.organ,filename:m.source||"PDF",kind:"map",map:m};
  });
  const docs=(state.documents||[]).filter(d=>d.collection==="archivio").map(d=>({...d,kind:"document"}));
  return [...maps,...docs];
}
function studyMaterials(){ return (state.documents||[]).filter(d=>d.collection==="studi"); }
function setLibraryMode(mode){
  document.getElementById("libraryModeArchive")?.classList.toggle("active",mode==="archivio");
  document.getElementById("libraryModeStudies")?.classList.toggle("active",mode==="studi");
}
function libraryRoot(){ openArchiveRoot(); }
function openArchiveRoot(){
  archiveNav={area:null,organ:null};
  document.getElementById("libraryTitle").textContent="Archivio";
  document.getElementById("libraryLanding")?.setAttribute("hidden","");
  document.getElementById("studiesExplorer").hidden=true;
  document.getElementById("archiveExplorer").hidden=false;
  setLibraryMode("archivio");
  const s=document.getElementById("librarySearch"); s.value=""; s.oninput=()=>renderArchive();
  renderArchive();
}
function openStudies(){
  document.getElementById("libraryTitle").textContent="Studi";
  document.getElementById("libraryLanding")?.setAttribute("hidden","");
  document.getElementById("archiveExplorer").hidden=true;
  document.getElementById("studiesExplorer").hidden=false;
  setLibraryMode("studi");
  renderStudies();
}
function archiveAreas(){
  const all=new Set(Object.keys(archiveTaxonomy)); archiveMaterials().forEach(m=>all.add(m.area||"Altro")); return [...all];
}
function archiveOrgans(area){
  const all=new Set(Object.keys(archiveTaxonomy[area]||{})); archiveMaterials().filter(m=>m.area===area).forEach(m=>all.add(m.organ||"Altro")); return [...all];
}
function materialCount(filter){
  return archiveMaterials().filter(m=>(!filter.area||m.area===filter.area)&&(!filter.organ||m.organ===filter.organ)).length;
}
function escapeHTML(s){ return String(s??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function renderBreadcrumb(){
  const b=document.getElementById("archiveBreadcrumb");
  let html=`<button class="crumb" data-level="archive">Archivio</button>`;
  if(archiveNav.area) html+=`<span>›</span><button class="crumb" data-level="area">${escapeHTML(archiveNav.area)}</button>`;
  if(archiveNav.organ) html+=`<span>›</span><span>${escapeHTML(archiveNav.organ)}</span>`;
  b.innerHTML=html;
  b.querySelectorAll('[data-level="archive"]').forEach(x=>x.onclick=()=>{archiveNav={area:null,organ:null};renderArchive();});
  b.querySelectorAll('[data-level="area"]').forEach(x=>x.onclick=()=>{archiveNav.organ=null;renderArchive();});
}
function fileTypeLabel(filename){
  const ext=String(filename||'').split('.').pop().toUpperCase();
  return ext && ext!==String(filename||'').toUpperCase()?ext:'Documento';
}
function renderMaterialRows(materials){
  if(!materials.length) return `<div class="card archive-empty"><b>Nessun file ancora</b><div class="muted small">Aggiungilo con “+ Materiale”.</div></div>`;
  const sorted=[...materials].sort((a,b)=>String(a.title||'').localeCompare(String(b.title||''),'it'));
  return `<div class="stack">${sorted.map(m=>{
    const remote=(m.kind==="map" && m.map?.pdfPath) || (m.kind==="document" && m.storage==="github" && m.path);
    const local=(m.kind==="document" && m.storage==="indexeddb");
    const offlineControl=remote?`<button class="offline-toggle" data-offline-material="${escapeHTML(m.id)}" data-kind="${m.kind}">Controllo…</button>`:(local?`<span class="device-badge">✓ Sul dispositivo</span>`:"");
    const filename=m.filename||m.source||"Documento";
    return `<div class="card archive-material" data-kind="${m.kind}" data-id="${escapeHTML(m.id)}"><div class="map-main"><div class="map-title file-title">${escapeHTML(m.title||titleFromFilename(filename))}</div><div class="muted file-meta">${escapeHTML(fileTypeLabel(filename))}</div></div><div class="offline-actions">${offlineControl}<button class="open-pdf" data-open-material="${escapeHTML(m.id)}" data-kind="${m.kind}">Apri</button></div></div>`;
  }).join("")}</div>`;
}
function wireMaterialRows(body){
  body.querySelectorAll('[data-open-material]').forEach(btn=>btn.onclick=e=>{e.stopPropagation();btn.dataset.kind==="map"?openPdfForMap(btn.dataset.openMaterial):openGeneralFile(btn.dataset.openMaterial);});
  body.querySelectorAll('[data-offline-material]').forEach(btn=>btn.onclick=e=>{e.stopPropagation();toggleMaterialOffline(btn);});
  body.querySelectorAll('.archive-material[data-kind="map"]').forEach(el=>el.onclick=e=>{if(e.target.closest('button'))return;openMap(el.dataset.id);});
  refreshOfflineButtons(body);
}
function renderNodeList(items,kind){
  return `<div class="archive-list">${items.map(item=>{
    const count=kind==="area"?materialCount({area:item}):materialCount({area:archiveNav.area,organ:item});
    const noun=count===1?'file':'file';
    const attr=kind==="area"?`data-area="${escapeHTML(item)}"`:`data-organ="${escapeHTML(item)}"`;
    return `<button class="archive-list-row" ${attr}><div class="archive-list-main"><div class="archive-list-title">${escapeHTML(item)}</div><div class="archive-list-meta">${count} ${noun}</div></div><span class="archive-list-arrow">›</span></button>`;
  }).join("")}</div>`;
}
function renderArchive(){
  renderBreadcrumb(); const body=document.getElementById("archiveBody"); const q=norm(document.getElementById("librarySearch")?.value||"");
  if(q){
    const found=archiveMaterials().filter(m=>norm([m.title,m.filename,m.area,m.organ].join(" ")).includes(q));
    body.innerHTML=`<div class="archive-section-title">Risultati</div>${renderMaterialRows(found)}`; wireMaterialRows(body); return;
  }
  if(!archiveNav.area){
    body.innerHTML=`<div class="archive-section-title">Scegli il distretto</div>${renderNodeList(archiveAreas(),"area")}`;
    body.querySelectorAll('[data-area]').forEach(x=>x.onclick=()=>{archiveNav.area=x.dataset.area;renderArchive();}); return;
  }
  if(!archiveNav.organ){
    const organs=archiveOrgans(archiveNav.area);
    body.innerHTML=`<div class="archive-section-title">${escapeHTML(archiveNav.area)}</div>${renderNodeList(organs,"organ")}`;
    body.querySelectorAll('[data-organ]').forEach(x=>x.onclick=()=>{archiveNav.organ=x.dataset.organ;renderArchive();}); return;
  }
  const mats=archiveMaterials().filter(m=>m.area===archiveNav.area&&m.organ===archiveNav.organ);
  body.innerHTML=`<div class="archive-section-title">${escapeHTML(archiveNav.organ)}</div>${renderMaterialRows(mats)}`; wireMaterialRows(body);
}
function renderStudies(){
  const box=document.getElementById("studiesList"); const docs=studyMaterials();
  if(!docs.length){box.innerHTML=`<div class="card archive-empty"><b>Nessuno studio inserito</b><div class="muted small">Qui resteranno separati tesi, revisioni, protocolli e progetti scientifici.</div></div>`;return;}
  box.innerHTML=docs.map(d=>`<div class="card archive-material"><div class="map-main"><div class="map-title">${escapeHTML(d.title)}</div><div class="muted small">${escapeHTML(d.project||d.filename||"")}</div></div><div class="offline-actions">${d.storage==="indexeddb"?'<span class="device-badge">✓ Sul dispositivo</span>':''}<button class="open-pdf" data-open-study="${d.id}">Apri</button></div></div>`).join("");
  box.querySelectorAll('[data-open-study]').forEach(b=>b.onclick=()=>openGeneralFile(b.dataset.openStudy));
}
function openLibrary(){ showView("libraryView"); openArchiveRoot(); if(!githubLibrarySynced && navigator.onLine) syncGithubLibrary({silent:true}).then(ok=>{if(ok && document.getElementById("libraryView").classList.contains("active")) renderArchive();}); }


function availableCases(filters={}){
  return reportCases.filter(c=>{
    if(filters.sourceType && c.sourceType!==filters.sourceType) return false;
    if(filters.modalityCode && c.modalityCode!==filters.modalityCode) return false;
    if(filters.region && c.region!==filters.region) return false;
    if(filters.topic && c.topic!==filters.topic) return false;
    if(filters.mapId && c.mapId!==filters.mapId) return false;
    if(filters.hasImages===true && !(c.images && c.images.length)) return false;
    if(filters.hasImages===false && c.images && c.images.length) return false;
    return true;
  });
}

function randomReportCase(filters={}){
  const pool=availableCases(filters);
  if(!pool.length){ toast("Nessun caso disponibile con questi filtri"); return; }
  const c=pool[Math.floor(Math.random()*pool.length)];
  openReportCase(c.id);
}

function openReportHome(){
  showView("reportView");
  renderReportHub();
}

function renderReportHub(){
  const hub=document.getElementById("reportHub");
  const mapCases=availableCases({sourceType:"map"}).length;
  const outsideCases=availableCases({sourceType:"outside"}).length;
  const tcMapCases=availableCases({sourceType:"map",modalityCode:"TC"}).length;
  const rmMapCases=availableCases({sourceType:"map",modalityCode:"RM"}).length;
  const imageMapCases=availableCases({sourceType:"map",hasImages:true}).length;

  hub.innerHTML=`
    <div class="report-hub-grid">
      <div class="card report-hub-card" id="hubRandom">
        <div>
          <div class="report-hub-icon">⤨</div>
          <h3>Refertazione random</h3>
          <p class="muted small">Caso casuale solo dagli argomenti presenti nelle tue mappe.</p>
        </div>
        <span class="badge good">${mapCases} casi</span>
      </div>

      <div class="card report-hub-card" id="hubTC">
        <div>
          <div class="report-hub-icon">TC</div>
          <h3>TC</h3>
          <p class="muted small">Scegli distretto e argomento dalle tue mappe.</p>
        </div>
        <span class="badge mid">${tcMapCases} casi</span>
      </div>

      <div class="card report-hub-card" id="hubRM">
        <div>
          <div class="report-hub-icon">RM</div>
          <h3>RM</h3>
          <p class="muted small">Scegli distretto e argomento dalle tue mappe.</p>
        </div>
        <span class="badge mid">${rmMapCases} casi</span>
      </div>

      <div class="card report-hub-card" id="hubImages">
        <div>
          <div class="report-hub-icon">▧</div>
          <h3>Referta con immagini</h3>
          <p class="muted small">Parte 2: immagini sintetiche + referto.</p>
        </div>
        <span class="badge good">${imageMapCases} casi</span>
      </div>

      <div class="card report-hub-card report-hub-wide" id="hubOutside">
        <div>
          <div class="report-hub-icon">＋</div>
          <h3>Argomenti non trattati nelle mappe</h3>
          <p class="muted small">Solo contenuti extra, separati dalle tue mappe.</p>
        </div>
        <span class="badge mid">${outsideCases} casi</span>
      </div>
    </div>
  `;

  document.getElementById("hubRandom").onclick=()=>randomReportCase({sourceType:"map"});
  document.getElementById("hubTC").onclick=()=>openReportBrowser({sourceType:"map",modalityCode:"TC"});
  document.getElementById("hubRM").onclick=()=>openReportBrowser({sourceType:"map",modalityCode:"RM"});
  document.getElementById("hubImages").onclick=openImageReportGenerator;
  document.getElementById("hubOutside").onclick=()=>openReportBrowser({sourceType:"outside"});
}

function openReportBrowser(filters={}){
  window.reportBrowserFilters={...filters};
  showView("reportBrowseView");
  renderReportBrowser();
}

function renderReportBrowser(){
  const f=window.reportBrowserFilters||{};
  const titleParts=[];
  if(f.modalityCode) titleParts.push(f.modalityCode);
  if(f.region) titleParts.push(f.region);
  if(f.hasImages===true) titleParts.push("Con immagini");
  if(f.hasImages===false) titleParts.push("Solo testuali");
  if(f.sourceType==="map") titleParts.push("Dalle mie mappe");
  if(f.sourceType==="outside") titleParts.push("Non trattati nelle mappe");
  document.getElementById("reportBrowseTitle").textContent=titleParts.join(" · ") || "Scegli il caso";
  document.getElementById("reportBrowseEyebrow").textContent="REFERTAZIONE";

  const controls=document.getElementById("reportBrowseControls");

  const modalities=["TC","RM"];
  const modalityHtml=modalities.map(m=>`<button class="report-filter ${f.modalityCode===m?'active':''}" data-mod="${m}">${m}</button>`).join("");
  const regionsHtml=reportRegions.map(r=>`<button class="report-filter ${f.region===r?'active':''}" data-region="${r}">${r}</button>`).join("");

  controls.innerHTML=`
    <div>
      <div class="label">Metodica</div>
      <div class="report-filter-row">
        <button class="report-filter ${!f.modalityCode?'active':''}" data-mod="">Tutte</button>
        ${modalityHtml}
      </div>
    </div>
    <div>
      <div class="label">Distretto</div>
      <div class="report-filter-row">
        <button class="report-filter ${!f.region?'active':''}" data-region="">Tutti</button>
        ${regionsHtml}
      </div>
    </div>
    <div>
      <div class="label">Formato</div>
      <div class="report-filter-row">
        <button class="report-filter ${typeof f.hasImages==="undefined"?'active':''}" data-format="all">Tutti</button>
        <button class="report-filter ${f.hasImages===false?'active':''}" data-format="text">Testuali</button>
        <button class="report-filter ${f.hasImages===true?'active':''}" data-format="image">Con immagini</button>
      </div>
    </div>
  `;

  controls.querySelectorAll("[data-mod]").forEach(btn=>btn.onclick=()=>{
    window.reportBrowserFilters.modalityCode=btn.dataset.mod||undefined;
    renderReportBrowser();
  });
  controls.querySelectorAll("[data-region]").forEach(btn=>btn.onclick=()=>{
    window.reportBrowserFilters.region=btn.dataset.region||undefined;
    renderReportBrowser();
  });
  controls.querySelectorAll("[data-format]").forEach(btn=>btn.onclick=()=>{
    if(btn.dataset.format==="all") window.reportBrowserFilters.hasImages=undefined;
    if(btn.dataset.format==="text") window.reportBrowserFilters.hasImages=false;
    if(btn.dataset.format==="image") window.reportBrowserFilters.hasImages=true;
    renderReportBrowser();
  });

  renderReportTopicAndCases();
}

function renderReportTopicAndCases(){
  const f=window.reportBrowserFilters||{};
  const list=document.getElementById("reportCaseList");
  list.innerHTML="";

  // Catalogo argomenti: mostra anche quelli presenti nella mappa ma senza caso pronto
  let topics=reportTopicCatalog.filter(t=>{
    if(f.sourceType && t.sourceType!==f.sourceType) return false;
    if(f.modalityCode && t.modality!==f.modalityCode) return false;
    if(f.region && t.region!==f.region) return false;
    return true;
  });

  const uniqueTopics=[];
  const seen=new Set();
  topics.forEach(t=>{
    const key=[t.sourceType,t.mapId||"",t.modality,t.region,t.topic].join("|");
    if(!seen.has(key)){seen.add(key);uniqueTopics.push(t);}
  });

  if(uniqueTopics.length){
    const title=document.createElement("h3");
    title.className="report-section-title";
    title.textContent=f.sourceType==="outside" ? "Argomenti fuori mappa" : "Argomenti disponibili";
    list.appendChild(title);

    const grid=document.createElement("div");
    grid.className="report-topic-list";
    uniqueTopics.forEach(t=>{
      const cases=availableCases({
        sourceType:t.sourceType,
        modalityCode:t.modality,
        region:t.region,
        topic:t.topic,
        mapId:t.mapId,
        hasImages:f.hasImages
      });
      const row=document.createElement("div");
      row.className=`report-topic-row ${cases.length?'':'disabled'}`;
      row.innerHTML=`
        <div class="topic-name">${t.topic}</div>
        <div class="topic-meta">${t.modality} · ${t.region}${t.mapName?' · '+t.mapName:''}</div>
        <div class="case-tags">
          <span class="badge ${cases.length?'good':'mid'}">${cases.length?cases.length+' caso'+(cases.length>1?'i':''):'caso da aggiungere'}</span>
        </div>
      `;
      if(cases.length) row.onclick=()=>{
        window.reportBrowserFilters={
          sourceType:t.sourceType,
          modalityCode:t.modality,
          region:t.region,
          topic:t.topic,
          mapId:t.mapId
        };
        renderReportBrowser();
      };
      grid.appendChild(row);
    });
    list.appendChild(grid);
  }

  const cases=availableCases(f);
  const casesTitle=document.createElement("h3");
  casesTitle.className="report-section-title";
  casesTitle.textContent="Casi pronti";
  list.appendChild(casesTitle);

  if(!cases.length){
    const empty=document.createElement("div");
    empty.className="card report-empty";
    empty.innerHTML=`<div class="map-title">Nessun caso pronto con questi filtri</div><p class="muted small">La struttura del distretto rimane comunque disponibile: aggiungeremo qui i casi man mano che inseriamo nuove mappe o nuovi argomenti fuori mappa.</p>`;
    list.appendChild(empty);
    return;
  }

  cases.forEach(c=>{
    const card=document.createElement("div");
    card.className="card report-card";
    const imgInfo=c.images?.length?`${c.images.length} immagini sintetiche`:"caso descrittivo";
    card.innerHTML=`
      <div class="report-top-grid">
        <div>
          <div class="case-level">LIVELLO ${c.level}</div>
          <div class="map-title">${c.title}</div>
          <div class="muted small">${c.modality}</div>
          <div class="report-case-source ${c.sourceType}">${c.sourceLabel}</div>
          <div class="case-tags">
            <span class="tag">${c.modalityCode}</span>
            <span class="tag">${c.region}</span>
            <span class="tag">${c.topic}</span>
            <span class="tag">${imgInfo}</span>
            <span class="tag">${c.images?.length ? 'con immagini' : 'testuale'}</span>
          </div>
        </div>
        <span class="badge ${c.level===1?'mid':'good'}">L${c.level}</span>
      </div>
      <p class="muted small" style="margin-top:10px">${c.clinical}</p>
      <div class="actions">
        <button class="primary" data-report-open="${c.id}">Apri caso</button>
      </div>
    `;
    card.querySelector("[data-report-open]").onclick=()=>openReportCase(c.id);
    list.appendChild(card);
  });
}


function openImageReportGenerator(){
  showView("imageReportGeneratorView");
  populateImageGeneratorTopics();
}

function populateImageGeneratorTopics(){
  const modality=document.getElementById("imageGenModality")?.value||"";
  const region=document.getElementById("imageGenRegion")?.value||"";
  const select=document.getElementById("imageGenTopic");
  if(!select) return;

  const topics=Array.from(new Set(
    reportCases
      .filter(c=>c.sourceType==="map" && c.images?.length)
      .filter(c=>!modality || c.modalityCode===modality)
      .filter(c=>!region || c.region===region)
      .map(c=>c.topic)
  )).sort();

  select.innerHTML='<option value="">Qualsiasi argomento disponibile</option>'+
    topics.map(t=>`<option value="${t}">${t}</option>`).join("");
}

function generateImageTrainingCase(forceRandom=false){
  const modality=forceRandom ? "" : (document.getElementById("imageGenModality")?.value||"");
  const region=forceRandom ? "" : (document.getElementById("imageGenRegion")?.value||"");
  const topic=forceRandom ? "" : (document.getElementById("imageGenTopic")?.value||"");

  const pool=reportCases.filter(c=>
    c.sourceType==="map" &&
    c.images?.length &&
    (!modality || c.modalityCode===modality) &&
    (!region || c.region===region) &&
    (!topic || c.topic===topic)
  );

  if(!pool.length){
    toast("Nessun caso con immagini disponibile per questi filtri");
    return;
  }
  const c=pool[Math.floor(Math.random()*pool.length)];
  openReportCase(c.id);
}

function openReportCase(id){
  const c=reportCases.find(x=>x.id===id);
  if(!c) return;
  window.currentReportCase=c;
  showView("reportCaseView");
  document.getElementById("reportLevelLabel").textContent=`LIVELLO ${c.level}`;
  document.getElementById("reportCaseTitle").textContent=c.title;
  document.getElementById("reportCaseTag").textContent=`${c.modalityCode} · ${c.region}`;
  document.getElementById("reportMeta").innerHTML=`
    <div class="muted small"><strong>Contesto clinico:</strong> ${c.clinical}</div>
    <div class="report-case-source ${c.sourceType}">${c.sourceLabel}</div>
  `;
  document.getElementById("reportPromptText").textContent=c.prompt;
  document.getElementById("reportTaskText").textContent=c.task;
  document.getElementById("reportAnswer").value="";
  document.getElementById("reportFeedback").innerHTML="";
  const imgBox=document.getElementById("reportImages");
  imgBox.innerHTML="";
  (c.images||[]).forEach(src=>{
    const img=document.createElement("img");
    img.alt="Caricamento immagine didattica…";
    imgBox.appendChild(img);
    loadPrivateCaseImage(img,src);
  });
}

function evaluateReportCase(){
  const c=window.currentReportCase;
  if(!c) return;
  const raw=document.getElementById("reportAnswer").value.trim();
  if(raw.length<10){toast("Scrivi prima un referto");return;}
  const txt=norm(raw);
  let hits=0;
  const rows=c.findings.map(([label,patterns])=>{
    const ok=patterns.split("|").some(p=>txt.includes(norm(p)));
    if(ok) hits++;
    return {label,ok};
  });
  const score=Math.round(100*hits/c.findings.length);
  const fb=document.getElementById("reportFeedback");
  fb.innerHTML=`
    <div class="feedback">
      <h3>Correzione del caso</h3>
      <div class="report-top-grid">
        <div>
          <div class="muted small">Valutazione orientativa basata sui reperti chiave previsti dal caso.</div>
          <div class="report-case-source ${c.sourceType}">${c.sourceLabel}</div>
        </div>
        <div class="report-score">${score}%</div>
      </div>
      <h4>Checklist reperti</h4>
      ${rows.map(r=>`
        <div class="report-check">
          <div>
            <div class="lbl">${r.ok?'✓':'○'} ${r.label}</div>
            <div class="desc">${r.ok?'menzionato nel tuo referto':'non chiaramente descritto'}</div>
          </div>
          <span class="badge ${r.ok?'good':'weak'}">${r.ok?'ok':'manca'}</span>
        </div>`).join("")}
      <h4>Referto esempio</h4>
      <p>${c.sampleReport}</p>
      <div class="actions">
        <button class="secondary" id="retryReportBtn">Riprova</button>
        <button class="secondary" id="similarReportBtn">Altro simile</button>
        <button class="primary" id="backToCasesBtn">Torna alla scelta</button>
      </div>
    </div>
  `;
  document.getElementById("retryReportBtn").onclick=()=>openReportCase(c.id);
  document.getElementById("similarReportBtn").onclick=()=>randomReportCase({
    modalityCode:c.modalityCode,
    region:c.region,
    topic:c.topic,
    hasImages: !!(c.images && c.images.length)
  });
  document.getElementById("backToCasesBtn").onclick=()=>openReportBrowser({
    sourceType:c.sourceType,
    modalityCode:c.modalityCode,
    region:c.region
  });
}


function openMap(id){
  const m=state.maps.find(x=>x.id===id); if(!m)return;
  document.getElementById("mapTitle").textContent=m.title;
  const box=document.getElementById("mapDetails");box.innerHTML="";
  const pdfCard=document.createElement("div");pdfCard.className="card";
  pdfCard.innerHTML=`<div class="map-row"><div class="meta"><div class="map-title">${m.source||m.title+".pdf"}</div><div class="muted small">Mappa originale conservata nella biblioteca</div></div><button class="open-pdf" id="openMapPdfBtn">Apri PDF</button></div>`;
  box.appendChild(pdfCard);
  pdfCard.querySelector("#openMapPdfBtn").onclick=()=>openPdfForMap(m.id);
  const grid=document.createElement("div");grid.className="card topic-grid";
  m.units.forEach(u=>{
    const d=document.createElement("div");d.className="topic-card";
    d.innerHTML=`<h4>${u.title}</h4><div class="muted small">Mastery ${u.mastery}% · prossimo: ${u.due}</div><div class="bar"><span style="width:${u.mastery}%"></span></div>`;
    grid.appendChild(d);
  });
  box.appendChild(grid);
  if(m.confusions?.length){
    const c=document.createElement("div");c.className="card";
    c.innerHTML="<h3>Confusion Mode</h3><p class='muted small'>Coppie da discriminare intenzionalmente.</p>"+m.confusions.map(x=>`<div class="weak-row"><span>${x.a} ↔ ${x.b}</span><span class="badge ${x.score>65?'weak':'mid'}">${x.score}</span></div>`).join("");
    box.appendChild(c);
  }
  showView("mapView");
}

function startReview(){
  const due=allUnits().filter(u=>u.due<=todayISO()).sort((a,b)=>a.mastery-b.mastery);
  queue=(due.length?due:allUnits().sort((a,b)=>a.mastery-b.mastery)).slice(0,6);
  qIndex=0;
  if(!queue.length){toast("Aggiungi prima una mappa");return}
  showView("reviewView"); renderReviewUnit();
}
function renderReviewUnit(){
  currentUnit=queue[qIndex];
  document.getElementById("reviewModeLabel").textContent="FREE RECALL";
  document.getElementById("reviewTopic").textContent=currentUnit.title;
  document.getElementById("progressText").textContent=`${qIndex+1}/${queue.length}`;
  document.getElementById("reviewPrompt").textContent=currentUnit.freeRecallPrompt || `Scrivi tutto quello che ricordi su ${currentUnit.title}.`;
  document.getElementById("reviewBody").innerHTML=`<textarea id="recallText" placeholder="Scrivi senza guardare la mappa..."></textarea><div class="actions"><button class="primary" id="evalRecallBtn">Valuta il richiamo</button></div>`;
  document.getElementById("evalRecallBtn").onclick=evaluateRecall;
}
function evaluateRecall(){
  const txt=norm(document.getElementById("recallText").value);
  if(txt.trim().length<5){toast("Scrivi almeno qualche concetto");return}
  const hits=[], misses=[];
  (currentUnit.concepts||[]).forEach(([label,patterns])=>{
    const ok=patterns.split("|").some(p=>txt.includes(norm(p).trim()));
    (ok?hits:misses).push(label);
  });
  const score=(hits.length+misses.length)?Math.round(100*hits.length/(hits.length+misses.length)):0;
  document.getElementById("reviewBody").innerHTML=`
    <div class="feedback">
      <h3>Copertura stimata: ${score}%</h3>
      <p class="muted small">È una stima per concetti-chiave, non una correzione semantica completa. La versione AI arriverà nel prossimo passaggio.</p>
      <h4>Richiamato</h4><div class="chips">${hits.map(x=>`<span class="chip hit">✓ ${x}</span>`).join("")||"<span class='muted'>Nessun concetto chiave rilevato.</span>"}</div>
      <h4>Omissioni</h4><div class="chips">${misses.map(x=>`<span class="chip miss">○ ${x}</span>`).join("")||"<span class='muted'>Ottima copertura.</span>"}</div>
      <div class="actions"><button class="primary" id="nextQuestionBtn">Domanda mirata</button></div>
    </div>`;
  currentUnit._lastRecallScore=score;
  document.getElementById("nextQuestionBtn").onclick=renderQuestion;
}
function renderQuestion(){
  const qs=currentUnit.questions||[];
  currentQuestion=qs[Math.floor(Math.random()*qs.length)]||{q:`Qual è il concetto più importante di ${currentUnit.title}?`,a:"Valuta rispetto alla tua mappa."};
  document.getElementById("reviewModeLabel").textContent="DOMANDA MIRATA";
  document.getElementById("reviewPrompt").textContent=currentQuestion.q;
  document.getElementById("reviewBody").innerHTML=`<textarea id="answerText" placeholder="Rispondi senza suggerimenti..."></textarea><div class="actions"><button class="primary" id="showAnswerBtn">Mostra risposta</button></div>`;
  document.getElementById("showAnswerBtn").onclick=showAnswer;
}
function showAnswer(){
  const ans=document.getElementById("answerText").value;
  document.getElementById("reviewBody").innerHTML=`
    <div class="feedback">
      <h4>La tua risposta</h4><p>${ans?ans.replace(/</g,"&lt;"):"—"}</p>
      <h4>Risposta attesa dalla mappa</h4><p>${currentQuestion.a}</p>
      <h4>Quanto è stato solido il recupero?</h4>
      <div class="rating">
        <button onclick="rate(0)">Non lo so</button>
        <button onclick="rate(1)">Con fatica</button>
        <button onclick="rate(2)">Lo so</button>
        <button onclick="rate(3)">Facile</button>
      </div>
    </div>`;
}
window.rate=function(r){
  const map=state.maps.find(m=>m.id===currentUnit.mapId);
  const u=map.units.find(x=>x.id===currentUnit.id);
  const recall=u._lastRecallScore ?? u.mastery;
  u.reviews=(u.reviews||0)+1;
  if(r===0){u.lapses=(u.lapses||0)+1;u.interval=1;u.mastery=Math.max(10,Math.round(u.mastery*.72));}
  if(r===1){u.interval=Math.max(1,Math.round((u.interval||1)*1.4));u.mastery=Math.round(.7*u.mastery+.3*Math.max(45,recall));}
  if(r===2){u.interval=u.reviews<2?3:Math.max(3,Math.round((u.interval||2)*2.1));u.mastery=Math.min(96,Math.round(.55*u.mastery+.45*Math.max(70,recall)));}
  if(r===3){u.interval=u.reviews<2?7:Math.max(7,Math.round((u.interval||3)*2.8));u.mastery=Math.min(99,Math.round(.45*u.mastery+.55*Math.max(85,recall)));}
  u.due=addDays(todayISO(),u.interval);
  delete u._lastRecallScore;
  save();
  qIndex++;
  if(qIndex>=queue.length){toast("Sessione completata");showView("homeView");}
  else renderReviewUnit();
}


async function saveNewMap(){
  const collection=document.getElementById("newMapCollection").value;
  const f=document.getElementById("newMapFile").files[0];
  if(!f){toast("Seleziona un file");return;}
  if(!(await hasGithubConnection())){toast("Collega prima GitHub dalle Impostazioni");return;}
  if(!navigator.onLine){toast("Serve internet per caricare il file su GitHub");return;}
  let repoPath="";
  if(collection==="archivio"){
    const area=document.getElementById("newMapArea").value;
    const organ=document.getElementById("newMapOrgan").value.trim();
    if(!organ){toast("Inserisci l'organo / sede");return;}
    repoPath=`library/archivio/${ghSlug(area)}/${ghSlug(organ)}/${safeGithubFilename(f.name)}`;
  }else{
    const project=document.getElementById("newStudyProject").value.trim();
    repoPath=project?`library/studi/${ghSlug(project)}/${safeGithubFilename(f.name)}`:`library/studi/${safeGithubFilename(f.name)}`;
  }
  const btn=document.getElementById("saveMapBtn"), oldText=btn.textContent;
  try{
    btn.disabled=true;btn.textContent="Caricamento…";
    await githubUploadFile(repoPath,f);
    document.getElementById("newMapFile").value="";
    const organ=document.getElementById("newMapOrgan");if(organ)organ.value="";
    const project=document.getElementById("newStudyProject");if(project)project.value="";
    githubLibrarySynced=false;
    await syncGithubLibrary({silent:true});
    toast("File caricato su GitHub");
    showView("libraryView");
    collection==="archivio"?openArchiveRoot():openStudies();
  }catch(e){
    console.error(e);
    if(String(e.message)!=="Caricamento annullato") toast(e.message||"Caricamento non riuscito");
  }finally{
    btn.disabled=false;btn.textContent=oldText;
  }
}
function syncAddMaterialForm(){
  const isArchive=document.getElementById("newMapCollection")?.value!=="studi";
  document.getElementById("archiveMetadataFields").hidden=!isArchive;
  document.getElementById("studyMetadataFields").hidden=isArchive;
  const area=document.getElementById("newMapArea")?.value||"Addome";
  const organList=document.getElementById("organSuggestions");
  if(organList) organList.innerHTML=Object.keys(archiveTaxonomy[area]||{}).map(x=>`<option value="${x}">`).join("");
}

function exportData(){
  const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="recall-backup.json";a.click();URL.revokeObjectURL(a.href);
}
function importData(file){
  const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);save();toast("Backup importato");showView("homeView")}catch(e){toast("File non valido")}};r.readAsText(file);
}

document.getElementById("startReviewBtn").onclick=startReview;
document.getElementById("backHomeBtn").onclick=()=>showView("homeView");
document.getElementById("mapBackBtn").onclick=()=>showView("homeView");
document.getElementById("addMapBtn").onclick=()=>{showView("addMapView");syncAddMaterialForm();};
document.getElementById("libraryBackBtn").onclick=()=>{
  if(!document.getElementById("studiesExplorer").hidden){showView("homeView");return;}
  if(archiveNav.organ){archiveNav.organ=null;renderArchive();return;}
  if(archiveNav.area){archiveNav.area=null;renderArchive();return;}
  showView("homeView");
};
document.getElementById("libraryAddBtn").onclick=()=>{showView("addMapView");syncAddMaterialForm();};
document.getElementById("addMapBackBtn").onclick=()=>showView("homeView");
document.getElementById("saveMapBtn").onclick=saveNewMap;
document.getElementById("settingsBtn").onclick=()=>{showView("settingsView");updateConnectionUI();updateInstallUI();updateCaseOfflineStatus();updateGithubSettingsUI();};
document.getElementById("settingsBackBtn").onclick=()=>showView("homeView");
document.getElementById("exportBtn").onclick=exportData;
document.getElementById("importInput").onchange=e=>e.target.files[0]&&importData(e.target.files[0]);
document.getElementById("resetBtn").onclick=()=>{if(confirm("Ripristinare la demo?")){localStorage.removeItem("recall_state");location.reload();}};
document.getElementById("navReview").onclick=startReview;
document.getElementById("navLibrary").onclick=openLibrary;
document.getElementById("navReports").onclick=openReportHome;
document.getElementById("navAdd").onclick=()=>{showView("addMapView");syncAddMaterialForm();};
document.getElementById("openReportBtn").onclick=openReportHome;
document.getElementById("reportBackBtn").onclick=()=>showView("homeView");
document.getElementById("reportRandomTopBtn").onclick=()=>randomReportCase({sourceType:"map"});
document.getElementById("reportBrowseBackBtn").onclick=openReportHome;
document.getElementById("reportBrowseRandomBtn").onclick=()=>randomReportCase(window.reportBrowserFilters||{});
document.getElementById("reportCaseBackBtn").onclick=()=>{ if(window.reportBrowserFilters) openReportBrowser(window.reportBrowserFilters); else openReportHome(); };
document.getElementById("submitReportBtn").onclick=evaluateReportCase;
document.getElementById("imageGeneratorBackBtn").onclick=openReportHome;
document.getElementById("imageRandomBtn").onclick=()=>generateImageTrainingCase(true);
document.getElementById("generateImageCaseBtn").onclick=()=>generateImageTrainingCase(false);
document.getElementById("imageGenModality").onchange=populateImageGeneratorTopics;
document.getElementById("imageGenRegion").onchange=populateImageGeneratorTopics;

document.getElementById("libraryModeArchive")?.addEventListener("click",openArchiveRoot);
document.getElementById("libraryModeStudies")?.addEventListener("click",openStudies);
document.getElementById("studiesBackRoot")?.addEventListener("click",openArchiveRoot);
document.getElementById("newMapCollection").onchange=syncAddMaterialForm;
document.getElementById("newMapArea").onchange=syncAddMaterialForm;
document.querySelector('[data-view="homeView"]').onclick=()=>showView("homeView");
document.getElementById("saveGithubBtn")?.addEventListener("click",saveGithubSettings);
document.getElementById("syncGithubBtn")?.addEventListener("click",()=>syncGithubLibrary());
document.getElementById("forgetGithubBtn")?.addEventListener("click",forgetGithub);
document.getElementById("createGithubTokenBtn")?.addEventListener("click",()=>window.open(githubTokenUrl(),"_blank"));
updateGithubSettingsUI();
if(navigator.onLine) syncGithubLibrary({silent:true}).then(()=>renderHome()).catch(()=>{});

initOfflineFeatures();
renderHome();
