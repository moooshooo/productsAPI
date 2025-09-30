/*

GET https://api.futureplayground.se/products

Description: Returns a list of products.

Response type: Product[]

*/

/*

1. Vi anropar våran API med hjälp av fetch.
2. Eftersom anropet görs till en extern tredjepart, så kan det komma att ta tid. Därför kommer fetch
att ge oss ett löfte om att den ska återkomma med responsen från APIet.
3. Under tiden kommer koden att fortsätta till nästa rad. Om vi skulle försöka komma åt responsen direkt efteråt så skulle vi bara komma åt självaste löftet och inte responsen.
4. Men med hjälp av then, kan vi säga till fetch att köra våran kod NÄR löftet har uppfyllts och responsen har mottagits.
5. Vi skickar därför in en funktion till then med en parameter response. När fetch har fått responsen från APIet kommer den att anropa våran funktion och skicka med responsen som parameter till våran funktion.

*/

// Hämtar products-list diven
const productsList = document.getElementsByClassName("products-list")[0];

// Anropar vi APIet
fetch("https://api.futureplayground.se/products")
.then((response) => { // När vi har fått response, så körs våran arrow-funktion
  response.json() // Omvandla data från JSON till Javascript Objekt (parse)
  .then((parsedProducts) => { // Vi får våran parseade data, i vårt fall en array av produkter

    // För varje produkt i vår lista av produkter, skapa en div med bild och titel och pris och lägg in den i listan på rad 23.
    for (product of parsedProducts) {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const productImage = document.createElement("img");
      productImage.src = product.options.primary_options[0].image;

      const productTitle = document.createElement("p");
      productTitle.textContent = product.name;

      const productPrice = document.createElement("p");
      productPrice.textContent = product.price;

      productElement.appendChild(productImage);
      productElement.appendChild(productTitle);
      productElement.appendChild(productPrice);

      productsList.appendChild(productElement);
    }
  });
});

/* Anteckningar / Kladd
 


const response = `{"name": "Ahmad", "age": 30}`;

const person = {
  age: 30,
  isAlive: true,
};

/*

XML
<person>
    <age>30</age>
    <isAlive>true</isAlive>
</person>

JSON

{
 "age": 30,
 "isAlive": true
}

*/

// const personJson = JSON.stringify(person);

// console.log(personJson);

/*

Vi behöver parse den. Omvandlas från string till motsvarande datatyp i JS. Alltså array eller objekt.

En giltig JSON-string måste antingen börja som en array eller ett objekt i roten.


JSON är baserad på Javascript-objekt

Javascript Object Notation
*/
