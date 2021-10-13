let tabla = document.getElementById("tabla");
let jornadas = [] // contiene las jornadas
 
/*
 
jornadas = [
  '1': [
    {equipo1: '', equipo2: '', punto1: '', puntos2: ''},
    {equipo1: '', equipo2: '', punto1: '', puntos2: ''},
    {equipo1: '', equipo2: '', punto1: '', puntos2: ''}
    ...
  ],
  '2': [
    {equipo1: '', equipo2: '', punto1: '', puntos2: ''},
    {equipo1: '', equipo2: '', punto1: '', puntos2: ''},
    {equipo1: '', equipo2: '', punto1: '', puntos2: ''}
    ...
  ],
  ...
]
 
*/
 
function llenarArrayJornadas() {
  let jornada = 0
  let jornadaAnterior = 0
  let partido = {}
 
  for (i=0 ; i < data.matches.length ; i++ ){
    jornada = data.matches[i].matchday //
    partido = {
      equipoLocal: data.matches[i].homeTeam.name,
      equipoVisitante: data.matches[i].awayTeam.name,
      puntosLocal: data.matches[i].score.fullTime.homeTeam,
      puntosVisitante: data.matches[i].score.fullTime.awayTeam
    }
    // misma jornada pero se agrega un partido
    if(jornada === jornadaAnterior) {
      jornadas[`${jornada}`].push(partido)
    }
    // jornada nueva
    else {
      jornadas[`${jornada}`] = [partido]
    }
    jornadaAnterior = data.matches[i].matchday  
  }
}
 
function renderizarJornadas() {
  for(let i = 1; i<jornadas.length; i++) {
    let numeroDeJornada = i
    let tarjetaJornada = `
    <div class="jornada">
      <h1 class="numero-jornada">Jornada #${numeroDeJornada}</h1>
      <div class="cab">
        <h2>Local</h2>
        <h2>Resultado</h2>
        <h2>Visitante</h2>
      </div>
      <div class="equipos" id="equipos-jornada-${numeroDeJornada}">
         
      </div>
    </div>
    `
    tabla.innerHTML += tarjetaJornada;
    for(let j = 0; j < jornadas[`${numeroDeJornada}`].length; j++) {
      document.getElementById(`equipos-jornada-${numeroDeJornada}`).innerHTML += `
      <div class="partido">
        <h3>${jornadas[`${numeroDeJornada}`][j].equipoLocal}</h3>
        <h3>${jornadas[`${numeroDeJornada}`][j].puntosLocal} - ${jornadas[`${numeroDeJornada}`][j].puntosVisitante}</h3>
        <h3>${jornadas[`${numeroDeJornada}`][j].equipoVisitante}</h3>
      </div>
      `
    }
  }
}
 
llenarArrayJornadas()
renderizarJornadas()
 
 
