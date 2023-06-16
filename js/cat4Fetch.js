// console.log(`Loading js`);

//List of links the website uses for the API
const shoeAPI = ['https://mbo-sd.nl/period3-fetch/clothes-shoe-dr-martens', 
'https://mbo-sd.nl/period3-fetch/clothes-shoe-nike', 
'https://mbo-sd.nl/period3-fetch/clothes-shoe-puma'];

//Link of the chosen API which is saved
let currentLink;

//This queryselector checks which page is currently open.
const cardContainer = document.querySelector(`.card-container`);

function loadAPILink() {
    //Checks on which page the browser currently is
    if (window.location.pathname == '/subject-four/category-one.html') {
        currentLink = shoeAPI[0];
    } else if (window.location.pathname == '/subject-four/category-two.html') {
        currentLink = shoeAPI[1];
    } else if (window.location.pathname == '/subject-four/category-three.html') {
        currentLink = shoeAPI[2];
    }

    //If nothing goes wrong then the website fetches the content
    if (currentLink !== undefined && currentLink !== null) {
        fetch(currentLink)
        .then(rawData => rawData.text())
        .then(textData => JSON.parse(textData))
        .then(jsObject => loadWebsiteContent(jsObject));
    } else {
        //In case the website loads incorrectly it logs in the console it did not load correctly, then it loads after a little while.
        console.log(`Error: Website loaded incorrectly`);
        
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }
}

//Load the current loaded API link
function loadWebsiteContent(jsObject) {
    cardContainer.innerHTML = ``;
    
    //Loops through the array and loads every object in
    for (let i = 0; i < jsObject.length; i++) {
        const object = jsObject[i];

        //Creates a card and puts the informationb on the right place
        cardContainer.innerHTML += 
        `<div class="container-fluid">
        <div class="row">
            <div class="col-1 col-sm-2"></div>
            <div class="col-10 col-sm-8">
                <div class="row mt-2">
                    <h2 class="">${object.title}</h2>
                    <h4 class="text-secondary">Informatie over de ${object.title}</h4>
                    <div class="row">
                        <div class="col-12 col-lg-8 p-0">
                            <div class="card">
                                <div class="row">
                                    <div class="col d-flex align-items-center">
                                        <div class="card-body">
                                            <p class="card-text description">${object.description}</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src="${object.imageUrl}" class="img-img-top w-100" alt="Afbeelding van de ${object.title}">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 bg-secondary pt-3 pr-3 mb-5 mb-lg-0">
                            <h5 class="text-warning">Kleur</h5>
                            <p class="text-white fw-bold">${object.colour}</p>
                            <h5 class="text-warning">Schoenmaten</h5>
                            <p class="text-white fw-bold">${object.sizes}</p>
                            <h5 class="text-warning mt-3">Prijs</h5>
                            <p class="text-white fw-bold fs-4">&euro; ${object.price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1 col-sm-2"></div>
        </div>
    </div>`;
    }
}

loadAPILink();