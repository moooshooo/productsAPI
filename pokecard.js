/*
 * @Author: MoS 
 * @Date: 2025-09-30 13:05:51 
 * @Last Modified by: Mos
 * @Last Modified time: 2025-09-30 22:25:42
 */
console.log("Powered by: MosKaffe\n===========")

const pokemonCardList = document.getElementsByClassName("pokemonCardList")[0]

async function getPokemontList() {
    const getPokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
    const returnPokemons = await getPokemons.json()
        
        for (let pokemon of returnPokemons.results) {

        const getOnePokeData = await fetch(pokemon.url)
        const returnOnePokeData = await getOnePokeData.json()
        
        const getSpeData = await fetch(returnOnePokeData.species.url)
        const returnSpeData = await getSpeData.json()
        
        const getEvoData = await fetch(returnSpeData.evolution_chain.url)
        const returnEvoData = await getEvoData.json()

        const evoId = returnEvoData.id
        
        //Skapar en Kolla om gruppen redan finns
        let pokeGroupHolder = document.querySelector(`.pokeGroupHolder[pokeGroup='${evoId}']`)

        if (!pokeGroupHolder) {
        // Skapa ny grupp-container
        pokeGroupHolder = document.createElement("div")
        pokeGroupHolder.classList.add("pokeGroupHolder")
        pokeGroupHolder.setAttribute("pokeGroup", evoId) // unikt attribut

        // Lägg gruppen i huvudlistan
        pokemonCardList.appendChild(pokeGroupHolder)
        }

        const pokeCardHolder = document.createElement("div")
        pokeCardHolder.classList.add("pokemonCard")
        pokeCardHolder.setAttribute("id", `pokomenId-${returnOnePokeData.id}`)

        const pokeCardImg = document.createElement("img")
        pokeCardImg.src = returnOnePokeData.sprites.front_default
        pokeCardImg.alt = pokemon.name
        pokeCardImg.classList.add("pokeCardImg")

        const pokeName = document.createElement("p")
        pokeName.classList.add("pokeName")
        pokeName.textContent = pokemon.name 

        
        pokeCardHolder.appendChild(pokeCardImg)
        pokeCardHolder.appendChild(pokeName)
        pokeGroupHolder.appendChild(pokeCardHolder)

        //Lägg kortet i "rätt" grupp, dvs om den inte har samma evoId 
        pokeGroupHolder.appendChild(pokeCardHolder);
    }
}

getPokemontList()