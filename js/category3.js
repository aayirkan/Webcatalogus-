// console.log('Loaded JS');
//loops through my data

function showInConsole(myData) {
    for (let i = 0; i < myData.length; i++) {
      const element = myData[i];
      console.log(element);
    }
  }
  
  function showInCards(myData) {
    const cardsContainer = document.querySelector(".card-container");

    //deze card wordt in de html gezet
    for (let i = 0; i < myData.length; i++) {
      const item = myData[i];
      const card = document.createElement("div");
      card.classList.add("card","col-md-3", "p-5");  //hier wordt de grootte bepaald 
      const cardImg = document.createElement("img");
      cardImg.classList.add("card-img-top"); //hier wordt een class ge add aan de card
      cardImg.src = item.imageUrl; //de property worden in de cards gezet
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
      
      //Apenchild woredt hier gebruikt om de classes makkelijker te gebruiken//
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardPrice);
      card.appendChild(cardImg);
      card.appendChild(cardBody);
      cardsContainer.appendChild(card);
    }
  }
  
  //fetch api data
  fetch('https://mbo-sd.nl/period3-fetch/clothes-jeans-ralph-lauren')
    .then(myData => myData.json())
    .then(myDataJSON => {
      showInCards(myDataJSON);
    })
  