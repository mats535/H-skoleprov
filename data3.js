const provpass3 = {
    id: 3,
    title: "Provpass 3 (Kvantitativ)",
    totalTimeInMinutes: 55,
    texts: {
        "dtk1": {
            title: "Tidsåtgång för oavlönat hemarbete",
            content: `Genomsnittlig tid för olika hemarbetsaktiviteter 2010, 2000 och 1990 bland kvinnor och män, 20–64 år gamla.
Genomsnitt i minuter per dag (beräknat på alla veckodagar, måndag–söndag).

[Diagram över tidsåtgång för oavlönat hemarbete saknas - se originalprov för visualisering]`
        },
        "dtk2": {
            title: "Vård vid svenska sjukhus",
            content: `Antalet vårdtillfällen, medelvårdtid (dagar) samt medelålder för patienter vårdade på sjukhus i Sverige 2014.

Sjukhus | Antal vårdtillfällen | Medelvårdtid | Medelålder
Akademiska sjukhuset | 48 539 | 4,71 | 53
Alingsås lasarett | 7 351 | 4,97 | 69
Artro center Löwenströmska | 4 118 | 3,12 | 38
Artro o Spinecenter Göteborg | 1 075 | 2,49 | 57
Arvika sjukhus | 5 429 | 4,73 | 70
Avesta lasarett | 2 344 | 3,88 | 71
Blekingesjukhuset | 23 992 | 4,93 | 61
Danderyds sjukhus | 49 164 | 3,16 | 56
Elisabethkliniken | 1 077 | 1,35 | 49
Enköpings lasarett | 4 662 | 4,89 | 68
Ersta sjukhus | 2 982 | 2,82 | 55
Falu lasarett | 29 732 | 3,62 | 56
Finspångs lasarett | 566 | 7,82 | 77
Gällivare sjukhus | 5 377 | 4,16 | 57
Gävle sjukhus | 23 816 | 4,27 | 58
Hallands sjukhus Halmstad | 24 220 | 3,93 | 56
Hallands sjukhus Varberg | 18 174 | 4,57 | 60
Helsingborgs lasarett | 30 759 | 4,31 | 54
Huddinge sjukhus | 41 061 | 4,12 | 50
Hudiksvalls sjukhus | 12 414 | 3,93 | 57
Hässleholms sjukhus | 5 420 | 4,94 | 71
Höglandssjukhuset | 13 277 | 3,65 | 60
Kalix sjukhus | 3 287 | 5,58 | 71
Karlskoga lasarett | 7 927 | 4,32 | 63
Karlstads sjukhus | 30 336 | 4,52 | 57
Karolinska sjukhuset | 58 874 | 4,06 | 46
Kiruna sjukhus | 1 725 | 5,72 | 69
Kristianstads sjukhus | 23 323 | 4,46 | 56
Kullbergska sjukhuset | 3 612 | 4,9 | 70
Kungsbacka sjukhus | 875 | 5,47 | 67
Kungälvs sjukhus | 9 354 | 4,7 | 65
Köpings lasarett | 5 290 | 4,97 | 72
Landskrona lasarett | 4 393 | 4,92 | 73
Lindesbergs lasarett | 5 439 | 4,68 | 68
Ljungby lasarett | 4 984 | 4,62 | 68
Lundby sjukhus | 572 | 1,03 | 43
Lycksele lasarett | 5 566 | 4,15 | 63
Länssjukhuset Kalmar | 25 142 | 3,58 | 58
Löts rehabiliteringscentrum | 432 | 4,39 | 56
Mora lasarett | 10 618 | 3,62 | 65
Motala lasarett | 5 298 | 3,91 | 67
Mälarsjukhuset | 20 883 | 5,13 | 55
Nacka sjukhus | 1 154 | 1,9 | 58

*(Tabellen fortsätter med fler sjukhus. Referera till originalprovet för alla uppgifter)*`
        },
        "dtk3": {
            title: "Vattenförsörjning i sydöstra Skåne",
            content: `Sammanfattande kartläggning av mark- och vattenförhållandena i sydöstra Skåne. Kartan redovisar befintlig vattenförsörjning 1964 samt förutsättningar att tillgodose ett ökat vattenbehov genom grundvatten.

[Karta över sydöstra Skåne saknas - se originalprov för visualisering]`
        },
        "dtk4": {
            title: "Medlemmar i Svenska kyrkan",
            content: `Antalet individer i befolkningen fördelat efter ålder, samt därav antalet medlemmar i Svenska kyrkan 2015.

[Diagram över åldersfördelning saknas - se originalprov för visualisering]`
        }
    },
    questions: [
        { id: 1, text: "1. Vilket svarsalternativ motsvarar uttrycket (x + 3)(x - 5)?", options: ["A x² - 15", "B x² - 2", "C x² - 2x - 15", "D x² - 2x - 8"], correctAnswer: "C", category: "XYZ" },
        { id: 2, text: "2. f(x) = x/5 + 3\nVilket svarsalternativ är lika med f(1/3)?", options: ["A 15/3", "B 1/2", "C 46/15", "D 1"], correctAnswer: "C", category: "XYZ" },
        { id: 3, text: "3. Hur många trubbiga vinklar kan en triangel som mest ha?", options: ["A 0", "B 1", "C 2", "D 3"], correctAnswer: "B", category: "XYZ" },
        { id: 4, text: "4. Varje månad sparar Nils 1/5 av sin lön. Resten av lönen spenderar han. Vad är kvoten mellan det Nils sparar och det han spenderar under en månad?", options: ["A 1/6", "B 1/5", "C 1/4", "D 1/3"], correctAnswer: "C", category: "XYZ" },
        { id: 5, text: "5. 15 · x / 8 = 2/3\nVilket värde har x?", options: ["A 16/45", "B 4/5", "C 45/16", "D 5/4"], correctAnswer: "A", category: "XYZ" },
        { id: 6, text: "6. I en låda finns det tjugo bollar. Dessa är numrerade med heltalen 1–20. Siri plockar två bollar ur lådan utan att lägga tillbaka dem. Den ena bollen har nummer 11 och den andra bollen har nummer 18. Siri plockar slumpmässigt en tredje boll ur lådan. Hur stor är sannolikheten att numret på den tredje bollen är större än 11 och mindre än 18?", options: ["A 1/3", "B 2/5", "C 4/9", "D 3/10"], correctAnswer: "A", category: "XYZ" },
        { id: 7, text: "7. Vad är tiotalssiffran i 44 · 625?", options: ["A 0", "B 2", "C 4", "D 8"], correctAnswer: "A", category: "XYZ" },
        { id: 8, text: "8. 2³ · 8² = 2^x\nVilket värde har x?", options: ["A 6", "B 9", "C 15", "D 18"], correctAnswer: "B", category: "XYZ" },
        { id: 9, text: "9. Den räta linjen L ges av ekvationen 2y + x = 2.\nVilket svarsalternativ visar linjen L?\n[Bilder saknas]", options: ["A", "B", "C", "D"], correctAnswer: "B", category: "XYZ" },
        { id: 10, text: "10. Vad är 150 % av 50 % av 60?", options: ["A 45", "B 60", "C 75", "D 90"], correctAnswer: "A", category: "XYZ" },
        { id: 11, text: "11. En cylinder har volymen 16 cm³ och höjden 1 cm. Vilket svarsalternativ ligger närmast cylinderns radie?", options: ["A 2 cm", "B 4 cm", "C 5 cm", "D 8 cm"], correctAnswer: "A", category: "XYZ" },
        { id: 12, text: "12. Vilket svarsalternativ motsvarar (3²)/(2³) ?", options: ["A 1", "B 6/3", "C 9/8", "D 2/3"], correctAnswer: "C", category: "XYZ" },
        
        { id: 13, text: "13. x > 4\nKvantitet I: 1/x\nKvantitet II: 1/4", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "B", category: "KVA" },
        { id: 14, text: "14. Kvantitet I: Längden av hypotenusan i triangeln ABC [Bild saknas]\nKvantitet II: 5 cm", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "D", category: "KVA" },
        { id: 15, text: "15. Kvantitet I: Ett femsiffrigt tal som skrivs med endast sexor och sjuor\nKvantitet II: Ett femsiffrigt tal som skrivs med endast sexor och åttor", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "D", category: "KVA" },
        { id: 16, text: "16. x² = 4\nKvantitet I: (-2)x + 2\nKvantitet II: (-2)x + 3", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "D", category: "KVA" },
        { id: 17, text: "17. Kvantitet I: Summan av fyra olika ensiffriga jämna positiva heltal\nKvantitet II: Summan av tre olika ensiffriga udda positiva heltal", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "D", category: "KVA" },
        { id: 18, text: "18. x > 0\ny > 0\nKvantitet I: Medelvärdet av x och y\nKvantitet II: Medelvärdet av 2x och y²", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "D", category: "KVA" },
        { id: 19, text: "19. Kvantitet I: (1/2)³ - 1\nKvantitet II: 2 · -(1/3) · 1", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "A", category: "KVA" },
        { id: 20, text: "20. Kvantitet I: Omkretsen av en cirkel med radien 5 cm\nKvantitet II: Omkretsen av en rektangel med sidlängderna 5,5 cm och 10 cm", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "A", category: "KVA" },
        { id: 21, text: "21. -1 < x < 0 < y < 1\nKvantitet I: x/y\nKvantitet II: y/x", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "D", category: "KVA" },
        { id: 22, text: "22. För funktionen f(x) = kx + m gäller att m > 0 och att f(a) = 0 för något a > 0.\nKvantitet I: k\nKvantitet II: 0", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "B", category: "KVA" },
        
        { id: 23, text: "23. Hur många klasskamrater har Vilgot?\n(1) Om Vilgot hade haft ytterligare tre klasskamrater, så skulle antalet elever i klassen vara jämnt delbart med 5.\n(2) Vilgot har ett udda antal klasskamrater.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "E", category: "NOG" },
        { id: 24, text: "24. Jenny, Lina och Susanne spelar varsitt instrument i ett band. En av dem spelar elbas, en spelar gitarr och en spelar trummor. Vem spelar vilket instrument?\n(1) Det är Jenny eller Lina som spelar elbas. Susanne spelar inte trummor.\n(2) Det är Susanne eller Lina som spelar gitarr. Jenny spelar inte trummor.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "C", category: "NOG" },
        { id: 25, text: "25. Lindas kylskåp har tre hyllor. I kylskåpet finns det endast ett mjölkpaket, en ketchupflaska och ett salladshuvud. På vilken hylla finns mjölkpaketet?\n(1) Mjölkpaketet och ketchupflaskan finns på samma hylla. Salladshuvudet finns på den nedersta hyllan.\n(2) Den översta hyllan är tom. Salladshuvudet finns på hyllan under mjölkpaketet.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "D", category: "NOG" },
        { id: 26, text: "26. En grupp består av x personer, där 20 < x < 60. Vilket värde har x?\n(1) Gruppen kan delas in i mindre grupper med sju personer i varje grupp.\n(2) Om gruppen delas in i mindre grupper med fem personer i varje grupp, så blir det fyra personer över.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "C", category: "NOG" },
        { id: 27, text: "27. Hur stor area har den rätvinkliga triangeln ABC?\n(1) I triangeln ABC är hypotenusan 4 cm, och den kortare kateten är 2 cm.\n(2) I triangeln ABC är hypotenusan 4 cm, och vinkeln mellan hypotenusan och den kortare kateten är 60°.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "D", category: "NOG" },
        { id: 28, text: "28. En affär säljer madrasser: hårda och mjuka. Var och en av madrasserna är 90 cm bred eller 120 cm bred. Affären har 35 madrasser. Hur många av madrasserna är mjuka?\n(1) Tjugo av madrasserna är 90 cm breda, och hälften av dessa är mjuka.\n(2) Av de hårda madrasserna är tio stycken 90 cm breda och sex stycken 120 cm breda.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "C", category: "NOG" },
        
        { id: 29, text: "29. Hur mycket mer tid per vecka lade kvinnor på Diskning, avdukning 1990 jämfört med 2010?", options: ["A 45 minuter", "B 60 minuter", "C 90 minuter", "D 105 minuter"], correctAnswer: "D", category: "DTK", textRef: "dtk1" },
        { id: 30, text: "30. Vilket av svarsförslagen motsvarar 3 timmar och 30 minuter i veckan?", options: ["A Den tid kvinnor lade på Underhållsarbete år 1990", "B Den tid män lade på Omsorg om egna barn år 1990", "C Den tid kvinnor lade på Inköp av varor och tjänster år 2000", "D Den tid män lade på Resor i samband med hemarbete år 2000"], correctAnswer: "B", category: "DTK", textRef: "dtk1" },
        { id: 31, text: "31. Jämför den tid kvinnor lade på respektive hemarbetsaktivitet de olika åren. För vilken aktivitet hade tiden minskat mest 2010 jämfört med 1990, procentuellt sett?", options: ["A Matlagning", "B Städning av bostaden", "C Tvätt, strykning", "D Omsorg om egna barn"], correctAnswer: "C", category: "DTK", textRef: "dtk1" },
        { id: 32, text: "32. Hur lång var medelvårdtiden vid S:t Eriks sjukhus jämfört med medelvårdtiden vid Skånes universitetssjukhus?", options: ["A En tredjedel så lång", "B Hälften så lång", "C Dubbelt så lång", "D Tre gånger så lång"], correctAnswer: "A", category: "DTK", textRef: "dtk2" },
        { id: 33, text: "33. Identifiera det sjukhus där patienterna hade den högsta medelåldern och det sjukhus där de hade den lägsta medelåldern. Hur stor var skillnaden i medelålder mellan dessa två sjukhus?", options: ["A 37 år", "B 40 år", "C 43 år", "D 45 år"], correctAnswer: "C", category: "DTK", textRef: "dtk2" },
        { id: 34, text: "34. Hur många var vårddagarna sammanlagt vid Kiruna sjukhus?", options: ["A 7 200", "B 8 500", "C 9 900", "D 10 500"], correctAnswer: "C", category: "DTK", textRef: "dtk2" },
        { id: 35, text: "35. Vilka väderstreck beskriver bäst riktningen mellan de två undersökta, ej utbyggda uttagsplatserna vid Kåseberga och Ö. Vemmerlöv?", options: ["A NNO – SSV", "B NNO – VSV", "C ONO – SSV", "D ONO – VSV"], correctAnswer: "A", category: "DTK", textRef: "dtk3" },
        { id: 36, text: "36. Hur lång är den tilltänkta huvudvattenledningen från Hörupsåsen som startar vid det befintliga vattenverket i Löderup, går vidare till det befintliga vattenverket i Borrby, och sedan fortsätter via Skillinge till Ingelstorp?", options: ["A 22 km", "B 33 km", "C 44 km", "D 55 km"], correctAnswer: "A", category: "DTK", textRef: "dtk3" },
        { id: 37, text: "37. De befintliga vattenverken vid Nybro, Borrby och Bollerup utgör hörnen i ett triangelformat område. Hur stor area har detta område?", options: ["A 20 km²", "B 40 km²", "C 60 km²", "D 80 km²"], correctAnswer: "B", category: "DTK", textRef: "dtk3" },
        { id: 38, text: "38. Vilket svarsförslag redovisar den procentuella fördelningen av medlemmar och icke medlemmar i Svenska kyrkan bland 63-åringar?", options: ["A", "B", "C", "D"], correctAnswer: "A", category: "DTK", textRef: "dtk4" },
        { id: 39, text: "39. I vilken av följande åldrar var antalet individer 110 000–120 000 och antalet medlemmar i Svenska kyrkan större än 80 000?", options: ["A 9 år", "B 24 år", "C 42 år", "D 69 år"], correctAnswer: "D", category: "DTK", textRef: "dtk4" },
        { id: 40, text: "40. Jämför 39-åringar med 18-åringar med avseende på antalet individer som inte var medlemmar i Svenska kyrkan. Hur stor var skillnaden?", options: ["A 5 000", "B 15 000", "C 25 000", "D 35 000"], correctAnswer: "B", category: "DTK", textRef: "dtk4" }
    ]
};
