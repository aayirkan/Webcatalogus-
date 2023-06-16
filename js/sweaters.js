console.log('Loaded JS');


function showInCards(myData) {  // this function loads the fetch data into the cards from the html.
    const cardsContainer = document.getElementById("cards-container"); // getting the html element from with js
  
    for (let i = 0; i < myData.length; i++) {  // looping through the data of fetch
      const item = myData[i]; 
  
      const card = document.createElement("div"); // creating a div element
      card.classList.add("card", "col-md-4",);  // adding classes to the div element
  
      const cardImg = document.createElement("img");
      cardImg.classList.add("card-img-top");
      cardImg.src = item.imageUrl; // getting the image url from the fetch data
      cardImg.alt = item.title; // getting the title from the fetch data
  
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
  
      cardBody.appendChild(cardTitle); // adding the title to the card
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardPrice);
  
      card.appendChild(cardImg);
      card.appendChild(cardBody);
  
      cardsContainer.appendChild(card); 
    }
  }
  


  fetch('https://mbo-sd.nl/period3-fetch/clothes-sweater-adidas') // fetching the data from the url
    .then(myData => myData.json())
    .then(myDataJSON => {
      // Call your existing showInConsole function
      showInConsole(myDataJSON);
      
      // Call the showInCards function to display the data in Bootstrap cards
      showInCards(myDataJSON);
    })
    .catch(error => console.error("error")); // if there is an error it will show in the console

  // Your existing function to log the data to the console
  function showInConsole(myData) {
    for (let i = 0; i < myData.length; i++) {
      const element = myData[i];

      console.log(element);
    }
  }