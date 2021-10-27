
const API='https://api.football-data.org/v2/competitions/2014'
const API_KEY='feb772340f1a4331991ee15d14e4fbd9'

// la función getData recibe el objeto 
// {endPoint:"standings"} || {endPoint:"matches"}
async function getData(Obj) {
  try {
    let cargando_spinner = document.querySelector("#cargando");
    cargando_spinner.innerHTML = spinner;
    const res = await fetch(`${API}/${Obj.endPoint}?=${API_KEY}`, {
        method: 'GET',
        headers: new Headers({'X-Auth-Token': API_KEY }),
    });
    const data = await res.json()
    cargando_spinner.innerHTML = ''
    return data
  } catch (error) {
    console.log(error)
  }
}