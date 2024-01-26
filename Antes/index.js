let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function init(){
    computerNumber = Math.floor(Math.random() * 101)
    //console.log(computerNumber)
}

function compareNumber(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if(attempts < maxGuesses){
        if (userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is to high'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            }
        
        else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is to low'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            }
        
        else{
            document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            }
    }
    else{
        document.getElementById('textOutput').innerHTML = 'You lose! The number of the computer was ' + computerNumber
    }
}