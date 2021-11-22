//DOM elements
const resultEL = document.getElementById('result');
const passwordlengthEL = document.getElementById('passwordlength');
const capitalEL = document.getElementById('capital');
const lowerCaseEL = document.getElementById('lowerCase');
const numbersEL = document.getElementById('digits');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');

// function to get random characters of each criteria
const randomFunc = {
  lower: getRandomLower,
  capital: getRandomUpper,
  digits: getRandomNumber,
  symbol: getRandomSymbol,
};


// Add event listener to generate button. use element for uniformity instead of Btn
generateEL.addEventListener("click", () =>{
  const length = +passwordlengthEL.value;
  const hasLower= lowerCaseEL.checked;
  const hasUpper = capitalEL.checked;
  const hasSymbols = symbolsEL.checked;
  const hasNumbers = numbersEL.checked;

 resultEL.innerText= generatePassword(hasLower, hasUpper, hasSymbols, hasNumbers)
  
});


// Password Generator Function
function generatePassword (lower, upper, number, symbol, length)
var passwordLength = prompt(" How many characters will you need?")

if (passwordLength <= 8 || passwordLength > 128) {
  alert("password must be 8 or more characters")
  passwordLength = prompt(" How many characters will you need?")
} {

  //password variable
  let generatedPassword = '';

  // count the number of checked items
  const checkedItems  = lower + upper + number + symbol;
// using an array of objects and filter out unchecked boxes based on whether true or false
  const checkedArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  if (checkedItems === 0) {
    return '';
  }
// loop and generate
for (let i = 0; i < length ; i += checkedItems) {
  checkedArr.forEach(checked => {
    const funcName = Object.keys (checked)[0];

   generatedPassword += randomFunc [funcName](); 
  });
}
//password meeting all criteria
const meetsCriteria = generatedPassword.slice(0, length);

}

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}
function getRandomSymbol () {
  const symbols = '!#@$&%^*)('
  return symbols[Math.floor(Math.random()* symbols.length)];


}



