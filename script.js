let tabla = document.getElementById("tabla");
let creandoTabla = "";
let jornada = "";
let equipoLocal = "";
let equipoVisitante = "";
let resultado = "";


//console.log(data.matches[4])
console.log(data.matches)

//document.write(`Local: ${data.matches[0].homeTeam.name} ${data.matches[0].score.fullTime.homeTeam}   -   ${data.matches[0].score.fullTime.awayTeam} Visitante: ${data.matches[0].awayTeam.name}`)
//console.log(data.lenght)
console.log(data.matches.length)
for (i=0 ; i<data.matches.length ; i++ ){
  jornada = data.matches[i].matchday;
  equipoLocal = data.matches[i].homeTeam.name;
  equipoVisitante = data.matches[i].awayTeam.name;
  puntosLocal = data.matches[i].score.fullTime.homeTeam;
  puntosVisitante = data.matches[i].score.fullTime.awayTeam

  creandoTabla += jornada + "Local:" + equipoLocal + puntosLocal + "-"+   puntosVisitante + "Visitante:" + equipoVisitante +  "<br>";
  //funciona
  //document.write(`${data.matches[i].matchday} Local: ${data.matches[i].homeTeam.name} ${data.matches[i].score.fullTime.homeTeam}   -   ${data.matches[i].score.fullTime.awayTeam} Visitante: ${data.matches[i].awayTeam.name} \n <br>`)
}

/* 

let inyeccion = ${data.matches[i].matchday} Local: ${data.matches[i].homeTeam.name} ${data.matches[i].score.fullTime.homeTeam}   -   ${data.matches[i].score.fullTime.awayTeam} Visitante: ${data.matches[i].awayTeam.name} \n <br>;
 */

//tabla.innerHTML = "hola colega hola colega" +"<br>"+ "2 hola colega"+data.matches[0].matchday;

//tabla.innerHTML = data.matches[0].matchday + "Local:" + data.matches[0].homeTeam.name + data.matches[0].score.fullTime.homeTeam + " - " +data.matches[0].score.fullTime.awayTeam + "Visitante:" + data.matches[0].awayTeam.name + "<br>";


//tabla.innerHTML = `${data.matches[0].matchday} Local: ${data.matches[0].homeTeam.name} ${data.matches[0].score.fullTime.homeTeam}   -   ${data.matches[0].score.fullTime.awayTeam} Visitante: ${data.matches[0].awayTeam.name} <br>`

tabla.innerHTML = creandoTabla;

