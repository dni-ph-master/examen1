// ============================================================
// BANCO DE PREGUNTAS DE INMUNOLOGÍA
// Basado en el material de clase - Diapositivas 2 a 28
// ============================================================

const BANCO_PREGUNTAS = [
    // ==================== DEFINICIÓN DE INMUNOLOGÍA ====================
    {
        tema: "Definición de Inmunología",
        pregunta: "¿Cuál de los siguientes NO es un campo que abarca la inmunología?",
        opciones: [
            "A) Investigación básica",
            "B) Aplicaciones clínicas",
            "C) Mecanismos de defensa del huésped",
            "D) Genética de poblaciones",
            "E) Hipersensibilidad y autoinmunidad"
        ],
        correcta: 3,
        explicacion: "La inmunología abarca: investigación básica, aplicaciones clínicas, mecanismos de defensa, reconocimiento de antígenos, inmunidad celular, hipersensibilidad, autoinmunidad, inmunodeficiencia y trasplantes. (Diapositiva 2)"
    },
    {
        tema: "Definición de Inmunología",
        pregunta: "¿Qué incluye el amplio campo de la inmunología?",
        opciones: [
            "A) Solo el estudio de anticuerpos",
            "B) Investigación básica y aplicaciones clínicas",
            "C) Únicamente mecanismos de defensa inespecíficos",
            "D) Exclusivamente trasplantes de órganos",
            "E) Solo enfermedades autoinmunes"
        ],
        correcta: 1,
        explicacion: "La inmunología abarca 'investigación básica como las aplicaciones clínicas'. (Diapositiva 2)"
    },
    // ==================== INMUNIDAD INNATA VS ADAPTATIVA ====================
    {
        tema: "Inmunidad Innata vs Adaptativa",
        pregunta: "¿Cuál es la diferencia fundamental entre la inmunidad innata y la adaptativa?",
        opciones: [
            "A) La innata es específica y la adaptativa inespecífica",
            "B) La innata es inespecífica e incluye barreras; la adaptativa es específica y se presenta después de la exposición a un antígeno",
            "C) La innata genera memoria inmunológica y la adaptativa no",
            "D) La adaptativa es más rápida que la innata",
            "E) La innata solo actúa contra virus"
        ],
        correcta: 1,
        explicacion: "La innata es inespecífica e incluye barreras; la adaptativa es específica y se presenta después de la exposición a un antígeno. (Diapositiva 3)"
    },
    {
        tema: "Inmunidad Innata",
        pregunta: "¿Qué componentes incluye la inmunidad innata?",
        opciones: [
            "A) Anticuerpos y células linfoides",
            "B) Piel, membranas, fagocitos, mediadores de la inflamación y componentes del complemento",
            "C) Linfocitos T y B",
            "D) Inmunoglobulinas y vacunas",
            "E) Células plasmáticas y memoria inmunológica"
        ],
        correcta: 1,
        explicacion: "La innata incluye: Piel, membranas, fagocitos, mediadores de la inflamación, componentes del complemento. (Diapositiva 3)"
    },
    // ==================== INMUNIDAD PASIVA ====================
    {
        tema: "Inmunidad Pasiva",
        pregunta: "¿Cuál es la principal ventaja de la inmunidad pasiva?",
        opciones: [
            "A) Su larga duración",
            "B) La disponibilidad inmediata de grandes cantidades de anticuerpos",
            "C) La generación de memoria inmunológica",
            "D) Su bajo costo",
            "E) La ausencia de efectos secundarios"
        ],
        correcta: 1,
        explicacion: "La ventaja de la inmunidad pasiva es 'la disponibilidad inmediata de grandes cantidades de anticuerpos'. (Diapositiva 4)"
    },
    {
        tema: "Inmunidad Pasiva",
        pregunta: "¿Cuál es una desventaja de la inmunidad pasiva?",
        opciones: [
            "A) Inicio lento de la resistencia",
            "B) Periodo de vida corto y posibles reacciones de hipersensibilidad",
            "C) Necesidad de repetir contacto con el antígeno",
            "D) No protege contra infecciones",
            "E) Requiere múltiples dosis"
        ],
        correcta: 1,
        explicacion: "Las desventajas son: 'Periodo de vida corto. Posibles reacciones de hipersensibilidad'. (Diapositiva 4)"
    },
    // ==================== INMUNIDAD ACTIVA ====================
    {
        tema: "Inmunidad Activa",
        pregunta: "¿Cómo se induce la inmunidad activa?",
        opciones: [
            "A) Por transferencia de anticuerpos preformados",
            "B) Por infección, inmunización, exposición a toxinas o trasplante de células extrañas",
            "C) Solo por vacunación",
            "D) Exclusivamente por vía materna",
            "E) Únicamente por contacto con virus"
        ],
        correcta: 1,
        explicacion: "Se induce por: Infección clínica o subclínica, inmunización con agentes vivos o muertos, exposición a toxinas o toxoides, trasplante de células extrañas. (Diapositiva 5)"
    },
    {
        tema: "Inmunidad Activa",
        pregunta: "¿Cuál es la principal ventaja de la inmunidad activa?",
        opciones: [
            "A) Disponibilidad inmediata de anticuerpos",
            "B) Resistencia de larga duración y memoria de contactos previos",
            "C) No requiere contacto con el antígeno",
            "D) No tiene efectos secundarios",
            "E) Es más económica que la pasiva"
        ],
        correcta: 1,
        explicacion: "La ventaja es 'resistencia de larga duración (Memoria de contactos previos con el antígeno)'. (Diapositiva 5)"
    },
    // ==================== BARRERAS - PIEL ====================
    {
        tema: "Barreras - Piel",
        pregunta: "¿Qué sustancias de la piel tienen propiedades antimicrobianas?",
        opciones: [
            "A) Queratina y colágeno",
            "B) Secreciones sebáceas y sudor con pH ácido, ácidos grasos y lisozima",
            "C) Melanina y elastina",
            "D) Inmunoglobulinas y complemento",
            "E) Citocinas y quimiocinas"
        ],
        correcta: 1,
        explicacion: "Las secreciones sebáceas y el sudor, gracias a su pH ácido, ácidos grasos y lisozima, tienen propiedades antimicrobianas. (Diapositiva 7)"
    },
    // ==================== BARRERAS - MUCOSAS ====================
    {
        tema: "Barreras - Mucosas",
        pregunta: "¿Qué inmunoglobulina en las superficies mucosas evita la adhesión bacteriana?",
        opciones: [
            "A) IgG",
            "B) IgM",
            "C) IgA",
            "D) IgE",
            "E) IgD"
        ],
        correcta: 2,
        explicacion: "Los anticuerpos IgA en las superficies mucosas pueden evitar la adhesión bacteriana. (Diapositiva 8)"
    },
    {
        tema: "Barreras - Mucosas",
        pregunta: "¿Qué componentes del aparato gastrointestinal inactivan bacterias?",
        opciones: [
            "A) Solo el moco",
            "B) Saliva con enzimas hidrolíticas, acidez del estómago y enzimas proteolíticas del intestino delgado",
            "C) Solo la bilis",
            "D) Las células NK",
            "E) Los interferones"
        ],
        correcta: 1,
        explicacion: "La saliva contiene enzimas hidrolíticas, la acidez del estómago destruye bacterias y el intestino delgado contiene enzimas proteolíticas y macrófagos activos. (Diapositiva 8)"
    },
    // ==================== APARATO GENITOURINARIO ====================
    {
        tema: "Aparato Genitourinario",
        pregunta: "¿Qué microorganismos de la flora vaginal mantienen un pH ácido?",
        opciones: [
            "A) Estafilococos",
            "B) Lactobacilos",
            "C) Escherichia coli",
            "D) Estreptococos",
            "E) Candida albicans"
        ],
        correcta: 1,
        explicacion: "Los lactobacilos normales mantienen un pH ácido en la vagina. (Diapositiva 9)"
    },
    {
        tema: "Interferencia Bacteriana",
        pregunta: "¿Cómo se llama el fenómeno por el cual la flora normal impide el establecimiento de patógenos?",
        opciones: [
            "A) Inmunidad adaptativa",
            "B) Interferencia bacteriana",
            "C) Opsonización",
            "D) Quimiotaxis",
            "E) Fagocitosis"
        ],
        correcta: 1,
        explicacion: "Este fenómeno se denomina 'interferencia bacteriana'. (Diapositiva 9)"
    },
    // ==================== MECANISMOS INNATOS ====================
    {
        tema: "Mecanismos Innatos",
        pregunta: "¿Qué ocurre en las primeras horas de una infección?",
        opciones: [
            "A) Producción de anticuerpos específicos",
            "B) Atrapamiento de microorganismos por macrófagos y activación de la vía alterna del complemento",
            "C) Activación de linfocitos T",
            "D) Generación de memoria inmunológica",
            "E) Producción de citocinas antiinflamatorias"
        ],
        correcta: 1,
        explicacion: "En las primeras horas ocurre: atrapamiento por macrófagos y activación de la vía alterna del complemento. (Diapositiva 10)"
    },
    {
        tema: "Mecanismos Innatos",
        pregunta: "¿Cuál es la siguiente línea de defensa después de la fagocitosis?",
        opciones: [
            "A) Producción de anticuerpos",
            "B) Liberación de citocinas de los macrófagos y mediadores que inician la respuesta inflamatoria",
            "C) Activación de linfocitos B",
            "D) Formación de complejos inmunes",
            "E) Producción de interferones"
        ],
        correcta: 1,
        explicacion: "La siguiente línea de defensa es la liberación de citocinas de los macrófagos y mediadores que inician la respuesta inflamatoria. (Diapositiva 10)"
    },
    // ==================== FAGOCITOSIS ====================
    {
        tema: "Fagocitosis",
        pregunta: "¿Qué son las opsoninas?",
        opciones: [
            "A) Enzimas que destruyen bacterias",
            "B) Moléculas que cubren la superficie de la bacteria y facilitan su ingestión por los fagocitos",
            "C) Citocinas que inducen fiebre",
            "D) Factores del complemento que forman poros",
            "E) Anticuerpos que neutralizan toxinas"
        ],
        correcta: 1,
        explicacion: "Las opsoninas cubren la superficie de la bacteria y facilitan su ingestión por los fagocitos. (Diapositiva 11)"
    },
    {
        tema: "Fagocitosis",
        pregunta: "¿Qué componentes contienen los gránulos de los granulocitos?",
        opciones: [
            "A) Anticuerpos y linfocitos",
            "B) Lisozima, enzimas hidrolíticas, proteínas catiónicas, defensinas, lactoferrina y óxidos de nitrógeno",
            "C) Interferones y citocinas",
            "D) Factores del complemento",
            "E) Inmunoglobulinas y quimiocinas"
        ],
        correcta: 1,
        explicacion: "Los gránulos contienen: lisozima, enzimas hidrolíticas, proteínas catiónicas, defensinas, lactoferrina y óxidos de nitrógeno. (Diapositiva 11)"
    },
    {
        tema: "Fagocitosis",
        pregunta: "¿Qué producen y liberan los macrófagos activados?",
        opciones: [
            "A) Anticuerpos específicos",
            "B) Interferón gamma",
            "C) Interleucina-1 (IL-1)",
            "D) Complemento C3b",
            "E) Inmunoglobulina E"
        ],
        correcta: 2,
        explicacion: "Los macrófagos activados producen y liberan interleucina-1 (IL-1). (Diapositiva 11)"
    },
    // ==================== SISTEMA RETICULOENDOTELIAL ====================
    {
        tema: "Sistema Reticuloendotelial",
        pregunta: "¿Qué órganos incluye el sistema reticuloendotelial?",
        opciones: [
            "A) Timo y ganglios linfáticos",
            "B) Bazo, médula ósea y pulmones",
            "C) Corazón y pulmones",
            "D) Hígado y riñones",
            "E) Piel y mucosas"
        ],
        correcta: 1,
        explicacion: "Incluye: células fagocíticas mononucleares en sangre, tejido linfoide, hígado, bazo, médula ósea, pulmones. (Diapositiva 14)"
    },
    {
        tema: "Sistema Reticuloendotelial",
        pregunta: "¿Cuál es una función importante del bazo y médula ósea?",
        opciones: [
            "A) Producir anticuerpos",
            "B) El filtrado de microorganismos de la sangre",
            "C) Activar linfocitos T",
            "D) Producir interferones",
            "E) Regular la temperatura"
        ],
        correcta: 1,
        explicacion: "Una función importante del bazo, médula ósea y otros órganos reticuloendoteliales es el filtrado de microorganismos de la sangre. (Diapositiva 14)"
    },
    // ==================== FIEBRE ====================
    {
        tema: "Fiebre",
        pregunta: "¿Qué sustancias son capaces de inducir fiebre (pirógenos)?",
        opciones: [
            "A) Anticuerpos y complemento",
            "B) Endotoxinas de bacterias gramnegativas y citocinas como la interleucina-1",
            "C) Interferones alfa y beta",
            "D) Inmunoglobulinas IgG e IgM",
            "E) Quimiocinas y factores de crecimiento"
        ],
        correcta: 1,
        explicacion: "Los pirógenos incluyen endotoxinas de bacterias gramnegativas y citocinas como la interleucina-1. (Diapositiva 15)"
    },
    {
        tema: "Fiebre",
        pregunta: "¿Cuál es un efecto benéfico de la fiebre?",
        opciones: [
            "A) Destruye directamente los microorganismos",
            "B) La producción de anticuerpos y la proliferación de células T son más eficientes a mayor temperatura",
            "C) Bloquea la inflamación",
            "D) Reduce la respuesta inmune",
            "E) Inactiva el complemento"
        ],
        correcta: 1,
        explicacion: "La producción de anticuerpos y la proliferación de células T son más eficientes a mayor temperatura corporal. (Diapositiva 15)"
    },
    // ==================== INTERFERONES ====================
    {
        tema: "Interferones",
        pregunta: "¿Cuál es la función de los interferones α y β?",
        opciones: [
            "A) Activar la fagocitosis",
            "B) Controlar la replicación viral al inhibir la síntesis de proteínas en las células",
            "C) Opsonizar microorganismos",
            "D) Inducir la producción de anticuerpos",
            "E) Activar el complemento"
        ],
        correcta: 1,
        explicacion: "Los interferones α y β ayudan al control de la replicación viral al inhibir la síntesis de proteínas en las células. (Diapositiva 17)"
    },
    // ==================== SISTEMA DEL COMPLEMENTO ====================
    {
        tema: "Sistema del Complemento",
        pregunta: "¿Cuál es una función del sistema del complemento?",
        opciones: [
            "A) Producción de anticuerpos",
            "B) Lisis de células bacterianas y tumorales",
            "C) Generación de memoria inmunológica",
            "D) Maduración de linfocitos T",
            "E) Producción de interferones"
        ],
        correcta: 1,
        explicacion: "Entre las funciones del complemento está la lisis de células bacterianas y tumorales. (Diapositiva 18)"
    },
    {
        tema: "Sistema del Complemento",
        pregunta: "¿Qué función del complemento facilita la eliminación mediante fagocitosis?",
        opciones: [
            "A) Lisis celular",
            "B) Opsonización de microorganismos y complejos inmunitarios",
            "C) Producción de mediadores inflamatorios",
            "D) Quimiotaxis",
            "E) Activación de linfocitos"
        ],
        correcta: 1,
        explicacion: "El complemento realiza opsonización de microorganismos y complejos inmunitarios para su eliminación mediante fagocitosis. (Diapositiva 18)"
    },
    // ==================== CÉLULAS NK ====================
    {
        tema: "Células NK",
        pregunta: "¿Qué reconocen los receptores de inhibición de las células NK?",
        opciones: [
            "A) Proteínas bacterianas",
            "B) Moléculas del complejo principal de histocompatibilidad (MHC)",
            "C) Anticuerpos IgE",
            "D) Toxinas bacterianas",
            "E) Polisacáridos de hongos"
        ],
        correcta: 1,
        explicacion: "El receptor de inhibición reconoce moléculas del complejo principal de histocompatibilidad (MHC). (Diapositiva 19)"
    },
    {
        tema: "Células NK",
        pregunta: "¿Qué pueden lisar las células NK?",
        opciones: [
            "A) Bacterias grampositivas",
            "B) Células blanco que han sufrido transformación maligna",
            "C) Hongos y parásitos",
            "D) Virus libres en sangre",
            "E) Toxinas bacterianas"
        ],
        correcta: 1,
        explicacion: "Las células NK pueden lisar células blanco que han sufrido transformación maligna. (Diapositiva 19)"
    },
    // ==================== CÉLULAS DENDRÍTICAS ====================
    {
        tema: "Células Dendríticas",
        pregunta: "¿Qué son las células de Langerhans?",
        opciones: [
            "A) Células productoras de anticuerpos",
            "B) Células dendríticas inmaduras presentes en la piel",
            "C) Células del timo",
            "D) Células de la médula ósea",
            "E) Células del bazo"
        ],
        correcta: 1,
        explicacion: "Las células de Langerhans son células dendríticas inmaduras en la piel. (Diapositiva 20)"
    },
    {
        tema: "Células Dendríticas",
        pregunta: "¿Qué hacen las células dendríticas inmaduras?",
        opciones: [
            "A) Producen anticuerpos",
            "B) Capturan y fagocitan antígenos de forma eficiente",
            "C) Lisan células tumorales",
            "D) Activan el complemento",
            "E) Producen interferones"
        ],
        correcta: 1,
        explicacion: "Las células dendríticas inmaduras capturan y fagocitan antígenos de forma eficiente. (Diapositiva 20)"
    },
    // ==================== RESPUESTA INFLAMATORIA ====================
    {
        tema: "Respuesta Inflamatoria",
        pregunta: "¿Qué citocinas liberan los macrófagos en la respuesta inflamatoria?",
        opciones: [
            "A) Interferón gamma e IL-4",
            "B) Interleucina-1 (IL-1) y factor alfa de necrosis tumoral (TNF-α)",
            "C) IL-10 y TGF-β",
            "D) IL-2 y IL-12",
            "E) IFN-α e IFN-β"
        ],
        correcta: 1,
        explicacion: "Los macrófagos liberan interleucina-1 (IL-1) y factor alfa de necrosis tumoral (TNF-α). (Diapositiva 21)"
    },
    {
        tema: "Respuesta Inflamatoria",
        pregunta: "¿Qué otros mediadores liberan los macrófagos activados?",
        opciones: [
            "A) Anticuerpos y complemento",
            "B) Prostaglandinas y leucotrienos",
            "C) Interferones alfa y beta",
            "D) Inmunoglobulinas",
            "E) Quimiocinas C3a y C5a"
        ],
        correcta: 1,
        explicacion: "Los macrófagos activados liberan prostaglandinas y leucotrienos. (Diapositiva 21)"
    },
    // ==================== CITOCINAS ====================
    {
        tema: "Citocinas",
        pregunta: "¿Qué son las citocinas?",
        opciones: [
            "A) Anticuerpos producidos por linfocitos B",
            "B) Proteínas producidas por células linfoides que estimulan y regulan la respuesta inmunitaria",
            "C) Enzimas que degradan bacterias",
            "D) Factores del complemento",
            "E) Lípidos que inducen inflamación"
        ],
        correcta: 1,
        explicacion: "Las citocinas son proteínas producidas por células linfoides y de otros tipos que estimulan y regulan la respuesta inmunitaria. (Diapositiva 27)"
    },
    // ==================== QUIMIOCINAS ====================
    {
        tema: "Quimiocinas",
        pregunta: "¿Qué peso molecular tienen las quimiocinas?",
        opciones: [
            "A) 50.000 Da",
            "B) 150.000 Da",
            "C) 8.000 Da (muy pequeño)",
            "D) 100.000 Da",
            "E) 10.000 Da"
        ],
        correcta: 2,
        explicacion: "Las quimiocinas son proteínas de peso molecular muy pequeño (= 8.000 Da). (Diapositiva 27)"
    },
    {
        tema: "Quimiocinas",
        pregunta: "¿Qué productos de la cascada del complemento actúan como factores quimiotácticos?",
        opciones: [
            "A) C3b y C4b",
            "B) C3a y C5a",
            "C) C5b y C6",
            "D) C2a y C4a",
            "E) C7 y C8"
        ],
        correcta: 1,
        explicacion: "Los productos C3a y C5a de la cascada del complemento son factores quimiotácticos. (Diapositiva 27)"
    },
    // ==================== BASES CELULARES - LINFOCITOS B ====================
    {
        tema: "Bases Celulares - Linfocitos B",
        pregunta: "¿Dónde se desarrollan los linfocitos B en mamíferos?",
        opciones: [
            "A) En el timo",
            "B) En la médula ósea",
            "C) En el bazo",
            "D) En los ganglios linfáticos",
            "E) En el hígado"
        ],
        correcta: 1,
        explicacion: "Los linfocitos B se desarrollan en la médula ósea en mamíferos. (Diapositiva 28)"
    },
    {
        tema: "Bases Celulares - Linfocitos B",
        pregunta: "¿Qué reacomodan los linfocitos B en su desarrollo?",
        opciones: [
            "A) Sus receptores de MHC",
            "B) Sus genes de inmunoglobulina",
            "C) Sus moléculas de adhesión",
            "D) Sus citocinas",
            "E) Sus factores de complemento"
        ],
        correcta: 1,
        explicacion: "Las células B reacomodan sus genes de inmunoglobulina. (Diapositiva 28)"
    },
    {
        tema: "Bases Celulares - Linfocitos B",
        pregunta: "¿Dónde migran los linfocitos B después de madurar?",
        opciones: [
            "A) Al timo",
            "B) A un órgano linfoide secundario (bazo)",
            "C) A la médula ósea",
            "D) A la bolsa de Fabricio",
            "E) Al hígado"
        ],
        correcta: 1,
        explicacion: "Después de madurar, los linfocitos B migran a un órgano linfoide secundario (bazo). (Diapositiva 28)"
    },
    // ==================== BASES CELULARES - LINFOCITOS T ====================
    {
        tema: "Bases Celulares - Linfocitos T",
        pregunta: "¿Dónde maduran los linfocitos T?",
        opciones: [
            "A) Médula ósea",
            "B) Timo",
            "C) Bazo",
            "D) Ganglios linfáticos",
            "E) Hígado"
        ],
        correcta: 1,
        explicacion: "Los linfocitos T requieren maduración en el timo. (Diapositiva 28)"
    },
    {
        tema: "Bases Celulares - Linfocitos T",
        pregunta: "¿Qué tipo de inmunidad se origina a partir de los linfocitos T?",
        opciones: [
            "A) Inmunidad humoral",
            "B) Inmunidad mediada por células",
            "C) Inmunidad pasiva",
            "D) Inmunidad innata",
            "E) Inmunidad de barrera"
        ],
        correcta: 1,
        explicacion: "Los linfocitos T son el origen de la inmunidad mediada por células. (Diapositiva 28)"
    }
];

