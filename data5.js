const provpass5 = {
    id: 5,
    title: "Provpass 5 (Kvantitativ)",
    totalTimeInMinutes: 55,
    texts: {
        "dtk1": {
            title: "Biodlare i Sverige",
            content: `Antalet medlemmar i Sveriges Biodlares Riksförbund (SBR), antalet bisamhällen samt skörden av honung några år under perioden 1990–2016, baserat på enkätsvar.

År | Antal medlemmar | Antal bisamhällen1 | Skörd av honung, 1 000-tal kg1 | Andel medlemmar som besvarat enkäten, % | Beräknad total skörd av honung, 1 000-tal kg2 | Invintrade föregående höst | Därav vinterförluster
2016 | 12 026 | 52 | 45 677 | 7 111 | 1 193 | 2 294
2015 | 11 505 | 48 | 43 543 | 6 351 | 1 057 | 2 202
2010 | 9 673 | 38 | 31 667 | 7 850 | 1 135 | 2 987
2005 | 10 330 | 45 | 36 791 | 5 567 | 1 370 | 3 044
2000 | 11 726 | 47 | 42 586 | 3 673 | 1 088 | 2 314
1995 | 13 316 | 60 | 57 284 | 4 688 | 2 184 | 3 640
1990 | 17 923 | 65 | 88 040 | 5 665 | 2 415 | 3 699

1) Här avses endast svaren på enkäten från SBR.
2) Skörden är uppräknad till en total för samtliga medlemmar.`
        },
        "dtk2": {
            title: "Sysselsättningsgrad bland nyexaminerade i EU-28",
            content: `Sysselsättningsgraden 2017 bland personer i åldrarna 20–34 år som de senaste tre åren tagit examen på gymnasial eller eftergymnasial nivå och avslutat sina studier. Redovisning per examenstyp och land. Procent.

[Stolpdiagram för Sysselsättningsgrad saknas - se originalprov för visualisering]`
        },
        "dtk3": {
            title: "Rikslotteriernas nettoomsättning",
            content: `Nettoomsättningen (omsättningen exklusive vinstutbetalningar) för de fyra största anordnarna av rikslotterier, redovisad per kvartal 2016 och 2017. Miljoner kronor.

[Stapeldiagram för Nettoomsättning saknas - se originalprov för visualisering]`
        },
        "dtk4": {
            title: "Hushåll med ekonomiskt bistånd",
            content: `Antalet hushåll i Sverige med ekonomiskt bistånd från socialtjänst 1990–2014 uppdelat efter hushållstyp.
Det totala antalet barn i hushåll med ekonomiskt bistånd 1990–2014 samt därav antalet barn i hushåll med långvarigt bistånd.

[Linjediagram för Ekonomiskt bistånd saknas - se originalprov för visualisering]`
        }
    },
    questions: [
        { id: 1, text: "1. 3(x - 4) = 5(x + 2)\nVad är x?", options: ["A -11", "B -3", "C 1", "D 3"], correctAnswer: "A", category: "XYZ" },
        { id: 2, text: "2. Melvin löste ekvationen -6(x-2) = 4x+4 felaktigt. Han genomförde uträkningen i följande fyra steg:\nSteg 1: -6(x-2) = 4x+4\nSteg 2: -6x-12 = 4x+4\nSteg 3: -6x = 4x+16\nSteg 4: -10x = 16\nx = -1,6\nI vilket steg uppstod felet?", options: ["A Steg 1", "B Steg 2", "C Steg 3", "D Steg 4"], correctAnswer: "A", category: "XYZ" },
        { id: 3, text: "3. Vad är medelvärdet av 1/2 och 5/7?", options: ["A 15/28", "B 4/7", "C 17/28", "D 9/14"], correctAnswer: "C", category: "XYZ" },
        { id: 4, text: "4. Vilket svarsalternativ är en ekvation för den räta linjen i figuren?\n[Bild saknas]", options: ["A y = (3/2)x - 2", "B y = (2/3)x - 2", "C y = (3/2)x + 3", "D y = (2/3)x + 3"], correctAnswer: "A", category: "XYZ" },
        { id: 5, text: "5. Vad är 1 / (1/6 + 1/4 + 1/5)?", options: ["A 1/27", "B 2/3", "C 3/2", "D 60/37"], correctAnswer: "D", category: "XYZ" },
        { id: 6, text: "6. Linjerna L1 och L2 är parallella. Hur stor är vinkeln v?\n[Bild saknas]", options: ["A 53°", "B 56°", "C 66°", "D 71°"], correctAnswer: "B", category: "XYZ" },
        { id: 7, text: "7. Vad är 0,08 · 0,03?", options: ["A 0,00024", "B 0,0024", "C 0,024", "D 0,24"], correctAnswer: "B", category: "XYZ" },
        { id: 8, text: "8. Vilket svarsalternativ motsvarar uttrycket -28xyz + 20xy?", options: ["A -8z", "B -2xy(14z + 10)", "C 4xy(5 - 7z)", "D 20xy(1 - 8z)"], correctAnswer: "C", category: "XYZ" },
        { id: 9, text: "9. En funktion f ges av f(x) = kx + m, där m = 7 och f(10) = 3.\nVad är f(20)?", options: ["A -43", "B -1", "C 6", "D 15"], correctAnswer: "B", category: "XYZ" },
        { id: 10, text: "10. Fyrhörningen ABDF är en kvadrat. Hur stor är arean av triangeln ACE?\n[Bild saknas]", options: ["A 3,5 cm²", "B 4 cm²", "C 4,5 cm²", "D 5 cm²"], correctAnswer: "B", category: "XYZ" },
        { id: 11, text: "11. Vilket svarsalternativ är lika med 3^4 · (3^4 - 3^4)?", options: ["A 12", "B 3^5", "C 4 · 3^5", "D 0"], correctAnswer: "D", category: "XYZ" },
        { id: 12, text: "12. För vilket svarsalternativ gäller med säkerhet att a²b - ab² > 0?", options: ["A a < 0, b > 0", "B a > 0, b < 0", "C a < 0, b < 0", "D a > 0, b > 0"], correctAnswer: "A", category: "XYZ" },
        
        { id: 13, text: "13. Två vanliga sexsidiga tärningar kastas slumpmässigt en gång.\nKvantitet I: Sannolikheten att summan av det tärningarna visar är 3, om den ena tärningen visar en tvåa\nKvantitet II: Sannolikheten att summan av det tärningarna visar är 7, om den ena tärningen visar en tvåa", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "C", category: "KVA" },
        { id: 14, text: "14. Kvantitet I: (1/3) · 27\nKvantitet II: 3", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "B", category: "KVA" },
        { id: 15, text: "15. Per kör vägen A–B–C–D utan paus. Mellan A och B är hans medelhastighet 70 km/h. Mellan B och C är den 90 km/h och mellan C och D är den 70 km/h.\nKvantitet I: Tiden det tar för Per att köra från A till D\nKvantitet II: 2 timmar", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "B", category: "KVA" },
        { id: 16, text: "16. För de positiva talen x och y gäller att 150 procent av x är lika med 50 procent av y.\nKvantitet I: 3x\nKvantitet II: y", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "C", category: "KVA" },
        { id: 17, text: "17. y < 0\nKvantitet I: -2y\nKvantitet II: -(2y)", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "C", category: "KVA" },
        { id: 18, text: "18. z = 90°\nKvantitet I: x\nKvantitet II: 90° - y\n[Bild saknas]", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "D", category: "KVA" },
        { id: 19, text: "19. L1, L2 och L3 är räta linjer.\nL1: y = 2x + 1\nL2: y = -x + 4\nL3: y = x\nKvantitet I: x-koordinaten för skärningspunkten mellan L1 och L3\nKvantitet II: x-koordinaten för skärningspunkten mellan L2 och L3", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "B", category: "KVA" },
        { id: 20, text: "20. x är ett heltal större än 1.\nKvantitet I: x / (1 + 1/x)\nKvantitet II: x / (x + 1)", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "A", category: "KVA" },
        { id: 21, text: "21. Den rätvinkliga triangeln T har sidlängderna 3 cm, 4 cm och 5 cm.\nT har lika stor area som kvadraten K.\nKvantitet I: Omkretsen av T\nKvantitet II: Omkretsen av K", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "A", category: "KVA" },
        { id: 22, text: "22. y ≠ 0\n(x + y) / y = 3/2\nKvantitet I: x\nKvantitet II: y", options: ["A I är större än II", "B II är större än I", "C I är lika med II", "D informationen är otillräcklig"], correctAnswer: "D", category: "KVA" },
        
        { id: 23, text: "23. På ett skrivbord står det tre kaffekoppar på rad. I en kopp är det varmt kaffe och i en kopp är det kallt kaffe. Den tredje koppen är tom. I vilken ordning från vänster till höger står de tre kopparna?\n(1) Den tomma koppen står i mitten.\n(2) Koppen med varmt kaffe står någonstans till vänster om koppen med kallt kaffe. Koppen med kallt kaffe står längst till höger.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "C", category: "NOG" },
        { id: 24, text: "24. Iris samlar på tomtar. Hur många tomtar har Iris?\n(1) Om Iris fick fem nya tomtar skulle hon ha 25 procent fler tomtar.\n(2) Iris har 7/10 av sina tomtar i ett skåp. De övriga sex tomtarna i hennes samling står på en hylla.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "D", category: "NOG" },
        { id: 25, text: "25. Alfred sålde godis i två olika slags askar: stora och små. Varje ask innehöll endast en sorts godis: lakrits eller choklad. Hur många stora askar med lakrits sålde Alfred?\n(1) Alfred sålde sammanlagt 400 askar varav 250 askar var stora. 300 av askarna innehöll choklad.\n(2) Av de små askarna innehöll 100 stycken choklad. En fjärdedel av askarna innehöll lakrits.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "C", category: "NOG" },
        { id: 26, text: "26. Priset på en vara sänktes med 150 kronor från det ordinarie priset. Hur många procent av varans ordinarie pris motsvarade sänkningen?\n(1) Efter sänkningen var varans pris 350 kronor.\n(2) Om varans ordinarie pris hade varit 600 kronor, så hade prissänkningen motsvarat 25 %.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "A", category: "NOG" },
        { id: 27, text: "27. Hur många timmar tar det för Ida att resa från A till B?\n(1) Om Idas medelhastighet hade varit fyra gånger så stor, så hade resan tagit två timmar.\n(2) Avståndet mellan A och B är 200 km. Ida färdas den första halvan av sträckan dubbelt så fort som den andra halvan av sträckan.", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "A", category: "NOG" },
        { id: 28, text: "28. Vilket värde har talet y i mätserien x, y, 1, 11, 19, 27, 35?\n(1) Mätseriens median är 13.\n(2) x < y", options: ["A i (1) men ej i (2)", "B i (2) men ej i (1)", "C i (1) tillsammans med (2)", "D i (1) och (2) var för sig", "E ej genom de båda påståendena"], correctAnswer: "C", category: "NOG" },
        
        { id: 29, text: "29. Hur många av medlemmarna i SBR besvarade enkäten 2005?", options: ["A 4 460", "B 4 650", "C 5 040", "D 5 680"], correctAnswer: "B", category: "DTK", textRef: "dtk1" },
        { id: 30, text: "30. Hur stora var de vinterförluster av bisamhällen som redovisades 2010?", options: ["A 10 procent", "B 15 procent", "C 20 procent", "D 25 procent"], correctAnswer: "D", category: "DTK", textRef: "dtk1" },
        { id: 31, text: "31. Hur stor var den beräknade skörden av honung per medlem i SBR 2016?", options: ["A 52 kg", "B 99 kg", "C 142 kg", "D 191 kg"], correctAnswer: "D", category: "DTK", textRef: "dtk1" },
        { id: 32, text: "32. Vilket svarsförslag beskriver bäst hur det såg ut i Sverige vad avser sysselsättningsgraden i förhållande till examenstyp?", options: ["A Sysselsättningsgraden var låg oavsett examenstyp.", "B Sysselsättningsgraden var hög oavsett examenstyp.", "C Sysselsättningsgraden varierade stort beroende på examenstyp.", "D Sysselsättningsgraden var som lägst för de med yrkesutbildningar."], correctAnswer: "B", category: "DTK", textRef: "dtk2" },
        { id: 33, text: "33. Vilket var förhållandet mellan Tyskland och Italien vad gäller sysselsättningsgraden för de med examen från yrkesutbildningar?", options: ["A 3 : 1", "B 5 : 2", "C 7 : 5", "D 9 : 5"], correctAnswer: "D", category: "DTK", textRef: "dtk2" },
        { id: 34, text: "34. För hur många av länderna redovisas att sysselsättningsgraden för de med examen från studieförberedande utbildningar var lägre än genomsnittet i EU-28?", options: ["A 7", "B 8", "C 9", "D 10"], correctAnswer: "C", category: "DTK", textRef: "dtk2" },
        { id: 35, text: "35. Hur stor andel av Folkspels nettoomsättning 2016 kom från kvartal 4?", options: ["A 45 procent", "B 55 procent", "C 65 procent", "D 75 procent"], correctAnswer: "A", category: "DTK", textRef: "dtk3" },
        { id: 36, text: "36. Hur mycket mer omsatte Svenska Postkodföreningen under kvartal 1 år 2017 än under kvartal 4 år 2016?", options: ["A 100 miljoner kronor", "B 180 miljoner kronor", "C 280 miljoner kronor", "D 620 miljoner kronor"], correctAnswer: "C", category: "DTK", textRef: "dtk3" },
        { id: 37, text: "37. Den reglerade svenska spelmarknadens nettoomsättning 2017 var 17,2 miljarder kronor. Hur stor andel av detta stod de redovisade rikslotterierna för?", options: ["A 5 procent", "B 10 procent", "C 20 procent", "D 35 procent"], correctAnswer: "C", category: "DTK", textRef: "dtk3" },
        { id: 38, text: "38. Med hur många procent hade antalet barn i hushåll med ekonomiskt bistånd minskat 2002 jämfört med 1997?", options: ["A 40 procent", "B 50 procent", "C 60 procent", "D 70 procent"], correctAnswer: "A", category: "DTK", textRef: "dtk4" },
        { id: 39, text: "39. Identifiera det totala antalet hushåll med barn som fick ekonomiskt bistånd 2010. Hur många barn fanns i genomsnitt i dessa hushåll?", options: ["A 1 barn", "B 2 barn", "C 3 barn", "D 4 barn"], correctAnswer: "B", category: "DTK", textRef: "dtk4" },
        { id: 40, text: "40. Hur stort var antalet hushåll med ekonomiskt bistånd det år detta antal var som störst?", options: ["A 145 000", "B 250 000", "C 330 000", "D 385 000"], correctAnswer: "D", category: "DTK", textRef: "dtk4" }
    ]
};
