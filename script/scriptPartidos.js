function verPartidos (){
  let partido , local, resultado, visitante, jornada , equipoLocal , equipoVisitante ;
  let partidos = document.querySelector("tbody");
  for (i=0 ; i<data.matches.length ; i++ ){
    jornada = data.matches[i].matchday;
    equipoLocal = data.matches[i].homeTeam.name;
    equipoVisitante = data.matches[i].awayTeam.name;
    golesLocal = data.matches[i].score.fullTime.homeTeam;
    golesVisitante = data.matches[i].score.fullTime.awayTeam
    
    partido = document.createElement("tr"); 
    local = document.createElement("td");
    resultado = document.createElement("td");
    visitante = document.createElement("td");
    local.innerText = equipoLocal;
    resultado.innerText = `${golesLocal} - ${golesVisitante}`; 
    visitante.innerText = equipoVisitante ;
  
    partido.append(local , resultado, visitante);
    partidos.append(partido);
  }
}

verPartidos();