verPartidos();

function verPartidos (){
  let partido , local, resultado, visitante, jornada , equipoLocal , idEquipoLocal , equipoVisitante , idEquipoVisitante;
  let partidos = document.querySelector("tbody");
  for (i=0 ; i<data.matches.length ; i++ ){
    jornada = data.matches[i].matchday;
    equipoLocal = data.matches[i].homeTeam.name;
    idEquipoLocal = data.matches[i].homeTeam.id;
    equipoVisitante = data.matches[i].awayTeam.name;
    idEquipoVisitante = data.matches[i].awayTeam.id;
    golesLocal = data.matches[i].score.fullTime.homeTeam;
    golesVisitante = data.matches[i].score.fullTime.awayTeam
    
    partido = document.createElement("tr"); 
    local = document.createElement("td");
    imgLocal = document.createElement("td");
    resultado = document.createElement("td");
    visitante = document.createElement("td");
    imgVisitante = document.createElement("td");

    local.innerText = equipoLocal;
    local.setAttribute("class","text-end");
    /* resultado.innerText = `${golesLocal} - ${golesVisitante}`;  */
    resultado.innerText = ((golesLocal||golesVisitante) == null)? "pendiente":`${golesLocal} - ${golesVisitante}`; 
    resultado.setAttribute("class","text-center");
    visitante.innerText = equipoVisitante ;
    visitante.setAttribute("class","text-start");

    imgEquipo(imgLocal, idEquipoLocal);
    imgEquipo(imgVisitante, idEquipoVisitante);
  
    partido.append(local , imgLocal, resultado, imgVisitante, visitante);
    partidos.append(partido);
  }
}

function imgEquipo (imgTd , id) {
  let imgLogo = document.createElement("img");
  imgLogo.setAttribute("src",`https://crests.football-data.org/${id}.svg`);
  imgLogo.setAttribute("width","50px");
  imgTd.append(imgLogo);
  imgTd.setAttribute("width","50px")
}