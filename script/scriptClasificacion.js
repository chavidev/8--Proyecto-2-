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
    arrayTd = [posicion , teamLogo , teamName  , partidosJugados , victorias , empates , derrotas , golesFaborables , golesContra , golesDiferencia , puntos];
    inyectarTd(arrayTd);
  }
}
 
function inyectarTd(arrayTd){
  let clasificacion = document.querySelector("tbody");
  let trClasificacion = document.createElement("tr");
  let tdFor
  for(let i=0;i<arrayTd.length;i++){

      tdFor = document.createElement("td");
      if(i==1) {
        let img = document.createElement("img");
        img.setAttribute("src",arrayTd[i]);
        img.setAttribute("width","50px");
        tdFor.append(img)
      }
      else {
        tdFor.innerText = arrayTd[i];
      }

    trClasificacion.append(tdFor)
    clasificacion.append(trClasificacion);   
  }
}
