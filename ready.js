//Copyright notice: The API script was created by Jamie Wilson. I slightly modified the script cause I have more forms on the same page which must be submitted to the same google sheet. See the original script below. 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzl_iZl2GSghQL8nc2nvpy3CGFH8dknUtwnTyjzfhVxsO_dsmZki8homPF6K5rPlai-/exec'
const readyForms = document.querySelectorAll('form[name="submit-to-google-sheet-ready"]');
const errorElementsReady = document.querySelectorAll('.error-msg');
const myRegexReady = /([a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,4})/;
const emailInputs = document.querySelectorAll('.ready-input');
const submitButtonsDemo = document.querySelectorAll('.demo');


function validateReady(e) {
    for (let i = 0; i < emailInputs.length; i++) {
        let errorMessages = []
        let emailInput = emailInputs[i]
        let errorElementReady = errorElementsReady[i]
        let readyForm = readyForms[i]

        if (emailInput.value.trim() === '' || emailInput.value.trim() == null) {
            errorMessages.push('E-Mail Address is required');
        }

        else if (emailInput.value.trim().match(myRegexReady) == null) {
            e.preventDefault()
            errorMessages.push('Please enter a valid e-mail address');
        }

        if (errorMessages.length > 0) {
            e.preventDefault()
            errorElementReady.innerHTML = errorMessages.join(', ')
        } else {
            errorElementReady.innerHTML = '';
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(readyForm)})
                .then(response => alert('We will contact you soon!', response))
                .catch(error => alert('Error!', error.message))
            return //not sure that this is needed
        }
    }
};

function submitEvent() {
    for (let i = 0; i < readyForms.length; i++) {
        let readyForm = readyForms[i]
        readyForm.addEventListener('submit', validateReady)
    }
};

//maybe this isn´t needed
for (let i = 0; i < submitButtonsDemo.length; i++) {
    let submitButtonDemo = submitButtonsDemo[i];
    submitButtonDemo.addEventListener('click', submitEvent)
};

//Copyright notice: This script below was written by Jamie Wilson, he is the owner of this JS code.
/*const scriptURL = 'https://script.google.com/macros/s/AKfycbwju5w4XnkHdxU7D8AIkGntuWU9dlKE5WsyL5UL0Jb-HfEeNg-Xt3g4Ze0FtgbH6Jo/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
});*/





