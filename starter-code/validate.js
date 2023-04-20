//put gm maybe before/
//const myRegex = /([a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)gm/;
const contactForm = document.getElementById('form');
const emailInput = document.getElementById('email') //good async needed
const errorElement = document.getElementById('error-msg');
const userName = document.getElementById("name");
const errorForName = document.getElementById("error-name");

const myRegex = /([a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,4})/gm;
const scriptURLContact = 'https://script.google.com/macros/s/AKfycbwju5w4XnkHdxU7D8AIkGntuWU9dlKE5WsyL5UL0Jb-HfEeNg-Xt3g4Ze0FtgbH6Jo/exec'
const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {
    let errorMessages = []
    let errorName = []

    if (emailInput.value.trim() === '' || emailInput.value.trim() == null) {
        errorMessages.push('E-Mail Address is required');
    }

    else if (emailInput.value.trim().match(myRegex) == null) {
        e.preventDefault()
        errorMessages.push('Please enter a valid e-mail address');
    }

    if (userName.value.trim() === '' || userName.value.trim() == null) {
        errorName.push("Name is required")
    }

    if (errorMessages.length > 0) {
        e.preventDefault()
        errorElement.innerHTML = errorMessages.join(', ');
        errorForName.innerHTML = errorName.join(',')

    } else { //Copyright notice: This script below was written by Jamie Wilson, he is the owner of this JS code.
        e.preventDefault()
        fetch(scriptURLContact, { method: 'POST', body: new FormData(form) })
            .then(response => alert('Thank you for your request'))
            .catch(error => console.error('Error!', error.message))
    }
});

//hide error messages on click
const errorElements = [errorElement, errorForName];

emailInput.addEventListener('click', () => {
    emailInput.value = '';
    errorElements.forEach(element => {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        } else {
            element.style.display = 'none';
        }
    });

    errorElements.forEach(element => {
        if (emailInput.value.length >= 1) {
            element.style.display = 'none';
        }
    })
});

//Copyright notice: This script below was written by Jamie Wilson, he is the owner of this JS code.
/*const scriptURL = 'https://script.google.com/macros/s/AKfycbwju5w4XnkHdxU7D8AIkGntuWU9dlKE5WsyL5UL0Jb-HfEeNg-Xt3g4Ze0FtgbH6Jo/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
});*/



