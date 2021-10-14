//console.log("clasificación");
//let variable1 = JSON.stringify(dataClasificacion.standings[0].table[2].position);
//console.log(variable1);
//document.write(`${variable1}`);

verClasificacion()

function verClasificacion(){
  for(let i = 0 ;i<dataClasificacion.standings[0].table.length;i++){
    let arrayTd , posicion , teamName , teamId , teamLogo , partidosJugados , victorias , empates , derrotas , golesFaborables , golesContra , golesDiferencia , puntos;
    posicion = dataClasificacion.standings[0].table[i].position;
    teamName = dataClasificacion.standings[0].table[i].team.name;
    teamLogo = dataClasificacion.standings[0].table[i].team.crestUrl;
    partidosJugados = dataClasificacion.standings[0].table[i].playedGames;
    victorias = dataClasificacion.standings[0].table[i].won;
    empates = dataClasificacion.standings[0].table[i].draw;
    derrotas = dataClasificacion.standings[0].table[i].lost;
    golesFaborables = dataClasificacion.standings[0].table[i].goalsFor;
    golesContra = dataClasificacion.standings[0].table[i].goalsAgainst;
    golesDiferencia = dataClasificacion.standings[0].table[i].goalDifference;
    puntos = dataClasificacion.standings[0].table[i].points;
    teamId = dataClasificacion.standings[0].table[i].team.id; //¿no lo uso?
    
    // teamId    en principio no lo voy a usar
    //arrayTd = {posicion , teamName ,teamLogo , teamLogo , partidosJugados , victorias , empates , derrotas , golesFaborables , golesContra , golesDiferencia , puntos};
    arrayTd = [posicion , teamLogo , teamName  , partidosJugados , victorias , empates , derrotas , golesFaborables , golesContra , golesDiferencia , puntos];
    inyectarTd(arrayTd);
  }
}

function inyectarTd(arrayTd){
  let clasificacion = document.querySelector("tbody");
  let trClasificacion = document.createElement("tr");
  let tdFor
  for(let i=0;i<arrayTd.length;i++){
    
    if(i==1){
      tdFor = document.createElement("img");
      tdFor.setAttribute("src",arrayTd[i]);
      tdFor.setAttribute("width","20px"); //pendiente manipular con bootstrap
    } else{
      tdFor = document.createElement("td");
      tdFor.innerText = arrayTd[i];
    }

    // ojo que está recibiendo un objeto y ¿¿tendría que ser un array?
    trClasificacion.append(tdFor)
    clasificacion.append(trClasificacion);
    
    //console.log(tdFor)
  }





  /* 
  let tdPosicion = document.createElement("td");
  let tdTeamLogo = document.createElement("td");
  let tdTeamName = document.createElement("td");
  let tdPartidosJugados =document.createElement("td");
  let tdVictorias = document.createElement("td");
  let tdEmpates = document.createElement("td");
  let tdDerrotas = document.createElement("td");
  let tdGolesFaborables = document.createElement("td");
  let tdGolesContra = document.createElement("td");
  let tdGolesDiferencia = document.createElement("td");
  let tdPuntos  = document.createElement("td");
  let tdTeamId = document.createElement("td");
  
  
  tdPosicion.innerText = arrayTd.posicion;
  tdTeamLogo.innerText = arrayTd.teamLogo; //transformalo en imágen
  tdTeamName.innerText = arrayTd.teamName;
  tdPartidosJugados.innerText = arrayTd.partidosJugados;
  tdVictorias.innerText = arrayTd.victorias ;
  tdEmpates.innerText = arrayTd.empates;
  tdDerrotas.innerText = arrayTd.derrotas;
  tdGolesFaborables.innerText = arrayTd.golesFaborables;
  tdGolesContra.innerText = arrayTd.golesContra;
  tdGolesDiferencia.innerText = arrayTd.golesDiferencia;
  tdPuntos.innerText = arrayTd.puntos;
  tdTeamId.innerText = arrayTd.teamId;//en principio no hace falta
  
//,tdTeamId   no se lo estoy pasando
  trClasificacion.append(tdPosicion,tdTeamLogo,tdTeamName,tdPartidosJugados,tdVictorias,tdEmpates,tdDerrotas,tdGolesFaborables,tdGolesContra,tdGolesDiferencia,tdPuntos)
  clasificacion.append(trClasificacion);
  
  console.log(arrayTd)
 */
}




// ésta no se usa, es para eliminar
function inyectarTd_(arrayTd){  
  let clasificacion = document.querySelector("tbody");
  let trClasificacion = document.createElement("tr");
  let tdPosicion = document.createElement("td");
  let tdTeamLogo = document.createElement("td");
  let tdTeamName = document.createElement("td");
  let tdPartidosJugados =document.createElement("td");
  let tdVictorias = document.createElement("td");
  let tdEmpates = document.createElement("td");
  let tdDerrotas = document.createElement("td");
  let tdGolesFaborables = document.createElement("td");
  let tdGolesContra = document.createElement("td");
  let tdGolesDiferencia = document.createElement("td");
  let tdPuntos  = document.createElement("td");
  let tdTeamId = document.createElement("td");
  
  
  tdPosicion.innerText = arrayTd.posicion;
  tdTeamLogo.innerText = arrayTd.teamLogo; //transformalo en imágen
  tdTeamName.innerText = arrayTd.teamName;
  tdPartidosJugados.innerText = arrayTd.partidosJugados;
  tdVictorias.innerText = arrayTd.victorias ;
  tdEmpates.innerText = arrayTd.empates;
  tdDerrotas.innerText = arrayTd.derrotas;
  tdGolesFaborables.innerText = arrayTd.golesFaborables;
  tdGolesContra.innerText = arrayTd.golesContra;
  tdGolesDiferencia.innerText = arrayTd.golesDiferencia;
  tdPuntos.innerText = arrayTd.puntos;
  tdTeamId.innerText = arrayTd.teamId;//en principio no hace falta
  
//,tdTeamId   no se lo estoy pasando
  trClasificacion.append(tdPosicion,tdTeamLogo,tdTeamName,tdPartidosJugados,tdVictorias,tdEmpates,tdDerrotas,tdGolesFaborables,tdGolesContra,tdGolesDiferencia,tdPuntos)
  clasificacion.append(trClasificacion);
  
  console.log(arrayTd)

}
