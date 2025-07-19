export interface PenalCode {
    id: number;
    name: string;
    description: string;
    category?: string;
    fine: number;
    prison: number;
}

export const penal_codes: PenalCode[] = [
  // === ROBO / HURTO ===
  {
    id: 1,
    name: "Robo con Intimidación",
    description: "Sustrae bienes usando amenazas directas contra la víctima.",
    category: "Robo",
    fine: 2500,
    prison: 18
  },
  {
    id: 2,
    name: "Robo con Violencia",
    description: "Sustracción de bienes usando fuerza física o lesiones.",
    category: "Robo",
    fine: 3000,
    prison: 24
  },
  {
    id: 3,
    name: "Robo en Lugar Habitado",
    description: "Ingreso no autorizado a vivienda ocupada para sustraer bienes.",
    category: "Robo",
    fine: 2200,
    prison: 16
  },
  {
    id: 4,
    name: "Robo en Lugar No Habitado",
    description: "Sustracción de bienes desde local, bodega u otro recinto cerrado sin moradores.",
    category: "Robo",
    fine: 1700,
    prison: 12
  },
  {
    id: 5,
    name: "Hurto Simple",
    description: "Sustracción sin violencia de bienes de menor cuantía.",
    category: "Hurto",
    fine: 600,
    prison: 4
  },
  {
    id: 6,
    name: "Hurto Agravado",
    description: "Hurto cometido con uso de ganzúas, llaves falsas o aprovechando desastre.",
    category: "Hurto",
    fine: 1200,
    prison: 8
  },
  {
    id: 7,
    name: "Receptación",
    description: "Posee, compra o vende bienes proveniente de delito patrimonial con conocimiento.",
    category: "Robo",
    fine: 1400,
    prison: 10
  },

  // === ESTAFAS / FRAUDES / ECONÓMICOS ===
  {
    id: 8,
    name: "Estafa Básica",
    description: "Obtiene beneficio económico mediante engaño directo a la víctima.",
    category: "Estafa",
    fine: 1500,
    prison: 10
  },
  {
    id: 9,
    name: "Fraude Informático",
    description: "Manipulación o alteración de datos o sistemas para obtener ganancias.",
    category: "Cibercrimen",
    fine: 2200,
    prison: 14
  },
  {
    id: 10,
    name: "Falsificación de Documento Público",
    description: "Elabora o altera documento oficial para obtener ventajas.",
    category: "Estafa",
    fine: 1800,
    prison: 12
  },
  {
    id: 11,
    name: "Falsificación de Documento Privado",
    description: "Altera contrato, boleta u otro documento privado.",
    category: "Estafa",
    fine: 1200,
    prison: 8
  },
  {
    id: 12,
    name: "Uso Malicioso de Documento Falso",
    description: "Presenta documento falsificado a autoridad o tercero.",
    category: "Estafa",
    fine: 1400,
    prison: 9
  },
  {
    id: 13,
    name: "Lavado de Activos",
    description: "Oculta origen ilícito de fondos o bienes mediante operaciones.",
    category: "Económico",
    fine: 4000,
    prison: 30
  },
  {
    id: 14,
    name: "Evasión de Impuestos",
    description: "Omisión intencional de declarar ingresos o pago de tributos debidos.",
    category: "Económico",
    fine: 3000,
    prison: 18
  },

  // === VIOLENCIA / PERSONAS ===
  {
    id: 15,
    name: "Lesiones Leves",
    description: "Causa daño físico menor que no compromete seriamente la salud.",
    category: "Violencia",
    fine: 800,
    prison: 4
  },
  {
    id: 16,
    name: "Lesiones Graves",
    description: "Provoca daño corporal con incapacidad prolongada o riesgo vital.",
    category: "Violencia",
    fine: 2500,
    prison: 20
  },
  {
    id: 17,
    name: "Amenazas Simples",
    description: "Intimida verbal o gestualmente sin materializar daño inmediato.",
    category: "Violencia",
    fine: 500,
    prison: 2
  },
  {
    id: 18,
    name: "Secuestro Simple",
    description: "Priva de libertad a una persona sin autorización.",
    category: "Violencia",
    fine: 5000,
    prison: 40
  },
  {
    id: 19,
    name: "Violencia Intrafamiliar",
    description: "Agresión física o psicológica a conviviente o familiar directo.",
    category: "Violencia",
    fine: 1600,
    prison: 12
  },

  // === ARMAS / MUNICIONES ===
  {
    id: 20,
    name: "Porte Ilegal de Arma de Fuego",
    description: "Porta arma de fuego sin licencia o autorización válida.",
    category: "Armas",
    fine: 2400,
    prison: 14
  },
  {
    id: 21,
    name: "Tráfico Ilegal de Armas",
    description: "Distribuye o comercializa armas sin autorización.",
    category: "Armas",
    fine: 5000,
    prison: 36
  },
  {
    id: 22,
    name: "Disparos Injustificados",
    description: "Realiza detonaciones en vía pública sin causa legítima.",
    category: "Armas",
    fine: 1500,
    prison: 10
  },

  // === DROGAS ===
  {
    id: 23,
    name: "Posesión Simple de Sustancias",
    description: "Tenencia de pequeñas cantidades para consumo personal.",
    category: "Drogas",
    fine: 700,
    prison: 2
  },
  {
    id: 24,
    name: "Tráfico de Sustancias",
    description: "Distribuye, transporta o vende sustancias ilícitas.",
    category: "Drogas",
    fine: 4500,
    prison: 34
  },
  {
    id: 25,
    name: "Cultivo No Autorizado",
    description: "Produce plantas para generar sustancias prohibidas sin permiso.",
    category: "Drogas",
    fine: 1800,
    prison: 12
  },
  {
    id: 26,
    name: "Producción de Sustancias Sintéticas",
    description: "Opera laboratorio clandestino de drogas.",
    category: "Drogas",
    fine: 6000,
    prison: 42
  },

  // === TRÁNSITO / VEHÍCULOS ===
  {
    id: 27,
    name: "Conducción en Estado de Ebriedad",
    description: "Maneja vehículo superando límite legal de alcohol.",
    category: "Tránsito",
    fine: 1300,
    prison: 6
  },
  {
    id: 28,
    name: "Conducción Bajo Influencia de Drogas",
    description: "Maneja tras consumo de sustancias que alteran capacidades.",
    category: "Tránsito",
    fine: 1500,
    prison: 8
  },
  {
    id: 29,
    name: "Exceso de Velocidad Grave",
    description: "Supera en >40% el límite de velocidad permitido.",
    category: "Tránsito",
    fine: 900,
    prison: 3
  },
  {
    id: 30,
    name: "Fuga tras Accidente",
    description: "Abandona el lugar tras causar daños o lesiones.",
    category: "Tránsito",
    fine: 2000,
    prison: 12
  },
  {
    id: 31,
    name: "Conducción Temeraria",
    description: "Maneja poniendo en riesgo evidente a terceros.",
    category: "Tránsito",
    fine: 1100,
    prison: 5
  },

  // === ORDEN PÚBLICO ===
  {
    id: 32,
    name: "Desórdenes Públicos",
    description: "Altera el orden en vía pública con actos disruptivos.",
    category: "Orden Público",
    fine: 600,
    prison: 2
  },
  {
    id: 33,
    name: "Resistencia a la Autoridad",
    description: "Se opone activamente a instrucción legítima de funcionario.",
    category: "Orden Público",
    fine: 1000,
    prison: 6
  },
  {
    id: 34,
    name: "Obstrucción a la Justicia",
    description: "Oculta pruebas o entorpece investigación.",
    category: "Orden Público",
    fine: 1700,
    prison: 10
  },
  {
    id: 35,
    name: "Falsa Denuncia",
    description: "Entrega deliberadamente denuncias o reportes falsos.",
    category: "Orden Público",
    fine: 800,
    prison: 3
  },

  // === ADMINISTRACIÓN / CORRUPCIÓN ===
  {
    id: 36,
    name: "Cohecho Activo",
    description: "Ofrece o entrega beneficio a funcionario para alterar acto.",
    category: "Corrupción",
    fine: 3500,
    prison: 20
  },
  {
    id: 37,
    name: "Cohecho Pasivo",
    description: "Funcionario solicita o recibe beneficio para favorecer a tercero.",
    category: "Corrupción",
    fine: 3500,
    prison: 22
  },
  {
    id: 38,
    name: "Abuso de Función Pública",
    description: "Funcionario excede atribuciones causando perjuicio.",
    category: "Corrupción",
    fine: 2500,
    prison: 14
  },
  {
    id: 39,
    name: "Malversación de Fondos",
    description: "Desvía o utiliza fondos públicos para fines privados.",
    category: "Corrupción",
    fine: 5000,
    prison: 30
  },

  // === CIBERCRIMEN ADICIONAL ===
  {
    id: 40,
    name: "Acceso Ilícito a Sistema",
    description: "Ingresa a sistema protegido sin autorización.",
    category: "Cibercrimen",
    fine: 1300,
    prison: 8
  },
  {
    id: 41,
    name: "Daño a Infraestructura Digital",
    description: "Interrumpe servicios críticos mediante ataques.",
    category: "Cibercrimen",
    fine: 3200,
    prison: 18
  },
  {
    id: 42,
    name: "Phishing",
    description: "Obtiene credenciales engañando a usuarios.",
    category: "Cibercrimen",
    fine: 1100,
    prison: 6
  },

  // === CONTRABANDO / ADUANAS ===
  {
    id: 43,
    name: "Contrabando Básico",
    description: "Ingreso de mercancías sin declarar su valor real.",
    category: "Contrabando",
    fine: 2000,
    prison: 8
  },
  {
    id: 44,
    name: "Contrabando de Bienes Restringidos",
    description: "Tráfico de productos regulados (químicos, piezas críticas).",
    category: "Contrabando",
    fine: 4000,
    prison: 20
  },

  // === AMBIENTAL ===
  {
    id: 45,
    name: "Vertido Ilegal",
    description: "Descarga residuos en zonas no autorizadas.",
    category: "Ambiental",
    fine: 1600,
    prison: 6
  },
  {
    id: 46,
    name: "Caza Ilegal",
    description: "Captura de fauna protegida sin permiso.",
    category: "Ambiental",
    fine: 1400,
    prison: 5
  },

  // === OTROS ===
  {
    id: 47,
    name: "Usurpación de Identidad",
    description: "Utiliza datos personales de un tercero para obtener ventajas.",
    category: "Otros",
    fine: 1300,
    prison: 8
  },
  {
    id: 48,
    name: "Daños a Propiedad Pública",
    description: "Destruye o deteriora mobiliario o infraestructura estatal.",
    category: "Otros",
    fine: 1200,
    prison: 6
  },
  {
    id: 49,
    name: "Allanamiento de Morada",
    description: "Ingresa a propiedad ajena sin autorización ni causa legítima.",
    category: "Otros",
    fine: 1500,
    prison: 10
  },
  {
    id: 50,
    name: "Desacato",
    description: "Desobedece resolución o mandato expreso de autoridad judicial.",
    category: "Otros",
    fine: 1700,
    prison: 12
  }
];