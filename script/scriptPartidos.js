let idEquipos = [];
(async function(){
  let data = await getData({endPoint:"matches"})

  idEquipos = contarGoles (data.matches)
  idEquipos.unshift({id: 0, nombre: "Todos los Equipos"})

  crearFiltrosPartidos(data); //lo tengo en filtros
  verPartidos(data.matches);
})()

function verPartidos (array){
  let partido , local, resultado, visitante, jornada , equipoLocal , idEquipoLocal , equipoVisitante , idEquipoVisitante;
  let partidos = document.querySelector("tbody");

  if(variablesFiltro.id === 0 && (variablesFiltro.resultadoFiltro === "ganados" || variablesFiltro.resultadoFiltro === "perdidos"  )){
    partidos.innerText =`Para obtener los partidos ${variablesFiltro.resultadoFiltro} es necesario que elijas un equipo`
    return
  }
  
  if (array.length === 0 && variablesFiltro.resultadoFiltro === "jugando"){
    partidos.innerText = "En éste momento no se está jugando ningún partido"
    return
  }

  if(variablesFiltro.id === 0 && (variablesFiltro.posicion === "casa" || variablesFiltro.posicion === "visitante")){
    partidos.innerText = `Para obtener los partidos en casa o como visitante, es necesario introducir un equipo`
    return
  }

  if (array.length === 0){
    partidos.innerText = `El ${variablesFiltro.nombre} no tiene partidos ${variablesFiltro.resultadoFiltro !=="todos"?variablesFiltro.resultadoFiltro:""} ${variablesFiltro.posicion !=="Todos" ?  " en " : ""}${variablesFiltro.posicion !=="Todos" ?  variablesFiltro.posicion : ""}`;
    //quiero unificar " en " y ${}
    console.log("entró en el if de no hay partidos");
    return    
  }
  console.log("¿Qué hay qeu modificar? => variablesFiltro= "+JSON.stringify(variablesFiltro));
  partidos.innerText = "";
  for (i=0 ; i<array.length ; i++ ){
    jornada = !array[i].matchday  ? array[i].jornada : array[i].matchday;
    equipoLocal = !array[i].homeTeam  ? array[i].equipoLocal : array[i].homeTeam.name;
    idEquipoLocal =  !array[i].homeTeam  ? array[i].idEquipoLocal : array[i].homeTeam.id;
    equipoVisitante =  !array[i].awayTeam  ? array[i].equipoVisitante : array[i].awayTeam.name;
    idEquipoVisitante = ! array[i].awayTeam  ? array[i].idEquipoVisitante : array[i].awayTeam.id;
    golesLocal =  !array[i].score  ? array[i].golesLocal : array[i].score.fullTime.homeTeam;
    golesVisitante =  !array[i].score  ? array[i].golesVisitante : array[i].score.fullTime.awayTeam;
    
    partido = document.createElement("tr");
    local = document.createElement("td");
    imgLocal = document.createElement("td");
    resultado = document.createElement("td");
    visitante = document.createElement("td");
    imgVisitante = document.createElement("td");

    local.innerText = equipoLocal;
    local.setAttribute("class","text-end");
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
 
// ###  start cabecera-sticky   ###
// me hace fondo transparente y lo soluciono con una imágen de fondo
function fijarCabezera ()  {
  let cabezeras = document.querySelectorAll('.cabezera')
  cabezeras.forEach(cab => { cab.classList.add('cabezera-fixed') }) 
}
 
function desfijarCabezera () {
  let cabezeras = document.querySelectorAll('.cabezera')
  cabezeras.forEach(cab => { cab.classList.remove('cabezera-fixed') })
}
 
window.addEventListener('scroll', function(e) {
  //veo el movimiento del scroll
  //console.log(window.scrollY)
  if(window.scrollY >= 40) {
    fijarCabezera()
  } else {
    desfijarCabezera()
  }
});
// ###  End cabecera  ####