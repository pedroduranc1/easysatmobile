export function ConvertMonth(mes) {
  let MesEspa;

  if (mes == "weekly") {
    MesEspa = "Semanal";
  } else if (mes == "monthly") {
    MesEspa = "Mensual";
  } else if (mes == "yearly") {
    MesEspa = "Anual";
  } else {
    MesEspa = "Todo";
  }

  return MesEspa;
}

export function obtenerResumenAnual(data) {
  // Obtener el año actual
  const añoActual = new Date().getFullYear();

  // Filtrar los datos por el año actual
  const datosAñoActual = data?.filter((item) => new Date(item.fecha).getFullYear() === añoActual);

  // Inicializar ventas y gastos totales
  let ventasTotales = 0;
  let gastosTotales = 0;

  // Sumar los ingresos y gastos
  datosAñoActual?.forEach((item) => {
    ventasTotales += item.ventas;
    gastosTotales += item.gastos;
  });

  // Obtener el mes actual
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  const mesActual = meses[new Date().getMonth()];

  // Crear el objeto de resumen
  const resumen = {
    ventas: ventasTotales,
    gastos: gastosTotales,
    mes: mesActual,
    year: añoActual,
  };

  return resumen;
}

export function calcularSumasMensuales(data) {
  const meses = {};

  // Nombres de los meses
  const nombresMeses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  // Itera sobre los datos
  data.forEach((item) => {
    const fecha = new Date(item.fecha);
    const año = fecha.getFullYear();
    const mes = nombresMeses[fecha.getMonth()]; // Obtén el nombre del mes

    const claveMes = `${año}-${mes}`;

    if (!meses[claveMes]) {
      meses[claveMes] = {
        mes: mes,
        year: año,
        ventas: 0,
        gastos: 0,
      };
    }

    meses[claveMes].ventas += item.ventas;
    meses[claveMes].gastos += item.gastos;
  });

  const resultado = Object.values(meses);

  // Ordena por año y mes
  resultado.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    const mesA = nombresMeses.indexOf(a.mes);
    const mesB = nombresMeses.indexOf(b.mes);
    return mesA - mesB;
  });

  return resultado;
}

export function calcularSumasAnuales(data) {
  const años = {};

  // Itera sobre los datos
  data.forEach((item) => {
    const fecha = new Date(item.fecha);
    const año = fecha.getFullYear();

    if (!años[año]) {
      años[año] = {
        year: año,
        ventas: 0,
        gastos: 0,
      };
    }

    años[año].ventas += item.ventas;
    años[año].gastos += item.gastos;
  });

  const resultado = Object.values(años);

  // Ordena por año
  resultado.sort((a, b) => {
    return a.year - b.year;
  });

  return resultado;
}

export function obtenerMes(fecha) {
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const fechaObjeto = new Date(fecha);
  const mes = fechaObjeto.getMonth();
  return meses[mes];
}

