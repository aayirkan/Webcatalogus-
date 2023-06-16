const nameInput = document.querySelector(`.name-input`);
const emailInput = document.querySelector(`.email-input`);
const questionInput = document.querySelector(`.question-input`);
const confirmButton = document.querySelector(`.confirm-button`);
const letterCounter = document.querySelector(`.letter-counter`);

let letterCount = 2000;

confirmButton.addEventListener(`click`, function() {
    const name = checkEmptyString(nameInput.value);
    const email = checkEmptyString(emailInput.value);
    const question = checkEmptyString(questionInput.value);

    let validationCorrect = true;

    if (name != ``) {
        nameInput.classList.remove(`validation-border`);
        nameInput.value = name;
    } else {
        nameInput.classList.add(`validation-border`);
        validationCorrect = false;
    }

    if (email != ``) {
        emailInput.classList.remove(`validation-border`);
        emailInput.value = email;
    } else {
        emailInput.classList.add(`validation-border`);
        validationCorrect = false;
    }

    if (question != `` && letterCount <= 2000) {
        questionInput.classList.remove(`validation-border`);
        questionInput.value = question;
    } else if (letterCount > 1999) {
        questionInput.classList.add(`validation-border`);
        validationCorrect = false;
    } else {
        questionInput.classList.add(`validation-border`);
        validationCorrect = false;
    }

    if (validationCorrect == false) {
        alert(`De vraag is niet verzonden`);
    } else {
        alert(`de vraag is verzonden`);
        let questionObject = {
            name:name,
            email:email,
            question:question
        };

        questionObject = JSON.stringify(questionObject);
        //Add code that sends object to server
        console.log(questionObject)
    }
});

document.body.addEventListener(`keydown`, (event) => {
    setTimeout(() => {
        letterCount = questionInput.value.length;
        letterCounter.innerHTML = 2000 - letterCount;
        if (letterCount > 1900) {
            letterCounter.classList.add(`red-text`);
        } else {
            letterCounter.classList.remove(`red-text`);
        }
    }, 1);
});

//This function removes unnecessary spaces!
function checkEmptyString(text) {
    let space = false;

    for (let i = 0; i < text.length; i++) {
        if (space == true && text.charAt(i) == ` `) {
            text = text.slice(0, i) + text.slice(i + 1);
            i--;
        } else if (text.charAt(i) == ` `) {
            space = true;
        } else {
            space = false;
        }
    }

    text = text.trim();
    return text;
}