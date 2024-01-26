let computerNumber
let userNumbers = []

function init(){
    computerNumber = Math.floor(Math.random() * 101)
    //console.log(computerNumber)
}

function compareNumber(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

if (userNumber > computerNumber){
    document.getElementById('textOutput').innerHTML = 'Your number is to high'
    document.getElementById('inputBox').value = ''
    }
else if (userNumber < computerNumber){
    document.getElementById('textOutput').innerHTML = 'Your number is to low'
    document.getElementById('inputBox').value = ''
    }
else{
    document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
    }
} 