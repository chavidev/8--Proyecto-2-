//console.log("hola colega");
calcularEstadisticas ()
//console.log(calcularEstadisticas ())
function calcularEstadisticas (){
  let medirGoles = {}
  for(let i=0 ; i<data.matches.length ;i++){
    jornada = data.matches[i].matchday;
    equipoLocal = data.matches[i].homeTeam.name;
    idEquipoLocal = data.matches[i].homeTeam.id.toString();
    equipoVisitante = data.matches[i].awayTeam.name;
    idEquipoVisitante = data.matches[i].awayTeam.id.toString();
    golesLocal = data.matches[i].score.fullTime.homeTeam;
    golesVisitante = data.matches[i].score.fullTime.awayTeam
  
    //document.write(`${jornada } ${equipoLocal}${golesLocal}<br>`)               
    //document.write("hola colega")
    //console.log("hola colega")
    //console.log(data);
    //   &&&&medirGoles[idEquipoLocal] += golesLocal ;
    //medirGoles[idEquipoLocal].partidos += 1 ;
    //medirGoles[idEquipoVisitante] += golesVisitante ;
    //   &&&&medirGoles[idEquipoVisitante].partidos += 1 ;
    //typeof(golesLocal)
    //console.log(golesLocal)

    //if (medirGoles[idEquipoLocal].goles !== undefined ){
    //if(typeof(medirGoles[idEquipoLocal].goles) === number){
    
    
    //pendiente de finalizar con hasOwnProperty 
/*     const obj = { answer: 42 };
'answer' in obj; // true
obj.hasOwnProperty('answer'); // true
 */

//solución pasar los números de las keys a strings

    if((medirGoles[idEquipoLocal].hasOwnProperty(idEquipoLocal))){
      medirGoles[idEquipoLocal] = {goles:golesLocal}
    } else {
      if (medirGoles[idEquipoLocal].goles >= 0){
        let golesTotal = 0
        let acumulados = medirGoles[idEquipoLocal].goles ;
        golesTotal = medirGoles[idEquipoLocal].goles + golesLocal ;
        //medirGoles[idEquipoLocal] = golesTotal ;
        medirGoles[idEquipoLocal].goles += golesLocal
        console.log(`
          jornada=${jornada}
          equipoLocal=${equipoLocal}
          golesLocal=${golesLocal}
          acumulados=${acumulados}  
          golesTotal=${golesTotal} 
          medirGoles[idEquipoLocal].goles=${medirGoles[idEquipoLocal].goles} \n \n \n
        `)
      } 
    }
  }
  
}





//console.log(data);

//console.log(data.matches.length)