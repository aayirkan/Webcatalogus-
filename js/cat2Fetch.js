fetch('https://mbo-sd.nl/period3-fetch/clothes-jeans-hugo-boss')
.then(myData => myData.text())
.then(textData => JSON.parse(textData))
.then(tetData => showInConsole(tetData));

function showInConsole(data) {
    console.log(data);
}