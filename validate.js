//Copyright notice: The API script was created by Jamie Wilson. I slightly modified the script cause I have more forms on the same page which must be submitted to the same google sheet. See the original script below. 
const contactForm = document.getElementById('form');
const emailInput = document.getElementById('email') //good async needed
const userName = document.getElementById("name");
const placeholderValue = document.getElementById("msg").placeholder;
const messageInput = document.getElementById("msg");

const errorElement = document.getElementById('error-msg');
const errorForName = document.getElementById("error-name");
const messageInputError = document.getElementsByClassName('error-for-msg')[0];

const myRegex = /([a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,4})/; //try it maybe without gm
const scriptURLContact = 'https://script.google.com/macros/s/AKfycbwju5w4XnkHdxU7D8AIkGntuWU9dlKE5WsyL5UL0Jb-HfEeNg-Xt3g4Ze0FtgbH6Jo/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    let errorEmail = []
    let errorName = []
    let messageError = [] 
    //email address
    if (emailInput.value.trim() === '' || emailInput.value.trim() == null) {
        errorEmail.push('E-Mail Address is required');
        emailInput.classList.add('active')
    }

    else if (emailInput.value.trim().match(myRegex) == null) {
        e.preventDefault()
        errorEmail.push('Please enter a valid e-mail address');
        emailInput.classList.add('active')
    } else {
        emailInput.classList.remove('active')
    }

    //name input
    if (userName.value.trim() === '' || userName.value.trim() == null) {
        errorName.push("Name is required")
        userName.classList.add('active')
    } else {
        userName.classList.remove('active')
    }
    
    //message input
    if (messageInput.value.trim() === '' || messageInput.value.trim() == null) {
        messageError.push("Message is required")
        messageInput.classList.add('active')
        messageInputError.classList.add('active') //adds margin-bottom to error-message
    } else {
        messageInput.classList.remove('active')
        messageInputError.classList.remove('active')
    }

    if (errorEmail.length > 0 || errorName.length > 0 || messageError.length > 0) {
        e.preventDefault()
        errorElement.innerHTML = errorEmail.join(', ');
        errorForName.innerHTML = errorName.join(',')
        messageInputError.innerHTML = messageError.join(', ')
    
    } else { //Copyright notice: see the original code below.
        e.preventDefault()
        fetch(scriptURLContact, { method: 'POST', body: new FormData(form) })
            .then(response => alert('Thank you for your request'))
            .catch(error => alert('Error!', error.message))
    }
});

//hide error messages when input a value
const inputElements = [emailInput, userName, messageInput];
const errorElements = [errorElement, errorForName, messageInputError];

inputElements.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
        if(inputElement.value.trim() !== '' && errorElement.style.display === 'block') {
            errorElement.style.display = 'none'
        }
    });
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



