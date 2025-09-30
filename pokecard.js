/*
 * @Author: MoS 
 * @Date: 2025-09-30 13:05:51 
 * @Last Modified by: MoS
 * @Last Modified time: 2025-09-30 14:38:45
 */

//const pokemonCardList = document.getElementById("pokemonCardList")

async function getPokemontList() {
const getPokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
const returnPokemons = await getPokemons.json()

const getOnePokeData = await fetch(returnPokemons.results[0].url)
const returnOnePokeData = await getOnePokeData.json()

const getSpeData = await fetch(returnOnePokeData.species.url)
const returnSpeData = await getSpeData.json()

const getEvoData = await fetch(returnSpeData.evolution_chain.url)
const returnEvoData = await getEvoData.json()



console.log(returnOnePokeData.name,returnOnePokeData.base_experience,returnSpeData.color.name, returnEvoData.baby_trigger_item)

}

getPokemontList()