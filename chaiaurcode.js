const form = document.querySelector('form')
// We are selecting the whole form tag because the submit button is inside the Form button.

form.addEventListener('submit', function(e){

e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
// Taking the input as the height by using the .value.

const weight = parseInt(document.querySelector('#weight').value)
//Taking the input as the weight by using the .value.

const results = document.querySelector('#results')

 if(height === '' || height < 0 || isNaN(height)) {
   results.innerHTML = "Please enter a Valid height." 
 }

 else if(weight === '' || weight < 0 || isNaN(weight)) {
   results.innerHTML = "Please enter a Valid weight." 
 }

 else{

  const bmi = (weight / ((height * height) / 10000)).toFixed(2) //Show the result.

  results.innerHTML = `<span>${bmi}</span>`
  if(bmi < 18.6) {
    range.innerHTML = "Under Weight"
  }
  else if(bmi > 18.6 && bmi < 24.9) {
    range.innerHTML = "Normal Range"
  }
  else if(bmi > 24.9) {
    range.innerHTML = "Over Weight"
  }
  else {
    range.innerHTML = "Dangerous"
  }
}

});