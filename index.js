/* 
Player Turn 
Dealer Turn
Card Class
Card Array
Scoring Function
Game Rules Fucntion
*/

console.log('linked!')
class Card {
    constructor(name, value, imgUp, imgDown, faceUp) {
        this.name = name,
        this.value = value,
        this.imgUp = imgUp,
        this.imgDown = imgDown,
        this.faceUp = faceUp
    }


}


//Hearts
let aceOfHearts = new Card('Ace of Hearts', 11, "images/AH.png", "images/red_back.png", true);
let queenOfHearts = new Card('Queen of Hearts', 10, "images/QH.png", "images/red_back.png", true);
let tenOfHearts = new Card('Ten of Hearts', 10, "images/10H.png", "images/red_back.png", true);
let sixOfHearts = new Card('Six Of Hearts', 6, "images/6H.png", "images/red_back.png", true);

//Spades
let aceOfSpades = new Card('Ace of Spades', 11, "images/AS.png", "images/red_back.png", true);
let kingOfSpades = new Card('King of Spades', 10, "images/KS.png", "images/red_back.png", true);
let nineOfSpades = new Card('Nine of Spades', 9, "images/9S.png", "images/red_back.png", true);
let fiveOfSpades = new Card('Five of Spades', 5, "images/5S.png", "images/red_back.png", true);

//Clubs
let aceOfClubs = new Card('Ace of Clubs', 11, "images/AC.png", "images/red_back.png", true);
let jackOfClubs = new Card('Jack of Clubs', 10, "images/JC.png", "images/red_back.png", true);
let sevenOfClubs = new Card('Seven of Clubs', 7, "images/7C.png", "images/red_back.png", true);
let threeOfClubs = new Card('Three of Clubs', 3, "images/3C.png", "images/red_back.png", true);

//Diamonds
let aceOfDiamonds = new Card('Ace of Diamonds', 11, "images/AD.png", "images/red_back.png", true);
let eightOfDiamonds = new Card('Eight of Diamonds', 8, "images/8D.png", "images/red_back.png", true);
let fourOfDiamonds = new Card('Four of Diamonds', 4, "images/4D.png", "images/red_back.png", true);
let twoOfDiamonds = new Card('Two of Diamonds', 2, "images/2D.png", "images/red_back.png", true);


let cardArray = [aceOfSpades, aceOfHearts, aceOfClubs, aceOfDiamonds, kingOfSpades, nineOfSpades, fiveOfSpades, queenOfHearts, tenOfHearts, sixOfHearts, jackOfClubs, sevenOfClubs, threeOfClubs, eightOfDiamonds, fourOfDiamonds, twoOfDiamonds];


const changeWager = (balance) => {
    balance = 500;
    let wager = prompt('How much would you like to wager per hand?')
    while (wager > balance) {
        wager = prompt('Not enough money. Please enter a valid wager')
    }
    document.getElementById('wager').innerHTML = `Current Wager: $${wager}`
}

// const shuffleCards = (cardArr) => {
//     let cardDeck = [];
//     let randomNumber, card;
//     for (let i=0; i<20; i++){
//         randomNumber = Math.floor(Math.random() * cardArray.length);
//         card = cardArray[randomNumber];
//         if (!cardDeck.includes(card)){
//             cardDeck.push(card)
//         }
//     }
//     console.log(cardDeck);
//     return cardDeck;
// }

// shuffleCards(cardArray)

const deal = (cardArr) => {    
    let playerCardOne = document.getElementById('playerOne');
    let playerCardTwo = document.getElementById('playerTwo');
    let dealerCardOne = document.getElementById('dealerOne');
    let dealerCardTwo = document.getElementById('dealerTwo');

    let cardOneNumber = Math.floor(Math.random() * cardArray.length);
    cardOne = cardArray[cardOneNumber];
    cardArray.splice(cardOneNumber, 1);    

    let cardTwoNumber = Math.floor(Math.random() * cardArray.length);
    cardTwo = cardArray[cardTwoNumber];
    cardArray.splice(cardTwoNumber, 1);    

    let cardThreeNumber = Math.floor(Math.random() * cardArray.length);
    cardThree = cardArray[cardThreeNumber];
    cardArray.splice(cardThreeNumber, 1)

    let cardFourNumber = Math.floor(Math.random() * cardArray.length);
    cardFour = cardArray[cardFourNumber];
    cardArray.splice(cardFourNumber, 1)
    

    playerCardOne.src = cardOne.imgUp;
    playerCardOne.style.display = 'block';

    setTimeout(function () {
    dealerCardOne.src = cardTwo.imgDown;
        dealerCardOne.style.display = 'block';
    }, 700)

    setTimeout(function () {
    playerCardTwo.src = cardThree.imgUp;
        playerCardTwo.style.display = 'block';
    }, 1500)

    setTimeout(function () {
    dealerCardTwo.src = cardFour.imgUp
        dealerCardTwo.style.display = 'block';
    }, 2000)

    setTimeout(hitOrStandDisplay, 200);
}

const hitOrStandDisplay = () => {
    let standButton = document.getElementById('standBtn');
    let hitButton = document.getElementById('hitBtn');
    let dealButton = document.getElementById('deal');
    let wagerButton = document.getElementById('wager');
    let newGameButton = document.getElementById('newGame');
    standButton.style.display = 'block';
    hitButton.style.display = 'block';
    dealButton.style.display = 'none'
    wagerButton.style.display = 'none'
    newGameButton.style.display = 'none'
}

const showCard3 = (cardArr) => {
    let nextCardThree = document.getElementById('playerThree');
    cardThreeNumber = Math.floor(Math.random() * cardArray.length);
    let cardThree = cardArray[cardThreeNumber];
    cardArray.splice(cardThreeNumber, 1); 
    nextCardThree.src = cardThree.imgUp
    nextCardThree.style.display = 'block';
}

const showCard4 = () => {
    let nextCardFour = document.getElementById('playerFour');
    cardFourNumber = Math.floor(Math.random() * cardArray.length);
    let cardFour = cardArray[cardFourNumber];
    cardArray.splice(cardFourNumber, 1); 
    nextCardFour.src = cardFour.imgUp
    nextCardFour.style.display = 'block';
}

const showCard5 = () => {
    let nextCardFive = document.getElementById('playerFive');
    cardFiveNumber = Math.floor(Math.random() * cardArray.length);
    let cardFive = cardArray[cardFiveNumber];
    cardArray.splice(cardFiveNumber, 1); 
    nextCardFive.src = cardFive.imgUp
    nextCardFive.style.display = 'block';
}

const showCard6 = () => {
    let nextCardSix = document.getElementById('playerSix');
    cardSixNumber = Math.floor(Math.random() * cardArray.length);
    let cardSix = cardArray[cardSixNumber];
    cardArray.splice(cardSixNumber, 1); 
    nextCardSix.src = cardSix.imgUp
    nextCardSix.style.display = 'block';
}

const showCard7 = () => {
    let cardSeven = document.getElementById('playerSeven');
    cardSeven.style.display = 'block';
}

let count = 0;
const hit = () => {    
    document.getElementById('hitBtn').addEventListener('click', (e) => {        
        count += 1
        if (count === 1) {
            showCard3();            
        } else if (count === 2) {
            showCard4();            
        } else if (count === 3) {
            showCard5();
        } else if (count === 4) {
            showCard6();
        } else if (count === 5) {
            showCard7();
        }
    })
    
}
