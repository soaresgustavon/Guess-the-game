let computerNumber
let userNumbers = []

function init(){
    computerNumber = Math.floor(Math.random() * 101)
    console.log(computerNumber)
}

function compareNumber(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
}