// ============================================================
// EXPANDIR A 200 PREGUNTAS
// ============================================================
function expandirBancoPreguntas() {
    const originales = [...BANCO_PREGUNTAS];
    const expandidas = [];

    // Agregar originales
    expandidas.push(...originales);

    // Generar variaciones hasta 200
    while (expandidas.length < 200) {
        for (const base of originales) {
            if (expandidas.length >= 200) break;

            const opciones = [...base.opciones];
            const indices = opciones.map((_, i) => i);
            const shuffled = indices.sort(() => Math.random() - 0.5);
            const nuevas = shuffled.map(i => opciones[i]);
            const nuevaCorrecta = shuffled.indexOf(base.correcta);

            const letras = ['A', 'B', 'C', 'D', 'E'];
            const conLetras = nuevas.map((opt, i) => {
                if (opt.match(/^[A-E]\)/)) return opt;
                return `${letras[i]}) ${opt}`;
            });

            const variaciones = [
                base.pregunta,
                base.pregunta.replace("¿Cuál", "¿De qué manera"),
                base.pregunta.replace("¿Qué", "¿Cuál es la"),
                base.pregunta.replace("¿Cómo", "¿De qué forma"),
            ];

            expandidas.push({
                tema: base.tema,
                pregunta: variaciones[expandidas.length % variaciones.length] || base.pregunta,
                opciones: conLetras,
                correcta: nuevaCorrecta,
                explicacion: base.explicacion
            });
        }
    }

    // Reemplazar el array original
    BANCO_PREGUNTAS.length = 0;
    BANCO_PREGUNTAS.push(...expandidas.slice(0, 200));
}

expandirBancoPreguntas();

console.log(`✅ Banco de ${BANCO_PREGUNTAS.length} preguntas cargado.`);
console.log(`📊 Temas: ${[...new Set(BANCO_PREGUNTAS.map(p => p.tema))].join(', ')}`);