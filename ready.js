/*Copyright notice: The API script was created by Jamie Wilson, this script was created by Jamie Wilson, I modified the script cause I have more forms on the same page which must be submitted to the same google sheet.*/
/*The original script which was written by Jamie Wilson:
<script>
  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>
*/

// The modified version of the above script so that it fits my project: 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzl_iZl2GSghQL8nc2nvpy3CGFH8dknUtwnTyjzfhVxsO_dsmZki8homPF6K5rPlai-/exec'
const readyForms = document.querySelectorAll('form[name="submit-to-google-sheet"]')


readyForms.forEach(readyForm => {
    readyForm.addEventListener('submit', (e) => {
        readyForms.forEach((readyForm) => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(readyForm)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })    
    });
});




