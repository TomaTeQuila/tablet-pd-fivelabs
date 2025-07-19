export interface Vehicle {
  model: string;
  type: string;
  plate: string;
  color: string;
  image: string;
  notes?: string;
}

const base = "https://raw.githubusercontent.com/MericcaN41/gta5carimages/main/images";

export const vehicles: Record<string, Vehicle[]> = {
  Z1001: [
    {
      model: "Blista",
      type: "Compact",
      plate: "LGZ-214",
      color: "Rojo perlado",
      image: `${base}/blista.png`,
      notes: "Compacto urbano."
    }
  ],
  Z1002: [
    {
      model: "kuruma",
      type: "Sedan",
      plate: "CRM-842",
      color: "Negro mate",
      image: `${base}/kuruma.png`,
      notes: "Blindaje ligero aftermarket."
    },
    {
      model: "kuruma",
      type: "Sedan",
      plate: "SBM-122",
      color: "Negro mate",
      image: `${base}/kuruma.png`,
      notes: "Blindaje ligero aftermarket."
    },
    {
      model: "faggio",
      type: "Motorcycle",
      plate: "CDM-844",
      color: "Azul",
      image: `${base}/faggio.png`,
      notes: "Moto rappi"
    },
    {
      model: "sultan",
      type: "Sports",
      plate: "RSX-905",
      color: "Gris grafito",
      image: `${base}/sultanrs.png`,
      notes: "Setup rally calle."
    }
  ],
  Z1003: [
    {
      model: "Sanchez",
      type: "Motorcycle",
      plate: "MTP-081",
      color: "Amarillo / Negro",
      image: `${base}/sanchez.png`,
      notes: "Alta velocidad, sin modificaciones."
    },
    {
      model: "Blista",
      type: "Motorcycle",
      plate: "WEC-000",
      color: "le gustan negro",
      image: `${base}/blista.png`,
      notes: "Alta velocidad, sin modificaciones."
    }
  ],
  Z1004: [
    {
      model: "Futo",
      type: "Coupe",
      plate: "FT0-432",
      color: "Blanco clásico",
      image: `${base}/futo.png`,
      notes: "Ligero, ideal drift."
    }
  ],
  Z1005: [
    {
      model: "Issi",
      type: "Compact",
      plate: "ISS-665",
      color: "Verde lima",
      image: `${base}/issi.png`,
      notes: "Personalización cosmética mínima."
    }
  ],
  Z1006: [
    {
      model: "Rebel (Clean)",
      type: "Off-Road",
      plate: "RBL-210",
      color: "Arena",
      image: `${base}/rebel.png`, // si no existe, prueba rebel2.png
      notes: "Suspensión estándar."
    }
  ],
  Z1007: [
    {
      model: "Coquette",
      type: "Sports",
      plate: "CQE-900",
      color: "Naranja metálico",
      image: `${base}/coquette.png`,
      notes: "Paquete aerodinámico."
    }
  ],
  Z1008: [
    {
      model: "Granger",
      type: "SUV",
      plate: "GRN-584",
      color: "Negro",
      image: `${base}/granger.png`,
      notes: "Ideal para transporte de equipo."
    }
  ],
  Z1009: [
    {
      model: "Tailgater",
      type: "Sedan",
      plate: "TLG-118",
      color: "Azul marino",
      image: `${base}/tailgater.png`,
      notes: "Confort + discreción."
    }
  ],
  Z1010: [
    {
      model: "Felon GT",
      type: "Coupe",
      plate: "FLN-007",
      color: "Burdeos perlado",
      image: `${base}/felongt.png`, // si falla: felon2.png
      notes: "Convertible."
    }
  ],
  Z1011: [
    {
      model: "Baller",
      type: "SUV",
      plate: "BAL-640",
      color: "Champagne",
      image: `${base}/baller.png`, // hay variantes baller2..5
      notes: "Versión base."
    }
  ],
  Z1012: [
    {
      model: "Sentinel XS",
      type: "Coupe",
      plate: "SNX-333",
      color: "Plata",
      image: `${base}/sentinelxs.png`, // si falla: sentinel.png o sentinel2.png
      notes: "Llantas deportivas."
    }
  ],
  Z1013: [
    {
      model: "Carbonizzare",
      type: "Sports",
      plate: "CBN-420",
      color: "Rojo vino",
      image: `${base}/carbonizzare.png`,
      notes: "Capó de fibra."
    }
  ],
  Z1014: [
    {
      model: "Bison",
      type: "Van",
      plate: "BSN-274",
      color: "Gris acero",
      image: `${base}/bison.png`,
      notes: "Uso mixto carga."
    }
  ],
  Z1015: [
    {
      model: "Zion Cabrio",
      type: "Coupe",
      plate: "ZIO-615",
      color: "Blanco perla",
      image: `${base}/zioncabrio.png`, // si falla: zion2.png
      notes: "Techo retráctil."
    }
  ],
  Z1016: [
    {
      model: "Buffalo S",
      type: "Sports",
      plate: "BFS-951",
      color: "Azul oscuro",
      image: `${base}/buffalos.png`, // si falla: buffalo2.png
      notes: "Stage 2 tuning."
    }
  ],
  Z1017: [
    {
      model: "Prairie",
      type: "Compact",
      plate: "PRR-128",
      color: "Amarillo pastel",
      image: `${base}/prairie.png`,
      notes: "Stock."
    }
  ],
  Z1018: [
    {
      model: "Schafter",
      type: "Sedan",
      plate: "SCH-404",
      color: "Negro metálico",
      image: `${base}/schafter.png`,
      notes: "Uso ejecutivo."
    }
  ],
  Z1019: [
    {
      model: "Fugitive",
      type: "Sedan",
      plate: "FGT-912",
      color: "Verde oscuro",
      image: `${base}/fugitive.png`,
      notes: "Motor stock."
    }
  ],
  Z1020: [
    {
      model: "Mesa",
      type: "Off-Road",
      plate: "MSA-777",
      color: "Caqui",
      image: `${base}/mesa.png`,
      notes: "Suspensión elevada."
    }
  ]
};
