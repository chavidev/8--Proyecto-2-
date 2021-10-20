// aquí está la vista
let verFiltros = document.querySelector("#filtros");
let test = document.createElement("p")
test.innerText = "test desde filtros";
let botonEquipo = document.createElement("button");
botonEquipo.innerText = "Boton Barsa";
//quiero hacerlo con una arrow function
//botonEquipo.setAttribute("onclick","function ()=>console.log('Barsa')")
botonEquipo.setAttribute("onclick","verEquipo()")

//verFiltros.innerHTML = "<p>hola colega desde filtros</p>";
verFiltros.append(test, botonEquipo);
// fin de la vista

//###########################################

//inicio del ¿Modelo? (la parte funcional,modelo no lo termino de entender)


let arrayPartidos = [];
crearFiltrosPartidos();



// ojo: crearFiltrosEstadisticas() arranca desde estadísticas => no intentes arrancar desde aquí
function crearFiltrosEstadisticas(array){
  console.log(array);
  console.log("test desde crearFiltrosEstadísticas");
}
function verEquipo(){
  console.log("FC Barcelona");
}

function crearFiltrosPartidos(){
  //console.log(data.matches);
  //console.log("test desde crearFiltrosPartidos");
  for (i=0 ; i<data.matches.length ; i++ ){
    jornada = data.matches[i].matchday;
    equipoLocal = data.matches[i].homeTeam.name;
    idEquipoLocal = data.matches[i].homeTeam.id;
    equipoVisitante = data.matches[i].awayTeam.name;
    idEquipoVisitante = data.matches[i].awayTeam.id;
    golesLocal = data.matches[i].score.fullTime.homeTeam;
    golesVisitante = data.matches[i].score.fullTime.awayTeam;

    arrayPartidos.push({jornada,equipoLocal,idEquipoLocal,equipoVisitante,idEquipoVisitante,golesLocal,golesVisitante})
  }
  //console.log(arrayPartidos);
}

function filtrarPartidos(array){

}