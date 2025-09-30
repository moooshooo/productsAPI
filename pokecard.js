/*
 * @Author: MoS 
 * @Date: 2025-09-30 13:05:51 
 * @Last Modified by: Mos
 * @Last Modified time: 2025-09-30 19:52:09
 */
console.log("Powered by: MosKaffe\n===========")
const pokemonCard = document.getElementsByClassName("pokemonCard")[0]

async function getPokemontList() {
    const getPokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    const returnPokemons = await getPokemons.json()
        
        for (let pokemon of returnPokemons.results) {

        const getOnePokeData = await fetch(pokemon.url)
        const returnOnePokeData = await getOnePokeData.json()
        
        const getSpeData = await fetch(returnOnePokeData.species.url)
        const returnSpeData = await getSpeData.json()
        
        const getEvoData = await fetch(returnSpeData.evolution_chain.url)
        const returnEvoData = await getEvoData.json()
        
        //Testar output i consolen
        //console.log(returnOnePokeData.sprites.back_default)
        //console.log(returnOnePokeData.name, returnOnePokeData.sprites.back_default);
        
        const pokeCardHolder = document.createElement("div")
        pokeCardHolder.classList.add("pokemonCard")

        const pokeCardImg = document.createElement("img")
        pokeCardImg.src = returnOnePokeData.sprites.back_default
        pokeCardImg.alt = pokemon.name
    }
}

getPokemontList()