/*  {
      id:
      nombre:
      totalGolesMarcados:
      partidosJugados:
      partidosFuera:
      golesRecibidosFuera:
      avg:
    } */
//let arrayGoles = [];
//let arrayAvg = [];
let arrayGolesRecibidosFuera =[];

contarGoles ();

//calcularAvg ();

//ordenarGolesRecibidosFuera ();
//ordenarAvg();
//crearTablaGoleados ();

function crearTablaGoleados (array) {
  let tablaGoleados = document.querySelector("#goleados"); //"tbody"
  for(i=0;i<5;i++){
  //arrayGolesRecibidosFuera.forEach(equipo =>{ arrayGolesRecibidosFuera[i]  //&& romper con return o brake
    let tr = document.createElement("tr");
    let equipoTd = document.createElement("td");
    let logoTd = document.createElement("td");
    let goleadoTd = document.createElement("td");
    let partidosJugadosTd = document.createElement("td");
    equipoTd.innerText = `${array[i].nombre}`;
    logoTd.innerText = `${array[i].id}`;
    goleadoTd.innerText = `${array[i].golesRecibidosFuera}`;
    partidosJugadosTd.innerText = `${array[i].partidosFuera}`; //supongo que son SOLO los partidos jugados fuera
    tr.append(equipoTd , logoTd, partidosJugadosTd , goleadoTd);
    tablaGoleados.append(tr);
    //console.log(equipo);
  }//)
}

function contarGoles (){ //&&recibir data.maches 
  let arrayGoles = []; 
  for(let i=0 ; i<data.matches.length ;i++){
    let jornada, equipoLocal, idEquipoLocal, equipoVisitante, idEquipoVisitante, golesLocal, golesVisitante  
    jornada = data.matches[i].matchday;
    equipoLocal = data.matches[i].homeTeam.name;
    idEquipoLocal = data.matches[i].homeTeam.id;
    equipoVisitante = data.matches[i].awayTeam.name;
    idEquipoVisitante = data.matches[i].awayTeam.id;
    golesLocal = data.matches[i].score.fullTime.homeTeam;
    golesVisitante = data.matches[i].score.fullTime.awayTeam  
    
    if(!(golesLocal === null)){  
      recorrerArrayGoles({
        "id": idEquipoLocal, 
        "nombre":equipoLocal, 
        "golesPartido":golesLocal ,        
        "golesRecibidosFuera":0, // evita el cálculo de los goles en contra cuando juega como local
        "visitante":false
      },arrayGoles);
      recorrerArrayGoles({
        "id": idEquipoVisitante, 
        "nombre":equipoVisitante, 
        "golesPartido":golesVisitante ,
        "golesRecibidosFuera":golesLocal,
        "visitante":true
      },arrayGoles);
    }
  }
  calcularAvg (arrayGoles);  
  ordenarAvg(arrayGoles);
  ordenarGolesRecibidosFuera (arrayGoles);
 
}

function recorrerArrayGoles(Obj,array){
  for (let j = 0; j < array.length ; j++){
    if ((array[j].id === Obj.id)){
      array[j].totalGolesMarcados += Obj.golesPartido ;
      array[j].partidosJugados += 1 ;
      array[j].golesRecibidosFuera += Obj.golesRecibidosFuera ;
      array[j].partidosFuera += Obj.visitante ? 1 : 0
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
  
  //let partidosFuera1 = Obj.visitante ? 1 : 0
  //console.log(partidosFuera1);
  array.push({
    "id": Obj.id ,
    "nombre": Obj.nombre ,
    "totalGolesMarcados":Obj.golesPartido,
    "partidosJugados": 1,
    "partidosFuera": Obj.visitante ? 1 : 0,
    "golesRecibidosFuera":0,
    "avg":""
  });
  //console.log("nuevo push(objeto) en el array")
}

function calcularAvg (array){
  for (let i = 0 ; i<array.length; i++){
    array[i].avg = array[i].totalGolesMarcados / array[i].partidosJugados
  }
  //console.log(arrayGoles)
}

function ordenarAvg (array){
  arrayAvg = Array.from(array)
  arrayAvg.sort(function (a, b) {
    if (a.avg > b.avg) {
      return -1;
    }
    if (a.avg < b.avg) {
      return +1;
    }
    return 0;
  });
  console.log(arrayAvg)
   
}

function ordenarGolesRecibidosFuera (array){
  arrayGolesRecibidosFuera = Array.from(array)
  arrayGolesRecibidosFuera.sort(function (a, b) {
    if (a.golesRecibidosFuera > b.golesRecibidosFuera) {
      return 1;
    }
    if (a.golesRecibidosFuera < b.golesRecibidosFuera) {
      return -1;
    }
    return 0;
  });
  crearTablaGoleados (arrayGolesRecibidosFuera);
  //console.log(arrayGolesRecibidosFuera);
}