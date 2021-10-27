
//   ####   ¿Arquitectura?   ####

// crearFiltroPartidos()

// ejecutarFiltros() //lo llamo desde el botón buscar
//      <- KeyupInput2
//        <-eliminarMayúsculas y minúsculas
//      =>inyectarCajaEquipos

//      ->filtrosEquipos
//      ->filtroResultados
//      ->filtrarPosición
//      ->filtrarEstado ELIMINADO
//      => verPartidos

let arrayPartidos = [];
let arrayFiltro = [];
let variablesFiltro = {};
 
function crearFiltrosPartidos(data){
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
/* 
    if(!golesLocal || !golesVisitante) {
      resultado = null
    } */
    if(golesLocal === null || golesVisitante === null) {
      resultado = null
    }
    else {  
      if(golesLocal===golesVisitante){
        resultado = "empate"
      }
      if(golesLocal>golesVisitante){
        resultado = idEquipoLocal
      }
      if(golesLocal<golesVisitante){  //ésta condición sale de la API
        resultado = idEquipoVisitante
      }
    }
   
    arrayPartidos.push({jornada,equipoLocal,idEquipoLocal,equipoVisitante,idEquipoVisitante,golesLocal,golesVisitante,estado,resultado})
  }
  //console.log(arrayPartidos);
} 
let cajaEquiposVista2 = document.querySelector("#cajaEquiposVista2");
let errorInput = document.querySelector("#errorInput");
let input2 = document.querySelector("#inputEquipos2");

//llamado desde el botón BUSCAR
function ejecutarFiltros(){
  //let nombreError = Array.from(input2.value); //no se si es necesario, pero hago from por si acaso
  let nombreError = input2.value;
  const { id, nombre } = keyupInput2()
  console.log("el id del equipo es:"+id);
  //filtro los partidos pasandole el id del equipo a buscar
  filtrarEquipos(id);
 
  let filtroResultado =  document.querySelector('input[name="resultado"]:checked').value
  //console.log("filtroResultado.value: "+filtroResultado.value);
  filtrarResultado({ id: id, resultadoFiltro: filtroResultado})
 
  let filtroPosicion =  document.querySelector('input[name="posicion"]:checked').value
  filtrarPosicion({ id: id, posicion: filtroPosicion})
 
  variablesFiltro = {id: id,resultadoFiltro: filtroResultado,posicion: filtroPosicion, nombre: nombre, nombreError: nombreError }
  verPartidos(arrayFiltro); //&&
  //console.log(arrayFiltro)
  cajaEquiposVista2.innerText = ""; //limpio la caja para evitar que me salga una lista muy larga
  //console.log("variablesFiltro:"+ JSON.stringify(variablesFiltro));
 
  document.querySelector('#inputEquipos2').value = nombre;
  console.log("nombreError: "+nombreError);
  errorInput.innerText = keyupInput2().err ? (`Ups no hay equipos que contengan: ${nombreError}`):""
}

// se activa en el momento de levantar una tecla en el input
function keyupInput2(){
  let errorEquipo = {id: 0, nombre: 'inserta un nombre válido', err:true}
 
   // let idEquipos lo genero automáticamente en la función de autollamada()() a àrtir de contarGoles
  let buscandoId = idEquipos.filter(function(equipo){
    return eliminarMayusculasEspacioTilde (equipo.nombre).includes(eliminarMayusculasEspacioTilde (input2.value));
  });
  inyectandoCajaEquipos2(buscandoId)
  return buscandoId[0]?buscandoId[0]:errorEquipo
}
function eliminarMayusculasEspacioTilde (nombre){
  return nombre.toUpperCase().replace(/ /g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function inyectandoCajaEquipos2(buscandoId){
  let pEquipo
    errorInput.innerText=""; //limpio el error si existiese
    cajaEquiposVista2.innerText="";
    buscandoId.forEach(function (equipo){
    pEquipo = document.createElement("p");
    pEquipo.setAttribute("class","pEquipo");
    pEquipo.innerText=`${equipo.nombre}`;
    cajaEquiposVista2.append(pEquipo);
  })
}

function filtrarEquipos(id){
  if (id === 0){
    arrayFiltro = arrayPartidos
    return
  }
   arrayFiltro = arrayPartidos.filter(function(partido){
   return id === partido.idEquipoLocal || id === partido.idEquipoVisitante
 })
} 
function filtrarResultado({ id, resultadoFiltro }){
  switch (resultadoFiltro) {
    case "ganados":
      console.log("antes de ejecutar el filtro");
      console.log("resultadoFiltro: "+ resultadoFiltro);
      arrayFiltro = arrayFiltro.filter((partido) => {
        return id == partido.resultado })
      break;
    case "perdidos":
      //&& si ganó el equipo contrario
      arrayFiltro = arrayFiltro.filter((partido) => { if(id != partido.resultado && partido.resultado !== 'empate' && partido.resultado !== null ) return partido })
      break;
    case "empatados":
      arrayFiltro = arrayFiltro.filter((partido) => { if('empate' == partido.resultado) return partido })
      break;
    
    case "FINISHED":
      arrayFiltro = arrayFiltro.filter((partido) => { if('FINISHED' == partido.estado) return partido })
      break;
    case "SCHEDULED":
      arrayFiltro = arrayFiltro.filter((partido) => { if('SCHEDULED' == partido.estado) return partido })
      break;
    case "jugando":
      arrayFiltro = arrayFiltro.filter((partido) => {
        console.log(`Ten en cuenta los estados cuando está jugando  partido.estado:  ${partido.estado}`); 
        if( 'LIVE' === partido.estado)  return true 
      })
      break;

    default:
      arrayFiltro = arrayFiltro
      break;
  }
}

function filtrarPosicion({ id, posicion }){
  switch (posicion) {
    case "casa":
      arrayFiltro = arrayFiltro.filter((partido) => { if(id == partido.idEquipoLocal) return partido })
      break;
    case "visitante":
      arrayFiltro = arrayFiltro.filter((partido) => { if(id == partido.idEquipoVisitante) return partido })
      break;
    default:
      arrayFiltro = arrayFiltro
      break;
  }
}