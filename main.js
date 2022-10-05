const imgPrint = document.getElementById('card-img')
const namePrint = document.getElementById('card-name')
const hpPrint = document.getElementById('card-hp')
const weightPrint = document.getElementById('card-weigth')
const heightPrint = document.getElementById('card-heigth')
const typePrint = document.getElementById('card-type')
const abilityPrint = document.getElementById('ability')
const attackPrint = document.getElementById('attack')
const defencePrint = document.getElementById('defence')
const speedPrint = document.getElementById('speed')
const specialAttackPrint = document.getElementById('special-attack')
const specialDefencePrint = document.getElementById('special-defence')
const inputCapture = document.getElementById('pokemon')


const fetchRequest = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(URL)
  const data = await res.json()
  namePrint.innerHTML = `Name: ${data.name.toUpperCase()}`
  abilityPrint.innerHTML = `${data.abilities[0].ability.name.toUpperCase()}, ${data.abilities[1].ability.name.toUpperCase()}`
  weightPrint.innerHTML = `Weight: ${data.weight / 10} Kg`
  heightPrint.innerHTML = `Height: ${data.height / 10} Mts`
  imgPrint.src = `${data.sprites.other.home.front_default}`
  data.types.map((item) => {
    typePrint.innerHTML = `Type: ${item.type.name.toUpperCase()}`
  })

  const hpStat = data.stats[0]
  hpPrint.innerHTML = `${hpStat.stat.name.toUpperCase()}: ${hpStat.base_stat}`
  
  
  const attackStat = data.stats[1]
  attackPrint.innerHTML = `${attackStat.stat.name.toUpperCase()}: ${attackStat.base_stat}` 
  

  const defenceStat = data.stats[2]
  defencePrint.innerHTML = `${defenceStat.stat.name.toUpperCase()}: ${defenceStat.base_stat}`
  


  const specialAttack = data.stats[3]
  specialAttackPrint.innerHTML = `${specialAttack.stat.name.toUpperCase()}: ${specialAttack.base_stat}` 

  const specialDefence = data.stats[4]
  specialDefencePrint.innerHTML = `${specialDefence.stat.name.toUpperCase()}: ${specialDefence.base_stat}`
  console.log(specialDefence.stat.name)
  console.log(specialDefence.base_stat)

  const speedStat = data.stats[5]
  speedPrint.innerHTML = `${speedStat.stat.name.toUpperCase()}: ${speedStat.base_stat}`
  

  return data
}

inputCapture.addEventListener('input', (e) => {
  const result = e.target.value
  fetchRequest(result)
})


// url species para capturar el color


