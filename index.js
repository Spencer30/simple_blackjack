/**
 * Simple Blackjack allows a user to play against a dealer with only hit or stand options. No double or split as of yet. Player goes first and will have the option to hit or stand. If hit, their hand score increases and another card is shown.
 */

//enums and tostring
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
let threeOfHearts = new Card('Three Of Hearts', 3, "images/3H.png", "images/red_back.png", true);
let twoOfHearts = new Card('Two Of Hearts', 2, "images/2H.png", "images/red_back.png", true);

//Spades
let aceOfSpades = new Card('Ace of Spades', 11, "images/AS.png", "images/red_back.png", true);
let kingOfSpades = new Card('King of Spades', 10, "images/KS.png", "images/red_back.png", true);
let nineOfSpades = new Card('Nine of Spades', 9, "images/9S.png", "images/red_back.png", true);
let fiveOfSpades = new Card('Five of Spades', 5, "images/5S.png", "images/red_back.png", true);
let fourOfSpades = new Card('Four of Spades', 4, "images/4S.png", "images/red_back.png", true);
let threeOfSpades = new Card('Three of Spades', 3, "images/3S.png", "images/red_back.png", true);

//Clubs
let aceOfClubs = new Card('Ace of Clubs', 11, "images/AC.png", "images/red_back.png", true);
let jackOfClubs = new Card('Jack of Clubs', 10, "images/JC.png", "images/red_back.png", true);
let sevenOfClubs = new Card('Seven of Clubs', 7, "images/7C.png", "images/red_back.png", true);
let fourOfClubs = new Card('Four of Clubs', 4, "images/4C.png", "images/red_back.png", true);
let threeOfClubs = new Card('Three of Clubs', 3, "images/3C.png", "images/red_back.png", true);
let twoOfClubs = new Card('Two of Clubs', 2, "images/2C.png", "images/red_back.png", true);

//Diamonds
let aceOfDiamonds = new Card('Ace of Diamonds', 11, "images/AD.png", "images/red_back.png", true);
let eightOfDiamonds = new Card('Eight of Diamonds', 8, "images/8D.png", "images/red_back.png", true);
let fiveOfDiamonds = new Card('Five of Diamonds', 5, "images/5D.png", "images/red_back.png", true);
let fourOfDiamonds = new Card('Four of Diamonds', 4, "images/4D.png", "images/red_back.png", true);
let threeOfDiamonds = new Card('Three of Diamonds', 3, "images/3D.png", "images/red_back.png", true);
let twoOfDiamonds = new Card('Two of Diamonds', 2, "images/2D.png", "images/red_back.png", true);

//Hold all the Cards with an Array
let cardArray = [aceOfSpades, aceOfHearts, aceOfClubs, aceOfDiamonds, kingOfSpades, nineOfSpades, fiveOfSpades, fourOfSpades, threeOfSpades, queenOfHearts, tenOfHearts, sixOfHearts, threeOfHearts, twoOfHearts, jackOfClubs, sevenOfClubs, fourOfClubs, threeOfClubs, twoOfClubs, eightOfDiamonds, fiveOfDiamonds, fourOfDiamonds, threeOfDiamonds, twoOfDiamonds];

// console.log(`cardArray length is ${cardArray.length}`)

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
let dealerCardThree = document.getElementById('dealerThree');
let dealerCardFour = document.getElementById('dealerFour');
let dealerCardFive = document.getElementById('dealerFive');
let dealerCardSix = document.getElementById('dealerSix');

//Player and Dealer Cards
let cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight, cardNine, cardTen, cardEleven, cardTwelve,cardThirteen, cardFourTeen;

//Wager, Balance and Current Hand
let dealerHand = document.getElementById('dealerHand');
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

//Booleans
let playerTurn = true;
let playerWin = false;
let dealerWin = false;
let blackJack = false;

let count = 0;


const changeWager = () => {
    let wagerPrompt = prompt('How much would you like to wager per hand?')
    while (wagerPrompt > balance) {
        wagerPrompt = prompt('Not enough money. Please enter a valid wager')
    }
    wagerId.innerHTML = `Current Wager: $${wagerPrompt}`
    wager = Number(wagerPrompt);
}

