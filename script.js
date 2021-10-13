// https://codepen.io/susanwinters/pen/YpRMdg
//let partidos = document.createElement("tbody");
let partidos = document.createElement("h1"); 


//let tabla = document.getElementById("tabla");
let creandoTabla = "";
let jornada = "";
let equipoLocal = "";
let equipoVisitante = "";
let resultado = "";
 
 

//console.log(data.matches)
 

//document.write(`Local: ${data.matches[0].homeTeam.name} ${data.matches[0].score.fullTime.homeTeam}   -   ${data.matches[0].score.fullTime.awayTeam} Visitante: ${data.matches[0].awayTeam.name}`)
//console.log(data.lenght)
console.log(data.matches.length)
for (i=0 ; i<data.matches.length ; i++ ){
  // ésto en principio no hace falta
  jornada = data.matches[i].matchday;
  equipoLocal = data.matches[i].homeTeam.name;
  equipoVisitante = data.matches[i].awayTeam.name;
  puntosLocal = data.matches[i].score.fullTime.homeTeam;
  puntosVisitante = data.matches[i].score.fullTime.awayTeam
 
  //creandoTabla += jornada + "Local:" + equipoLocal + puntosLocal + "-"+   puntosVisitante + "Visitante:" + equipoVisitante +  "<br>";
  
  //creandoTabla +=`${data.matches[i].matchday} Local: ${data.matches[i].homeTeam.name} ${data.matches[i].score.fullTime.homeTeam}   -   ${data.matches[i].score.fullTime.awayTeam} Visitante: ${data.matches[i].awayTeam.name} \n <br>`
  /* creandoTabla+=`<tr>
  <td>${data.matches[i].homeTeam.name}</td>
  <td>${data.matches[i].score.fullTime.homeTeam}   -   ${data.matches[i].score.fullTime.awayTeam}</td>
  <td>${data.matches[i].awayTeam.name}</td>
  </tr>`
  */
  creandoTabla += "<tr><td>local</td>  <td>resultado</td>  <td>visitante</td>  </tr>"
}
 
//tabla.innerHTML = creandoTabla;

//document.tbody.appendChild(div)
//partidos.innerHTML = creandoTabla;
//document.tbody.append(div)

partidos.append(creandoTabla);