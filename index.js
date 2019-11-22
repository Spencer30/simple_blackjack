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

//Card Slots
let playerCardOne = document.getElementById('playerOne');
let playerCardTwo = document.getElementById('playerTwo');
let playerCardThree = document.getElementById('playerThree');
let playerCardFour = document.getElementById('playerFour');
let playerCardFive = document.getElementById('playerFive');
let playerCardSix = document.getElementById('playerSix');
let playerCardSeven = document.getElementById('playerSeven');
let dealerCardOne = document.getElementById('dealerOne');
let dealerCardTwo = document.getElementById('dealerTwo');

//Wager, Balance and Current Hand
let balanceId = document.getElementById('balanceDisplay');
let wagerId = document.getElementById('wagerDisplay');
let handScore = document.getElementById('handScore');

//Buttons
let standButton = document.getElementById('standBtn');
let hitButton = document.getElementById('hitBtn');
let dealButton = document.getElementById('deal');
let wagerButton = document.getElementById('wager');
let newGameButton = document.getElementById('newGame');

//Scoring Variables
let playerScore, dealerScore;
let balance = 500;
let wager = 25;

let playerTurn = true;

const changeWager = () => {
    let wagerPrompt = prompt('How much would you like to wager per hand?')
    while (wagerPrompt > balance) {
        wagerPrompt = prompt('Not enough money. Please enter a valid wager')
    }
    wagerId.innerHTML = `Current Wager: $${wagerPrompt}`
    wager = wagerPrompt;
}

const shuffleCards = (cardArr) => {
    let cardDeck = [];
    let randomNumber, card;
    for (let i = 0; i < 16; i++) {
        randomNumber = Math.floor(Math.random() * cardArray.length);
        card = cardArray.splice(randomNumber, 1);
        if (!cardDeck.includes(card)) {
            cardDeck.push(card[0])
        }
    }
    // console.log(cardDeck);
    // console.log(cardArray.length)
    return cardDeck;
}



/*
Shuffle cards
Deal cards
calculate hand

*/

const deal = (cardArr) => {
    //Subtract from Balance
    balanceId.innerHTML = `Balance: $${balance - wager}`;

    //Shuffle Deck and get first 4 cards
    let shuffleDeck = shuffleCards(cardArray);
    console.log(shuffleDeck);
    let cardOne = shuffleDeck.shift();
    let cardTwo = shuffleDeck.shift();
    let cardThree = shuffleDeck.shift();
    let cardFour = shuffleDeck.shift();
    let cardFive = shuffleDeck.shift();;
    let cardSix = shuffleDeck.shift();
    let cardSeven = shuffleDeck.shift();
    let cardEight = shuffleDeck.shift();
    let cardNine = shuffleDeck.shift();
    let cardTen = shuffleDeck.shift();
    let cardEleven = shuffleDeck.shift();
    let cardTwelve = shuffleDeck.shift();

    //Deal Cards
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

    //Show Hit or Stand Buttons / hide others
    setTimeout(hitOrStandDisplay, 200);

    //Calculate Current Hand Score
    playerScore = cardOne.value + cardThree.value;
    dealerScore = cardTwo.value + cardFour.value;
    handScore.innerHTML = `Current Hand: ${playerScore}`

    //Handle the Hit button    
    let count = 0;
    hitButton.addEventListener('click', () => {
        count += 1;
        if (count === 1) {
            playerCardThree.src = cardFive.imgUp;
            playerCardThree.style.display = 'block'
            playerScore += cardFive.value;
            handScore.innerHTML = `Current Hand: ${playerScore}`;
        } else if (count === 2) {
            playerCardFour.src = cardSix.imgUp;
            playerCardFour.style.display = 'block'
            playerScore += cardSix.value;
            handScore.innerHTML = `Current Hand: ${playerScore}`;
        } else if (count === 3) {
            playerCardFive.src = cardSeven.imgUp;
            playerCardFive.style.display = 'block'
            playerScore += cardSeven.value;
            handScore.innerHTML = `Current Hand: ${playerScore}`;
        }
    })

    //Handle the Stand Button
    standButton.addEventListener('click', () => {
        standButton.style.display = 'none';
        hitButton.style.display = 'none';
        playerTurn = false;

        //Deal Dealer Cards
        if (!playerTurn){
            dealerCardOne.src = cardTwo.imgUp;
            if (count === 0) {
                dealerCardThree = cardFive.imgup
            }
        }
    })

    
    

}

const hitOrStandDisplay = () => {
    standButton.style.display = 'block';
    hitButton.style.display = 'block';
    dealButton.style.display = 'none'
    wagerButton.style.display = 'none'
    newGameButton.style.display = 'none'
}

