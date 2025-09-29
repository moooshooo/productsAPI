/*
 * @Author: MoS 
 * @Date: 2025-09-29 20:06:18 
 * @Last Modified by: Mos
 * @Last Modified time: 2025-09-29 21:02:46
 * Project Name: Pokemon API 
*/

const pokeList = document.getElementsByClassName("pokeList")

fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((vadJagVill) => { vadJagVill.json().then((allOfThem) => {
    
        for (pokemon of allOfThem) {
            const pokemonCard = document.createElement("div")
            pokemonCard.classList.add("pokemonCard")

            const pokeName = document.createElement("p")
            pokeName.textContent = results[0].name

            pokeList.appendChild(pokemonCard)
        }
    })

    /* vadJagVill.json().then((inneHall) => {
    console.log(vadJagVill)

    for (product of inneHall) {
        const productElement = document.createElement("div")
        productElement.classList.add("product")
        
        const pokenName = document.createElement("p")
        pokenName.textContent = product.results[0].name
               
        productElement.appendChild(pokenName)

        productList.appendChild(productElement)
    })
    } */

})
