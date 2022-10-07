const imgPrint = document.getElementById('card-img')
const namePrint = document.getElementById('name')
const hpPrint = document.getElementById('hp')
const weightPrint = document.getElementById('weight')
const heightPrint = document.getElementById('height')
const typePrint = document.getElementById('type')
const attackPrint = document.getElementById('attack')
const defencePrint = document.getElementById('defence')
const speedPrint = document.getElementById('speed')
const specialAttackPrint = document.getElementById('special-attack')
const specialDefencePrint = document.getElementById('special-defence')
const inputCapture = document.getElementById('input-pokemon')
const form = document.getElementById('form')


const fetchRequest = async (id) => {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(URL)
    const data = await res.json()
    return data
  } catch (error) {
    alert('Los datos ingresados son incorrectos o no se encuentran intente de nuevo')
    form.reset()
  }
}

const searchPokemon = async (e) => {
  e.preventDefault()
  const searchById = inputCapture.value
  const fetchedRequest = await fetchRequest(searchById)
  if (searchById === '') {
    alert('Ingresa un numero intente de nuevo')
    form.reset()
  }

  renderPokemon(fetchedRequest)
}

const renderPokemon = (data) => {
  renderMap(data)
  namePrint.innerHTML = `Name: ${data.name.toUpperCase()}`
  hpPrint.innerHTML = `HP: ${data.stats[0].base_stat}`
  imgPrint.src = `${data.sprites.other.home.front_default}`
  attackPrint.innerHTML = `Attack: ${data.stats[1].base_stat}`
  defencePrint.innerHTML = `Defence: ${data.stats[2].base_stat}`
  speedPrint.innerHTML = `Speed: ${data.stats[5].base_stat}`
  specialAttackPrint.innerHTML = `Special-Attack: ${data.stats[3].base_stat}`
  specialDefencePrint.innerHTML = `Special-Defence: ${data.stats[4].base_stat}`
  weightPrint.innerHTML = `Weight: ${data.weight / 10}Kg - Height: ${data.height / 10}Mts`
}


const renderMap = (data) => {
  data.types.filter((item) => {
    const result = item.type.name.toUpperCase()
    typePrint.innerHTML = `${result}`
  })
}

const init = () => {
  form.addEventListener('submit', searchPokemon)
}

init()






