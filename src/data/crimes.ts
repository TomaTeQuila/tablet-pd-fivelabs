export interface Crime {
  reason: string;
  date: string;
  hour: string;
  details: string;
  conviction: string;
  fine: string;
}

export const crimes = {
  Z1001: [
    {
      reason: 'Robo con violencia',
      date: '2023-05-12',
      hour: '22:15',
      details: 'Asaltó a un peatón en sector céntrico de la ciudad y sustrajo sus pertenencias',
      conviction: '1 año de libertad vigilada',
      fine: '200.000 CLP'
    },
    {
      reason: 'Conducción bajo efecto de alcohol',
      date: '2022-11-03',
      hour: '03:40',
      details: 'Fue detenido manejando con 1.5 g/L de alcohol en sangre tras colisionar un vehículo estacionado',
      conviction: '6 meses de prisión remitida',
      fine: '100.000 CLP'
    }
  ],
  Z1002: [
    {
      reason: 'Vandalismo',
      date: '2023-09-07',
      hour: '01:20',
      details: 'Pintó grafitis en edificio patrimonial del casco histórico',
      conviction: '120 horas de trabajos comunitarios',
      fine: '150.000 CLP'
    },
    {
      reason: 'Robo armado',
      date: '2024-02-07',
      hour: '05:22',
      details: 'Robo con pistola de bajo calibre 9mm',
      conviction: '120 meses',
      fine: '850000$'
    }
  ],
  Z1003: [
    {
      reason: 'Hurto simple',
      date: '2024-01-18',
      hour: '16:50',
      details: 'Sustrajo productos de un supermercado sin pasar por caja',
      conviction: 'Libertad vigilada por 8 meses',
      fine: '80.000 CLP'
    }
  ],
  Z1004: [
    {
      reason: 'Fraude',
      date: '2023-12-21',
      hour: '10:30',
      details: 'Emitió boletas ideológicamente falsas para su empresa',
      conviction: '1 año de prisión conmutada',
      fine: '500.000 CLP'
    }
  ],
  Z1005: [
    {
      reason: 'Posesión de drogas',
      date: '2022-07-15',
      hour: '18:05',
      details: 'Fue sorprendido con pequeñas dosis de cannabis',
      conviction: 'Tratamiento obligatorio de 6 meses',
      fine: '50.000 CLP'
    }
  ],
  Z1006: [
    {
      reason: 'Violencia intrafamiliar',
      date: '2023-03-22',
      hour: '21:00',
      details: 'Agresión física a su pareja',
      conviction: '300 horas de trabajos comunitarios',
      fine: '120.000 CLP'
    }
  ],
  Z1007: [
    {
      reason: 'Tráfico de animales',
      date: '2022-10-05',
      hour: '14:45',
      details: 'Transportaba aves protegidas sin autorización',
      conviction: 'Libertad vigilada por 1 año',
      fine: '250.000 CLP'
    }
  ],
  Z1008: [
    {
      reason: 'Asalto',
      date: '2024-02-02',
      hour: '02:30',
      details: 'Ingresó a una vivienda y amenazó a sus ocupantes con arma blanca',
      conviction: '2 años de prisión efectiva',
      fine: '0 CLP'
    }
  ],
  Z1009: [
    {
      reason: 'Evasión de impuestos',
      date: '2023-08-30',
      hour: '11:15',
      details: 'No declaró ingresos de su negocio durante el ejercicio fiscal',
      conviction: 'Multa duplicada y 6 meses de suspensión de actividades',
      fine: '1.000.000 CLP'
    }
  ],
  Z1010: [
    {
      reason: 'Daños a propiedad pública',
      date: '2024-03-10',
      hour: '23:55',
      details: 'Rompió ventanas de paradas de bus durante manifestación',
      conviction: '150 horas de trabajos comunitarios',
      fine: '200.000 CLP'
    }
  ],
  Z1011: [
    {
      reason: 'Contrabando',
      date: '2022-06-12',
      hour: '05:20',
      details: 'Ingresó mercancía sin declaración aduanera',
      conviction: '1 año de libertad vigilada',
      fine: '750.000 CLP'
    }
  ],
  Z1012: [
    {
      reason: 'Hurto agravado',
      date: '2023-11-11',
      hour: '19:40',
      details: 'Robó artículos de alto valor con intimidación',
      conviction: '3 años de prisión conmutada',
      fine: '300.000 CLP'
    }
  ],
  Z1013: [
    {
      reason: 'Robo en lugar habitado',
      date: '2024-04-01',
      hour: '04:10',
      details: 'Forzó la puerta de una casa y sustrajo objetos de valor',
      conviction: '4 años de prisión efectiva',
      fine: '0 CLP'
    }
  ],
  Z1014: [
    {
      reason: 'Conducta molesta',
      date: '2022-09-18',
      hour: '22:00',
      details: 'Perturbó la paz en local nocturno',
      conviction: '50 horas de trabajo comunitario',
      fine: '30.000 CLP'
    }
  ],
  Z1015: [
    {
      reason: 'Violencia en eventos deportivos',
      date: '2023-10-20',
      hour: '20:30',
      details: 'Se peleó con otros hinchas dentro del estadio',
      conviction: '75 horas trabajos comunitarios',
      fine: '100.000 CLP'
    }
  ],
  Z1016: [
    {
      reason: 'Robo de vehículo',
      date: '2023-01-07',
      hour: '06:50',
      details: 'Sustrajo un automóvil estacionado en la vía pública',
      conviction: '2 años de prisión efectiva',
      fine: '0 CLP'
    }
  ],
  Z1017: [
    {
      reason: 'Posesión de arma prohibida',
      date: '2022-12-02',
      hour: '15:15',
      details: 'Portaba un arma de fuego sin licencia',
      conviction: '1 año de prisión remitida',
      fine: '400.000 CLP'
    }
  ],
  Z1018: [
    {
      reason: 'Fraude bancario',
      date: '2024-05-05',
      hour: '09:25',
      details: 'Intentó transferir fondos de otra cuenta sin autorización',
      conviction: '2 años de libertad vigilada',
      fine: '600.000 CLP'
    }
  ],
  Z1019: [
    {
      reason: 'Daño a bienes culturales',
      date: '2023-02-28',
      hour: '13:40',
      details: 'Dañó esculturas de museo con aerosol',
      conviction: 'Libertad vigilada por 1 año',
      fine: '350.000 CLP'
    }
  ],
  Z1020: [
    {
      reason: 'Tráfico de influencias',
      date: '2022-08-22',
      hour: '11:00',
      details: 'Intercedió para favorecer a empresa en licitación pública',
      conviction: '1.5 años de prisión remitida',
      fine: '900.000 CLP'
    }
  ]
};
