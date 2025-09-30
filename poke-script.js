/*
 * @Author: MoS 
 * @Date: 2025-09-29 20:06:18 
 * @Last Modified by: MoS
 * @Last Modified time: 2025-09-30 12:59:47
 * Project Name: Pokemon API 
*/

const pokeList = document.getElementsByClassName("pokeList")[0]

fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((svar) =>  svar.json()).then((allOfThem) => {
        for (let pokemon of allOfThem.results) {
            const pokemonCard = document.createElement("div")
            pokemonCard.classList.add("pokemonCard")

            const pokeName = document.createElement("p")
            pokeName.textContent = pokemon.name



            pokemonCard.appendChild(pokeName)
            pokeList.appendChild(pokemonCard)
        } })
