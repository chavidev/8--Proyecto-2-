
/*         ##### Arquitectura #####
contargoles(data.maches)=>
    recorrerArrayGoles(Obj, arrayGoles)    
    calcularAvg (arrayGoles)  
    ordenarAvg(arrayGoles)=>
      crearTablaAvg

    ordenarGolesRecibidosFuera (arrayGoles)=>
      crearTablaGoleados (array)
*/

// genera los idEquipos =[{id nombres},] del input
function contarGoles (datos){ //datos = data.maches 
  let arrayGoles = []; 
  for(let i=0 ; i<datos.length ;i++){
    let jornada, equipoLocal, idEquipoLocal, equipoVisitante, idEquipoVisitante, golesLocal, golesVisitante  
    jornada = datos[i].matchday;
    equipoLocal = datos[i].homeTeam.name;
    idEquipoLocal = datos[i].homeTeam.id;
    equipoVisitante = datos[i].awayTeam.name;
    idEquipoVisitante = datos[i].awayTeam.id;
    golesLocal = datos[i].score.fullTime.homeTeam;
    golesVisitante = datos[i].score.fullTime.awayTeam  
    
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
  //genera los idEquipos =[{id nombres},] del input
  return arrayGoles
}
function recorrerArrayGoles(Obj,array){
  for (let j = 0; j < array.length ; j++){
    if ((array[j].id === Obj.id)){
      array[j].totalGolesMarcados += Obj.golesPartido ;
      array[j].partidosJugados += 1 ;
      array[j].golesRecibidosFuera += Obj.golesRecibidosFuera ;
      array[j].partidosFuera += Obj.visitante ? 1 : 0
      return
    }    
  }  
  array.push({
    "id": Obj.id ,
    "nombre": Obj.nombre ,
    "totalGolesMarcados":Obj.golesPartido,
    "partidosJugados": 1,
    "partidosFuera": Obj.visitante ? 1 : 0,
    "golesRecibidosFuera":0,
    "avg":""
  });
}
function calcularAvg (array){
  for (let i = 0 ; i<array.length; i++){
    array[i].avg = array[i].totalGolesMarcados / array[i].partidosJugados
  }
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
  //console.log(arrayAvg)
  //crearTablaAvg(arrayAvg);
  return arrayAvg
  
}
function crearTablaAvg (array){
  let tablaAvg = document.querySelector("#tabla_avg");
  for(i=0;i<5;i++){
    let trAvg = document.createElement("tr");
    let equipoTd = document.createElement("td");
    let logoTd = document.createElement("td");
    let imgTd = document.createElement("img");
    imgTd.setAttribute("src",`https://crests.football-data.org/${array[i].id}.svg`);
    imgTd.setAttribute("width","50px");
    let partidosTd = document.createElement("td");
    let golesTd = document.createElement("td");
    let avgTd = document.createElement("td");
  
    equipoTd.innerText =`${array[i].nombre}`;
    logoTd.append(imgTd);
    partidosTd.innerText =`${array[i].partidosJugados}`;
    golesTd.innerText =`${array[i].totalGolesMarcados}`;
    avgTd.innerText =`${array[i].avg.toFixed(2)}`;
    trAvg.append(equipoTd, logoTd, partidosTd, golesTd, avgTd);
    tablaAvg.append(trAvg);
  }
}

function ordenarGolesRecibidosFuera (array){
  let arrayGolesRecibidosFuera = Array.from(array)
  arrayGolesRecibidosFuera.sort(function (a, b) {
    if (a.golesRecibidosFuera > b.golesRecibidosFuera) {
      return 1;
    }
    if (a.golesRecibidosFuera < b.golesRecibidosFuera) {
      return -1;
    }
    return 0;
  });
  //crearTablaGoleados (arrayGolesRecibidosFuera);
  //console.log(arrayGolesRecibidosFuera);
  return arrayGolesRecibidosFuera
}
function crearTablaGoleados (array) {
  let tablaGoleados = document.querySelector("#tabla_goleados"); //"tbody"
  for(i=0;i<5;i++){  
    let tr = document.createElement("tr");
    let equipoTd = document.createElement("td");
    let logoTd = document.createElement("td");
    let imgTd = document.createElement("img");
    imgTd.setAttribute("src",`https://crests.football-data.org/${array[i].id}.svg`);
    imgTd.setAttribute("width","50px");
    let goleadoTd = document.createElement("td");
    let partidosJugadosTd = document.createElement("td");
    equipoTd.innerText = `${array[i].nombre}`;
    logoTd.append(imgTd);
    goleadoTd.innerText = `${array[i].golesRecibidosFuera}`;
    partidosJugadosTd.innerText = `${array[i].partidosFuera}`; 
    tr.append(equipoTd , logoTd, partidosJugadosTd , goleadoTd);
    tablaGoleados.append(tr); 
  }//)
}
