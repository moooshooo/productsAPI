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
    
    vadJagVill.json().then((inneHall) => {
        

    for (product of inneHall) {
        const productElement = document.createElement("div")
        productElement.classList.add("product")

        const productImg = document.createElement("img")
        productImg.src = product.options.primary_options[0].image

        const productTitle = document.createElement("p")
        productTitle.textContent = product.name

        const productPrice = document.createElement("p")
        productPrice.textContent = product.price

        productElement.appendChild(productImg)
        productElement.appendChild(productTitle)
        productElement.appendChild(productPrice)

        //Här lägger du allt i DIVen "productlist"
        productList.appendChild(productElement)
    }
})

})
