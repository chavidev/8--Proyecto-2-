//console.log("clasificación");
//let variable1 = JSON.stringify(dataClasificacion.standings[0].table[2].position);
//console.log(variable1);
//document.write(`${variable1}`);

function verClasificacion(){
  for(let i = 0 ;i<dataClasificacion.standings[0].table.length;i++){
    let arrayTd , posicion , teamName , teamId , teamLogo , partidosJugados , victorias , empates , derrotas , golesFaborables , golesContra , golesDiferencia , puntos;
    posicion = dataClasificacion.standings[0].table[i].position;
    teamName = dataClasificacion.standings[0].table[i].team.name;
    teamId = dataClasificacion.standings[0].table[i].team.id;
    teamLogo = dataClasificacion.standings[0].table[i].team.crestUrl;
    partidosJugados = dataClasificacion.standings[0].table[i].playedGames;
    victorias = dataClasificacion.standings[0].table[i].won;
    empates = dataClasificacion.standings[0].table[i].draw;
    derrotas = dataClasificacion.standings[0].table[i].lost;
    golesFaborables = dataClasificacion.standings[0].table[i].goalsFor;
    golesContra = dataClasificacion.standings[0].table[i].goalsAgainst;
    golesDiferencia = dataClasificacion.standings[0].table[i].goalDifference;
    puntos = dataClasificacion.standings[0].table[i].points;
    
    arrayTd = {posicion , teamName , teamId , teamLogo , partidosJugados , victorias , empates , derrotas , golesFaborables , golesContra , golesDiferencia , puntos};
    inyectarTd(arrayTd);
  }
}

function inyectarTd(arrayTd){  
  let clasificacion = document.querySelector("tbody");
  let trClasificacion = document.createElement("tr");
  let tdPosicion = document.createElement("td");
  let tdTeamName = document.createElement("td");
  let tdTeamId = document.createElement("td");
  let tdTeamLogo = document.createElement("td");
  let tdPartidosJugados =document.createElement("td");
  let tdVictorias = document.createElement("td");
  let tdEmpates = document.createElement("td");
  let tdDerrotas = document.createElement("td");
  let tdGolesFaborables = document.createElement("td");
  let tdGolesContra = document.createElement("td");
  let tdGolesDiferencia = document.createElement("td");
  let tdPuntos  = document.createElement("td");
  
  
  tdPosicion.innerText = arrayTd.posicion;
  tdTeamName.innerText = arrayTd.teamName;
  tdTeamId.innerText = arrayTd.teamId;
  tdTeamLogo.innerText = arrayTd.teamLogo;
  tdPartidosJugados.innerText = arrayTd.partidosJugados;
  tdVictorias.innerText = arrayTd.victorias ;
  tdEmpates.innerText = arrayTd.empates;
  tdDerrotas.innerText = arrayTd.derrotas;
  tdGolesFaborables.innerText = arrayTd.aborables;
  tdGolesContra.innerText = arrayTd.golesContra;
  tdGolesDiferencia.innerText = arrayTd.golesDiferencia;
  tdPuntos.innerText = arrayTd.puntos;
  

  trClasificacion.append(tdPosicion,tdTeamName,tdTeamId,tdTeamLogo,tdPartidosJugados,tdVictorias,tdEmpates,tdDerrotas,tdGolesFaborables,tdGolesContra,tdGolesDiferencia,tdPuntos)
  clasificacion.append(trClasificacion);
  
  console.log(arrayTd)

}

verClasificacion()