
//aquí activo los partidos para generar las estadísticas
(async function(){
  let data = await getData({endPoint:"matches"})
  let arrayGoles = contarGoles (data.matches);  
  calcularAvg (arrayGoles);  
  let arrayAvg = ordenarAvg(arrayGoles);   
  crearTablaAvg(arrayAvg);

  let arrayGolesRecibidosFuera = ordenarGolesRecibidosFuera (arrayGoles);    
  crearTablaGoleados (arrayGolesRecibidosFuera);
})()
