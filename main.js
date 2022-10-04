
const fetchRequest = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(URL)
  const data = await res.json()
  console.log(data)
  console.log('NOMBRE POKEMON ==>', data.name)
  console.log('HABILIDAD 1 ==>',data.abilities[0].ability.name)
  console.log('HABILIDAD 2 ==>',data.abilities[1].ability.name)
  console.log('PESO ==>', data.weight / 10)
  console.log('ALTURA ==>', data.height / 10)
  console.log('IMAGEN ==>',data.sprites.other.home.front_default)
  data.types.map((item) => {
    console.log('TIPO ==>', item.type.name)
  })

  const hpStat = data.stats[0]
  console.log(hpStat.stat.name)
  console.log(hpStat.base_stat)

  const attackStat = data.stats[1]
  console.log(attackStat.stat.name)
  console.log(attackStat.base_stat)

  const defenceStat = data.stats[2]
  console.log(defenceStat.stat.name)
  console.log(defenceStat.base_stat)

  const specialAttack = data.stats[3]
  console.log(specialAttack.stat.name)
  console.log(specialAttack.base_stat)

  const specialDefence = data.stats[4]
  console.log(specialDefence.stat.name)
  console.log(specialDefence.base_stat)

  const speedStat = data.stats[5]
  console.log(speedStat.stat.name)
  console.log(speedStat.base_stat)

  return data
}


// url species para capturar el color

fetchRequest(25)
