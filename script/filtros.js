//console.log("variablesFiltro:"+ JSON.stringify(variablesFiltro));
//   ####   ¿Arquitectura?   ####

// crearFiltroPartidos()

// ejecutarFiltros() //lo llamo desde el botón buscar
//      <- KeyupInput2
//        <-eliminarMayúsculas y minúsculas
//      =>inyectarCajaEquipos

//      ->filtrosEquipos
//      ->filtroResultados
//      ->filtrarPosición
//      ->filtrarEstado
//      => verPartidos

let arrayPartidos = [];
let arrayFiltro = [];
let variablesFiltro = {};

//si se está jugando cómo es y cuantos estados mas existen ¿aplazado? 
//estado:
//pendiente==SCHEDULED
//terminado==FINISHED
//jugando==????  &&

 // 
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
 
  let filtroEstado =  document.querySelector('input[name="estado"]:checked').value
  if(filtroEstado !== 'Todos') filtrarEstado({ estado: filtroEstado })
 
  variablesFiltro = {id: id,resultadoFiltro: filtroResultado,posicion: filtroPosicion,estado: filtroEstado, nombre: nombre, nombreError: nombreError }
  verPartidos(arrayFiltro); //&&
  //console.log(arrayFiltro)
  cajaEquiposVista2.innerText = ""; //limpio la caja para evitar que me salga una lista muy larga
  //console.log("variablesFiltro:"+ JSON.stringify(variablesFiltro));
 
  document.querySelector('#inputEquipos2').value = nombre;
  console.log("nombreError: "+nombreError);
  errorInput.innerText = keyupInput2().err ? (`Ups no hay equipos que contengan: ${nombreError}`):""
}

//&& pendiente de extraer la info desde una función 
function keyupInput2(){
  //console.log(input2.value)
  //&& crear función
  let errorEquipo = {id: 0, nombre: 'inserta un nombre válido', err:true}
  let idEquipos = [
    {id: 0, nombre: 'Todos los Equipos'},
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
  let buscandoId = idEquipos.filter(function(equipo){
    return eliminarMayusculasEspacioTilde (equipo.nombre).includes(eliminarMayusculasEspacioTilde (input2.value));
  });
  inyectandoCajaEquipos2(buscandoId)
  //cajaEquiposVista2.innerText="Ups, con éste nombre no encontré nada"
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

// el término busqueda ha de llamarse id
function filtrarEquipos(id){
  //console.log(arrayPartidos);
  //console.log("id: "+id);
  if (id === 0){
    arrayFiltro = arrayPartidos
    return
  }
  //&& es probable que aquí tenga que hacer una cópia  con from
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
        //console.log("partido: " + JSON.stringify(partido));
        //if(id === partido.resultado) 
        return id == partido.resultado })
        //return partido })
      break;
    case "perdidos":
      //&& si ganó el equipo contrario
      arrayFiltro = arrayFiltro.filter((partido) => { if(id != partido.resultado && partido.resultado !== 'empate' && partido.resultado !== null ) return partido })
      break;
    case "empatados":
      arrayFiltro = arrayFiltro.filter((partido) => { if('empate' == partido.resultado) return partido })
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
function filtrarEstado({estado}){
  arrayFiltro = arrayFiltro.filter(function(partido){    
      return estado === partido.estado    
  })
}