
let partido  
let local
let resultado
let visitante
let jornada = "";
let equipoLocal = "";
let equipoVisitante = "";
// ¿por que no puedo poner let partidos fuera de la función y que coja el valor dentro?
function verPartidos (){  
  let partidos = document.querySelector("tbody");
  for (i=0 ; i<data.matches.length ; i++ ){
    jornada = data.matches[i].matchday;
    equipoLocal = data.matches[i].homeTeam.name;
    equipoVisitante = data.matches[i].awayTeam.name;
    puntosLocal = data.matches[i].score.fullTime.homeTeam;
    puntosVisitante = data.matches[i].score.fullTime.awayTeam
    
    partido = document.createElement("tr"); 
    local = document.createElement("td");
    resultado = document.createElement("td");
    visitante = document.createElement("td");
    local.innerText = equipoLocal;
    resultado.innerText = `${puntosLocal} - ${puntosVisitante}`; 
    visitante.innerText = equipoVisitante ;
  
    partido.append(local , resultado, visitante);
    partidos.append(partido);
  }
}

verPartidos();