const shuffleCards = (cardArr) => {
    let cardDeck = [];
    let randomNumber, card;
    for (let i = 0; i < 24; i++) {
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

const reset = () => {
    cardArray = [aceOfSpades, aceOfHearts, aceOfClubs, aceOfDiamonds, kingOfSpades, nineOfSpades, fiveOfSpades, fourOfSpades, threeOfSpades, queenOfHearts, tenOfHearts, sixOfHearts, threeOfHearts, twoOfHearts, jackOfClubs, sevenOfClubs, fourOfClubs, threeOfClubs, twoOfClubs, eightOfDiamonds, fiveOfDiamonds, fourOfDiamonds, threeOfDiamonds, twoOfDiamonds];

    playerCardOne.style.display = 'none';
    playerCardTwo.style.display = 'none';
    playerCardThree.style.display = 'none';
    playerCardFour.style.display = 'none';
    playerCardFive.style.display = 'none';
    playerCardSix.style.display = 'none';
    playerCardSeven.style.display = 'none';
    dealerCardOne.style.display = 'none';
    dealerCardTwo.style.display = 'none';
    dealerCardThree.style.display = 'none';
    dealerCardFour.style.display = 'none';
    dealerCardFive.style.display = 'none';
    dealerCardSix.style.display = 'none';

    dealerHand.innerHTML = `Dealer Hand:`

    playerTurn = true;
    dealerTurn = false;
    playerWin = false;
    blackJack = false;
}

const deal = (cardArr) => {
    //Subtract from Balance
    reset();
    balance -= wager
    balanceId.innerHTML = `Your Balance: $${balance}`;

    //Shuffle Deck and get first 4 cards
    let shuffleDeck = shuffleCards(cardArray);
    cardOne = shuffleDeck.shift(); //player card
    cardTwo = shuffleDeck.shift(); //dealer card
    cardThree = shuffleDeck.shift(); //player card
    cardFour = shuffleDeck.shift(); //dealer card
    cardFive = shuffleDeck.shift(); //player card
    cardSix = shuffleDeck.shift(); //player card
    cardSeven = shuffleDeck.shift(); //player card
    cardEight = shuffleDeck.shift(); //player card
    cardNine = shuffleDeck.shift(); //player card
    cardTen = shuffleDeck.shift(); //dealer card
    cardEleven = shuffleDeck.shift(); //dealer card
    cardTwelve = shuffleDeck.shift(); //dealer card
    cardThirteen = shuffleDeck.shift(); //dealer card
    cardFourTeen = shuffleDeck.shift(); //dealer card

    //Deal Cards
    playerCardOne.src = cardOne.imgUp;
    playerCardOne.style.display = 'block';

    setTimeout(function () {
        dealerCardOne.src = cardTwo.imgDown;
        console.log(`Card down is: ${cardTwo.name}`)
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

    setTimeout(blackjack, 2001);

    //Handle the Hit button    
    count = 0;
    hitButton.addEventListener('click', hitCards)

    //Handle the Stand Button
    standButton.addEventListener('click', dealerCards);

}

const hitOrStandDisplay = () => {
    standButton.style.display = 'block';
    hitButton.style.display = 'block';
    dealButton.style.display = 'none'
    wagerButton.style.display = 'none'
    newGameButton.style.display = 'none'
}


const hitCards = () => {        
    count += 1;
    if (count === 1) {
        playerCardThree.src = cardFive.imgUp;
        playerCardThree.style.display = 'block'
        playerScore += cardFive.value;
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        console.log(count)
        checkForBust();
    } else if (count === 2) {
        playerCardFour.src = cardSix.imgUp;
        playerCardFour.style.display = 'block'
        playerScore += cardSix.value;
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        console.log(count)
        checkForBust();
    } else if (count === 3) {
        playerCardFive.src = cardSeven.imgUp;
        playerCardFive.style.display = 'block'
        playerScore += cardSeven.value;
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        console.log(count)
        checkForBust();
    } else if (count === 4) {
        playerCardSix.src = cardEight.imgUp;
        playerCardSix.style.display = 'block';
        playerScore += cardEight.value;
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        console.log(count)
        checkForBust();
    } else if (count === 5) {
        playerCardSeven.src = cardNine.imgUp;
        playerCardSeven.style.display = 'block';
        playerScore += cardNine.value;
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        console.log(count)
        checkForBust();   
    }
}

const dealerCards = () => {
    standButton.style.display = 'none';
    hitButton.style.display = 'none';
    dealerTurn = true;
    playerTurn = false;

    //Deal Dealer Cards
    if (!playerTurn) {
        dealerCardOne.src = cardTwo.imgUp;
        dealerHand.innerHTML = `Dealer Hand: ${dealerScore}`;
        checkForBust();
        determineWinner();
        if (dealerScore <= 16) {
            setTimeout(() => {
                dealerCardThree.src = cardTen.imgUp;
                dealerCardThree.style.display = 'block';
                dealerHand.innerHTML = `Dealer Hand: ${dealerScore}`;
            }, 500);
            dealerScore += cardTen.value;
            checkForBust();
            determineWinner();
        }
            if (dealerScore <= 16) {
                setTimeout(() => {
                    dealerCardFour.src = cardEleven.imgUp;
                    dealerCardFour.style.display = 'block';
                    dealerHand.innerHTML = `Dealer Hand: ${dealerScore}`;
                }, 1000);
                dealerScore += cardEleven.value;
                checkForBust();
                determineWinner();
            }
                if (dealerScore <= 16) {
                    setTimeout(() => {
                        dealerCardFive.src = cardTwelve.imgUp;
                        dealerCardFive.style.display = 'block';
                        dealerHand.innerHTML = `Dealer Hand: ${dealerScore}`;
                    }, 2000);
                    dealerScore += cardTwelve.value;
                    checkForBust();
                    determineWinner();
                }
                if (dealerScore <= 16) {
                    setTimeout(() => {
                        dealerCardSix.src = cardThirteen.imgUp;
                        dealerCardSix.style.display = 'block';
                        dealerHand.innerHTML = `Dealer Hand: ${dealerScore}`;
                    }, 3000);
                    dealerScore += cardThirteen.value;
                    checkForBust();
                    determineWinner();
                }
        
    }
}

const winner = () => {
    if (blackJack){
        console.log('blackjack pays')
        balance += wager + (wager * (3/2));
        balanceId.innerHTML = `Your Balance: $${balance}`;

    } else if (playerWin) {
        console.log('regular winner')
        balance += wager + wager;
        balanceId.innerHTML = `Your Balance: $${balance}`;
        
    } else if (!playerTurn && !dealerTurn && playerScore === dealerScore) {
        console.log('push man')
        balance += wager;
        balanceId.innerHTML = `Your Balance: $${balance}`;
    }
}

/*
ToDo:
handling an Ace as 11 or 1
dislpaying the player score when there is an Ace
*/

const blackjack = () => {
    if (cardOne.value + cardThree.value === 21 && cardTwo.value + cardFour.value !== 21) {
        //player wins
        console.log('player bj')
        playerTurn = false;
        dealerTurn = false;
        blackJack = true;
        determineWinner();
        gameOver()
    } else if (cardOne.value + cardThree.value !== 21 && cardTwo.value + cardFour.value === 21) {
        //dealer wins
        playerTurn = false;
        dealerTurn = false;
        gameOver()
        dealerCardOne.src = cardTwo.imgUp;
    } else if (cardOne.value + cardThree.value === 21 && cardTwo.value + cardFour.value === 21) {
        //push
        playerTurn = false;
        dealerTurn = false;
        determineWinner();
    }
}

const checkForBust = () => {
    if (playerScore > 21) {
        gameOver()
        dealerWin = true;
        dealerTurn = false;
        playerTurn = false;
        console.log('player bust hit')
    } else if (!playerTurn && dealerScore > 21) {
        gameOver();
        playerWin = true;
        dealerTurn = false;
        playerTurn = false;
        console.log('dealer bust hit')
    } else if (dealerScore <= 21 && dealerScore >= 17 && !playerTurn) {
        gameOver();
        dealerCardOne.src = cardTwo.imgUp;
        dealerTurn = false;
        console.log('no bust hit')
    }
}

const determineWinner = () => {
    if (!playerTurn && !dealerTurn){
        if (playerScore > dealerScore || dealerScore > 21){
            playerWin = true;
            winner();
            gameOver();
        } else if(playerScore === dealerScore){
            winner();
            gameOver();
        } else {
            gameOver();
        }
    }
}

const gameOver = () => {
    standButton.style.display = 'none';
    hitButton.style.display = 'none';
    dealButton.style.display = 'block';
    wagerButton.style.display = 'block';
    newGameButton.style.display = 'block';
}
