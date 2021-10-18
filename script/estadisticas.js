/* 
{
  id:
  nombre:
  totalGolesMarcados:
  partidosJugados:
  golesRecibidosFuera:
  avg:
}
 */
let arrayGoles = [];

contarGoles ();
calcularAvg ();
//console.log(arrayGoles)

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
    
    if(golesLocal === null){
      //console.log("Ups con los null paso de hacer nada")
    } else {
      recorrerArrayGoles({
        "id": idEquipoLocal, 
        "nombre":equipoLocal, 
        "golesPartido":golesLocal ,        
        "golesRecibidosFuera":0, // sería interesante que no haga falta ésta línea 
        "jornada":jornada,
        "equipoLocal":equipoLocal,
        "golesLocal":golesLocal,
        "equipoVisitante":equipoVisitante,
        "golesVisitante":golesVisitante
      });
      recorrerArrayGoles({
        "id": idEquipoVisitante, 
        "nombre":equipoVisitante, 
        "golesPartido":golesVisitante ,
        "golesRecibidosFuera":golesLocal, 
        "jornada":jornada,
        "equipoLocal":equipoLocal,
        "golesLocal":golesLocal,
        "equipoVisitante":equipoVisitante,
        "golesVisitante":golesVisitante
      });
    }
  }  
}

function recorrerArrayGoles(Obj){
  for (let j = 0; j < arrayGoles.length ; j++){
    if ((arrayGoles[j].id === Obj.id)){
      arrayGoles[j].totalGolesMarcados += Obj.golesPartido ;
      arrayGoles[j].partidosJugados += 1 ;
      arrayGoles[j].golesRecibidosFuera += Obj.golesRecibidosFuera
      /* console.log(`
      jornada=${Obj.jornada}
      equipoLocal=${Obj.equipoLocal}
      golesLocal=${Obj.golesLocal}
      equipoVisitante=${Obj.equipoVisitante}
      golesVisitante=${Obj.golesVisitante}
      arrayGoles[j]=${JSON.stringify(arrayGoles[j])}         
    `)*/
      //console.log("antes del retunr, objeto actualizado")
      return
      console.log("después del return: ALGO ESTÁ FALLANDO COLEGA") 
    }    
  }
  if (Obj.golesPartido === null ){
    console.log("ups, te está entrando un nulo que no devería, pero aquí lo paro por si acaso")
  } else {
    arrayGoles.push({
      "id": Obj.id ,
      "nombre": Obj.nombre ,
      "totalGolesMarcados":Obj.golesPartido,
      "partidosJugados": 1,
      "golesRecibidosFuera":0,
      "avg":""
    });
    //console.log("nuevo push(objeto) en el array")
  }
}

function calcularAvg (){
  console.log(arrayGoles)
}