//Check of de js geladen is.
console.log('Loaded JS');


//function die laat zien wat er in de console komt te staan
//Hier word de parameter gelooped in myData en gelogged.
function showInConsole(myData) {
  for (let i = 0; i < myData.length; i++) {
    const element = myData[i];
    console.log(element);
  }
}

//function die laat zien wat er in de cards komt te staan/card worden gemaakt.
//Hier worden classlists gebruikt om classes in javascript te geven.
function showInCards(myData) {
  const cardsContainer = document.querySelector(".cards-container");
  for (let i = 0; i < myData.length; i++) {
    const item = myData[i];
    const card = document.createElement("div");
    card.classList.add("card", "col-md-4");
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.src = item.imageUrl;
    cardImg.alt = item.title;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = item.title;
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = item.description;
    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card-text");
    cardPrice.textContent = "$" + item.price;

    //Appendchild wordt hier gebruikt om de classes makkelijker te gebruiken.
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
  }
}
//fetch data van de link
fetch('https://mbo-sd.nl/period3-fetch/clothes-shirt-emporio-armani')
  .then(myData => myData.json())
  .then(myDataJSON => {
    showInConsole(myDataJSON);
    showInCards(myDataJSON);
  })
  //Als je geen internet hebt, komt er een error.
  .catch(error => console.error("error"));



