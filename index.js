let cards = []
let sum = 0
isAlive = false
hasBlackjack = false
let message = document.getElementById("message")
let cardEl = document.getElementById("card-el")
let scoreEl = document.getElementById("score-el")
let randomCard = Math.floor(Math.random() * 10) + 1

function getRandomcard(){
    let randomCard = Math.floor(Math.random() * 10) +1
    return randomCard
}
function startGame(){
    isAlive = true
    hasBlackjack = false
    let card1 = getRandomcard()
    let card2 = getRandomcard()
    cards = [card1, card2]
    sum = card1 + card2
    renderGame()
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomcard()
        sum += card
        cards.push(card)
        renderGame()
    }

}


function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    scoreEl.textContent = "Sum: " + sum
    if(sum === 21){
        message.textContent = "You got Blackjack!"
        hasBlackjack = true
    }else if(sum <21){
        message.textContent = "Hit Or stay"
    }else{
        message.textContent = "Bust!"
        isAlive = false
    }
}

