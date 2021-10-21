// aquí está la vista
let verFiltros = document.querySelector("#filtros");
let test = document.createElement("p")
test.innerText = "test desde filtros";

let inputEquipos = document.createElement("input");
inputEquipos.setAttribute("placeholder","inserta el equipo aquí.....");
inputEquipos.setAttribute("id","inputEquipos");


let botonBuscar = document.createElement("button");
botonBuscar.innerText = "Buscar";
//quiero hacerlo con una arrow function
//botonEquipo.setAttribute("onclick","()=>console.log('Barsa')")
botonBuscar.setAttribute("onclick","buscaId()")

let cajaEquipos = document.createElement("div")
cajaEquipos.setAttribute("id","cajaEquipos");
//cajaEquipos.innerText("el listado de equipos dinámico va aquí")



verFiltros.append(test, inputEquipos, botonBuscar, cajaEquipos);
// fin de la vista

//###########################################

//inicio del ¿Modelo? (la parte funcional,modelo no lo termino de entender)
let idEquipos = [
  {id: 95, nombre: 'Valencia CF'},
  {id: 82, nombre: 'Getafe CF'},
  {id: 264, nombre: 'Cádiz CF'},
  {id: 88, nombre: 'Levante UD'},
  {id: 89, nombre: 'RCD Mallorca'},
  {id: 90, nombre: 'Real Betis Balompié'},
  {id: 79, nombre: 'CA Osasuna'},
  {id: 80, nombre: 'RCD Espanyol de Barcelona'},
  {id: 263, nombre: 'Deportivo Alavés'},
  {id: 86, nombre: 'Real Madrid CF'},
  {id: 558, nombre: 'RC Celta de Vigo'},
  {id: 78, nombre: 'Club Atlético de Madrid'},
  {id: 81, nombre: 'FC Barcelona'},
  {id: 92, nombre: 'Real Sociedad de Fútbol'},
  {id: 559, nombre: 'Sevilla FC'},
  {id: 87, nombre: 'Rayo Vallecano de Madrid'},
  {id: 94, nombre: 'Villarreal CF'},
  {id: 83, nombre: 'Granada CF'},
  {id: 285, nombre: 'Elche CF'},
  {id: 77, nombre: 'Athletic Club'}
];

let arrayPartidos = [];
crearFiltrosPartidos();
//console.log(arrayPartidos);
let arrayFiltro = [];
filtrarEquipos("FC Barcelona")
//console.log(arrayFiltro);
filtrarResultado({equipo:"FC Barcelona",id:81 ,resultadoFiltro:"ganado"})
//console.log(arrayFiltro);
//si se está jugando cómo es y cuantos estados mas existen ¿aplazado?
filtrarEstado({equipo:"FC Barcelona",id:81 ,resultadoFiltro:"ganado",estado:"FINISHED"});
console.log(arrayFiltro);

//estado:
//pendiente==SCHEDULED
//terminado==FINISHED
//jugando==????

// ojo: crearFiltrosEstadisticas() arranca desde estadísticas => no intentes arrancar desde aquí
function crearFiltrosEstadisticas(array){
  console.log(array);
  console.log("test desde crearFiltrosEstadísticas");
}
function buscaId(){
  console.log("FC Barcelona");
  //cajaEquipos
  let cajaEquiposVista = document.querySelector("#cajaEquipos");
  cajaEquiposVista.innerText = "cajaequipos vista"
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
    estado = data.matches[i].status;
    if(golesLocal>golesVisitante){
      resultado = idEquipoLocal 
    }
    if(golesLocal<golesVisitante){  //ésta condición sale de la API
      resultado = idEquipoVisitante 
    }
    if(golesLocal===golesVisitante){
      resultado = "empate" 
    }
    arrayPartidos.push({jornada,equipoLocal,idEquipoLocal,equipoVisitante,idEquipoVisitante,golesLocal,golesVisitante,estado,resultado})
  }
  //console.log(arrayPartidos);
}
//si no hay nada en palabra a buscar => return
function filtrarEquipos(busqueda){
  //console.log(arrayPartidos);
 arrayFiltro = arrayPartidos.filter(function(partido){
   //¿que ocurre si en el return le pongo una función que tenga return?
   return busqueda === partido.equipoLocal || busqueda === partido.equipoVisitante
 })
}

function filtrarResultado({equipo,id,resultadoFiltro}){
  arrayFiltro = arrayFiltro.filter(function(partido){
    if (resultadoFiltro == "ganado"){
      //console.log(`resultado:${partido.resultado} equipo:${equipo} id:${id} resultadoFiltro:${resultadoFiltro}`);
      return id == partido.resultado
    }
    if (resultadoFiltro == "perdido"){
      console.log("partido perdido");
      return id == partido.resultado
    }
    if (resultadoFiltro == "empate"){
      console.log("partido empatado");
      return "empate" == partido.resultado
    }
  })
}

function filtrarEstado({equipo,id,resultadoFiltro,estado}){
  arrayFiltro = arrayFiltro.filter(function(partido){    
      console.log("Estado partido"+ estado);
      return estado === partido.estado    
  })
}