console.log('tic tac toe')
//Break the project down into different components 
// (data, presentation, markup, style, DOM manipulation) and 
// brainstorm each component individually. Use whiteboards!

// --------------

var container = document.querySelector('.container')
var boxes = document.querySelectorAll('.box')
var resetBtn = document.querySelector('.reset-btn')
var declareStatus = document.querySelector('div h2')
var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')

var currentPlayer = 'x'

var p1WinCounter = 0
var p2WinCounter = 0

var timerID
var totalMoves = 0
var p1moves = 0
var p2moves = 0

// create a function to check if a player has won
// start with winning combos
// horizontal: 123, 456, 789
// vertical: 147, 258, 369
// diagonal: 159,357

//NOTE: NEED TO FIGURE OUT IF MORE THAN 1 COMBO WINS 
var checkWin = function() {
    if (one.textContent === currentPlayer && two.textContent === currentPlayer && three.textContent === currentPlayer) {
        console.log('123')
        showWinner(one,two,three)
    } else if (one.textContent === currentPlayer && four.textContent === currentPlayer && seven.textContent === currentPlayer) {
        console.log('147')
        showWinner(one,four,seven)
    } else if (one.textContent === currentPlayer && five.textContent === currentPlayer && nine.textContent === currentPlayer) {
        console.log('159')
        showWinner(one,five,nine)
    } else if (two.textContent === currentPlayer && five.textContent === currentPlayer && eight.textContent === currentPlayer) {
        console.log('258')
        showWinner(two,five,eight)
    } else if (three.textContent === currentPlayer && six.textContent === currentPlayer && nine.textContent === currentPlayer) {
        console.log('369')
        showWinner(three,six,nine)
    } else if (three.textContent === currentPlayer && five.textContent === currentPlayer && seven.textContent === currentPlayer) {
        console.log('357')
        showWinner(three,five,seven)
    } else if (four.textContent === currentPlayer && five.textContent === currentPlayer && six.textContent === currentPlayer) {
        console.log('456')
        showWinner(four,five,six)
    } else if (seven.textContent === currentPlayer && eight.textContent === currentPlayer && nine.textContent === currentPlayer) {
        console.log('789')
        showWinner(seven,eight,nine)
    } else {
        if (totalMoves === 9) {
            console.log("It's a DRAW")
            declareStatus.textContent = "It's a DRAW!"
            declareStatus.classList.remove('hidden')
        }
    }
}


var takeTurn = function() {
    //ignore if target clicked is not .box
    if(!event.target.classList.contains('box')) {
        return
    }
    //ignore if target clicked has p1 or p2 element already
    if(event.target.textContent === 'x' || event.target.textContent === 'o') {
        return
    }
    if (currentPlayer === 'x') {
        event.target.textContent = 'x'
        totalMoves++
        checkWin()
        currentPlayer = 'o'    
    } else {
        event.target.textContent = 'o'
        totalMoves++
        checkWin()
        currentPlayer = 'x'
    }
}

var showWinner = function(box1, box2, box3) {
    container.removeEventListener('click',takeTurn)
    box1.classList.add('win')
    box2.classList.add('win')
    box3.classList.add('win')
    declareStatus.textContent = currentPlayer.toUpperCase() + ' is the winner!'
    declareStatus.classList.remove('hidden')
}

var reset = function() {
    boxes.forEach(function(box) {
        box.textContent = ""
        box.classList.remove('win')
    })
    currentPlayer = 'x'
    totalMoves = 0
    container.addEventListener('click', takeTurn)
    declareStatus.classList.add('hidden')
    console.log('reset')
}

//event listeners
container.addEventListener('click', takeTurn)
resetBtn.addEventListener('click', reset)
