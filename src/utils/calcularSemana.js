export function calcularSumasSemanas(data) {
    const semanas = {};
  
    // Mapea nombres de meses
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    // Itera sobre los datos
    data.forEach((item) => {
      const fecha = new Date(item.fecha);
      const semana = `${fecha.getFullYear()}-${fecha.getWeek()}`;
      const diaSemana = fecha.getDay(); // Día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
      const mes = meses[fecha.getMonth()];
  
      const inicioSemana = new Date(fecha);
      inicioSemana.setDate(fecha.getDate() - diaSemana);
      const finSemana = new Date(fecha);
      finSemana.setDate(fecha.getDate() + (6 - diaSemana));
  
      let rangoSemana;
      if (inicioSemana.getMonth() === finSemana.getMonth()) {
        rangoSemana = `${mes} ${inicioSemana.getDate()} - ${finSemana.getDate()}, ${fecha.getFullYear()}`;
      } else {
        // Si el rango cruza dos meses, ajusta el mes en el rango
        if (inicioSemana.getDate() > finSemana.getDate()) {
          rangoSemana = `${meses[inicioSemana.getMonth()]} ${inicioSemana.getDate()} - ${meses[finSemana.getMonth()]} ${finSemana.getDate()}, ${fecha.getFullYear()}`;
        } else {
          rangoSemana = `${meses[inicioSemana.getMonth()]} ${inicioSemana.getDate()} - ${meses[inicioSemana.getMonth()]} ${finSemana.getDate()}, ${fecha.getFullYear()}`;
        }
      }
  
      if (!semanas[rangoSemana]) {
        semanas[rangoSemana] = {
          mes: mes,
          anio: fecha.getFullYear(),
          rangoSemana: rangoSemana,
          ventas: 0,
          gastos: 0,
        };
      }
  
      semanas[rangoSemana].ventas += item.ventas;
      semanas[rangoSemana].gastos += item.gastos;
    });
  
    const resultado = Object.values(semanas);
  
    // Ordena por año y fecha del rangoSemana
    resultado.sort((a, b) => {
      if (a.anio !== b.anio) {
        return a.anio - b.anio;
      }
      const fechaA = new Date(a.rangoSemana.split(" ")[3]);
      const fechaB = new Date(b.rangoSemana.split(" ")[3]);
      return fechaA - fechaB;
    });
  
    return resultado;
  }
  
  // Agregar un método para obtener el número de semana del año
  Date.prototype.getWeek = function() {
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
  };
  