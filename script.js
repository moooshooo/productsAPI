/*
GET https://api.futureplayground.se/products
Description: Return a list of products.
Response type: Product[]
*/

console.log("Mos startar\n===========")


const productList = document.getElementsByClassName("product-list")[0]
// Fetch anropar en extern API i syftet att få en löfte om uppfyllnad. När löftet(promise) blir uppfylld. Då kan funktionen i "then" starta.
fetch("https://api.futureplayground.se/products").then((vadJagVill) => {
    
    //console.log("Servern gillar oss,,,  yeiii. den svara till oss.",vadJagVill)
    
    const data = vadJagVill.json().then.
    ((inneHall) => {
        console.log( "Kan jag detta?",inneHall)
    })

    for (product of inneHall) {
        const productElement = document.createElement("div")
        productElement.classList.add("product")

        const productImg = document.createElement("img")
        productImg.src = inneHall.options.primary_options[0].image

        const productTitle = document.createElement("p")
        productTitle.textContent = inneHall.name

        const productPrice = document.createElement("p")
        productPrice.textContent = inneHall.price

        productElement.appendChild(productImg)
        productElement.appendChild(productTitle)
        productElement.appendChild(productPrice)

        productElement.appendChild(productElement)
    }
})

