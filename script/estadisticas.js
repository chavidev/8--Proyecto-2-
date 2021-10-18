//console.log("hola colega");
calcularEstadisticas ()
//console.log(calcularEstadisticas ())
function calcularEstadisticas (){
  let mediaGoles = {}
  for(let i=0 ; i<data.matches.length ;i++){
    jornada = data.matches[i].matchday;
    equipoLocal = data.matches[i].homeTeam.name;
    idEquipoLocal = data.matches[i].homeTeam.id;
    equipoVisitante = data.matches[i].awayTeam.name;
    idEquipoVisitante = data.matches[i].awayTeam.id;
    golesLocal = data.matches[i].score.fullTime.homeTeam;
    golesVisitante = data.matches[i].score.fullTime.awayTeam
  
    //document.write(`${jornada } ${equipoLocal}${golesLocal}<br>`)               
    //document.write("hola colega")
    //console.log("hola colega")
    //console.log(data);
    mediaGoles[idEquipoLocal] += golesLocal ;
    //mediaGoles[idEquipoLocal].partidos += 1 ;
    mediaGoles[idEquipoVisitante] += golesVisitante ;
    //mediaGoles[idEquipoVisitante].partidos += 1 ;
    //typeof(golesLocal)
    //console.log(golesLocal)
    if (typeof(golesLocal) === 'number' ){
      //console.log(golesLocal)

      if (mediaGoles[idEquipoLocal] > 0){
        let golesTotal = 0
        let acumulados = mediaGoles[idEquipoLocal] ;
        golesTotal = mediaGoles[idEquipoLocal] + golesLocal ;
        //mediaGoles[idEquipoLocal] = golesTotal ;
        mediaGoles[idEquipoLocal] += golesLocal
        console.log(`
          jornada=${jornada} 
          
          equipoLocal=${equipoLocal}
          golesLocal=${golesLocal}
          acumulados=${acumulados}  
          golesTotal=${golesTotal} 
          mediaGoles[idEquipoLocal]=${mediaGoles[idEquipoLocal]} \n \n \n
        `)
      } else {
        mediaGoles[idEquipoLocal] = golesLocal
      }
      
    }
  }
  return mediaGoles
}

//console.log(data);

//console.log(data.matches.length)