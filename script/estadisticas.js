/* 
{
  id:
  nombre:
  totalGolesMarcados:
  golesRecibidosFuera:
  avg:
}
 */
let arrayGoles = [];

contarGoles ();
console.log(arrayGoles)

function contarGoles (){  
  for(let i=0 ; i<data.matches.length ;i++){
    let jornada, equipoLocal, idEquipoLocal, equipoVisitante, idEquipoVisitante, golesLocal, golesVisitante  
    jornada = data.matches[i].matchday;
    equipoLocal = data.matches[i].homeTeam.name;
    idEquipoLocal = data.matches[i].homeTeam.id;
    equipoVisitante = data.matches[i].awayTeam.name;
    idEquipoVisitante = data.matches[i].awayTeam.id;
    golesLocal = data.matches[i].score.fullTime.homeTeam;
    golesVisitante = data.matches[i].score.fullTime.awayTeam  
    /* 
    console.log(`
      jornada=${jornada}
      equipoLocal=${equipoLocal}
      golesLocal=${golesLocal}         
    `)
     */
    if(golesLocal === null){
      console.log("Ups con los null paso de hacer nada")
    } else {
      recorrerArrayGoles({"id": idEquipoLocal, "nombre":equipoLocal, "golesPartido":golesLocal});
    } 
      /* 
        acumulados=${acumulados}  
        golesTotal=${golesTotal} 
        medirGoles[idEquipoLocal].goles=${medirGoles[idEquipoLocal].goles} \n \n \n  
      */
  }  
}

function recorrerArrayGoles(Obj){
  for (let j = 0; j < arrayGoles.length ; j++){
    if ((arrayGoles[j].id === Obj.id)){
      arrayGoles[j].totalGolesMarcados += Obj.golesPartido
      //no entiendo por qué aparece mas de 20 veces
      console.log("antes del retunr, estoy inyectando un nuevo objeto")
      return
      console.log("después del return: ALGO ESTÁ FALLANDO COLEGA") //
    }    
  }
  if (Obj.golesPartido === null ){
    console.log("ups, te está entrando un nulo que no devería, pero aquí lo paro por si acaso")
  } else {
    arrayGoles.push({
      "id": Obj.id ,
      "nombre": Obj.nombre ,
      "totalGolesMarcados":Obj.golesPartido,
      "golesRecibidosFuera":"",
      "avg":""
    })
  }

  //console.log(JSON.stringify(Obj));
}