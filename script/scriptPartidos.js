let idEquipos = [];
(async function(){
  let data = await getData({endPoint:"matches"})

  idEquipos = contarGoles (data.matches)
  idEquipos.unshift({id: 0, nombre: "Todos los Equipos"})
  //console.log("idEquipos: " +JSON.stringify(idEquipos) )

  crearFiltrosPartidos(data); //lo tengo en filtros
  verPartidos(data.matches);
})()

// si el primero es undefined, coge el segundo
// && no consigo hacerlo funcionar para la llamada desde el filtro
function verPartidos (array){  
  //console.log("data.matches"+JSON.stringify(data.matches))
  let partido , local, resultado, visitante, jornada , equipoLocal , idEquipoLocal , equipoVisitante , idEquipoVisitante;
  let partidos = document.querySelector("tbody");
  if (array.length === 0){
    partidos.innerText = `El ${variablesFiltro.nombre} no tiene partidos
    ${variablesFiltro.resultadoFiltro !=="todos"?variablesFiltro.resultadoFiltro:""}
    ${variablesFiltro.posicion !=="Todos" ?  " en " : ""}  
    ${variablesFiltro.posicion !=="Todos" ?  variablesFiltro.posicion : ""}
    `;
    //quiero unificar las líneas 18 y 19
    console.log("entró en el if de no hay partidos");
    //variablesFiltro: {"id":82,"resultadoFiltro":"ganados","posicion":"Todos","estado":"Todos","nombre":"Getafe CF","nombreError":"Getafe CF"}
    console.log("no hay partidos => variablesFiltro= "+JSON.stringify(variablesFiltro));
    return    
  }
  partidos.innerText = "";
  for (i=0 ; i<array.length ; i++ ){
    //console.log(array[i].awayTeam.name)
    //&& dejalo como está
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
 
// start cabecera-sticky
// me hace fondo transparente y lo soluciono con una imágen de fondo
//no consigo hacer el código mio, no me funciona eliminar la clase cuando lo tuneo
function fijarCabezera ()  {
  let cabezeras = document.querySelectorAll('.cabezera')
  cabezeras.forEach(cab => { cab.classList.add('cabezera-fixed') }) //modificación a mi estilo ¿perfect?
  //cabezeras.forEach( function (cab) { cab.setAttribute('class','cabezera-fixed') })
}
 
function desfijarCabezera () {
  let cabezeras = document.querySelectorAll('.cabezera')
  cabezeras.forEach(cab => { cab.classList.remove('cabezera-fixed') })
  //cabezeras.forEach(function (cab) { cab.removeAttribute("class") })
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
// end cabecera