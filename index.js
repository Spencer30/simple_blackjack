/**
 * Simple Blackjack allows a user to play against a dealer with only hit or stand options. No double or split as of yet. Player goes first and will have the option to hit or stand. If hit, their hand score increases and another card is shown. User can choose to stand at anytime. When they do, it triggers a function to deal the dealer cards. Depending on what the dealer does, functions are called to determine the winner then pay (update balance) the user if they win. 
 * 
 * Note** - Ace needs to be treated as a 11 or 1. Currently it's value is 11
 */


class Card {
    constructor(name, value, imgUp, imgDown) {
        this.name = name,
        this.value = value,
        this.imgUp = imgUp,
        this.imgDown = imgDown
    }
}

class Ace extends Card {
    constructor (name, value, imgUp, imgDown, altValue) {
        super(name, value, imgUp, imgDown, altValue);
        this.altValue = altValue        
    }
}


//Hearts
let aceOfHearts = new Ace('Ace of Hearts', 11,"images/AH.png", "images/red_back.png", 1);
let kingOfHearts = new Card('King of Hearts', 10, "images/KH.png", "images/red_back.png")
let queenOfHearts = new Card('Queen of Hearts', 10, "images/QH.png", "images/red_back.png");
let jackOfHearts = new Card('Jack of Hearts', 10, "images/JH.png", "images/red_back.png");
let tenOfHearts = new Card('Ten of Hearts', 10, "images/10H.png", "images/red_back.png");
let nineOfHearts = new Card('Nine Of Hearts', 9, "images/9H.png", "images/red_back.png");
let eightOfHearts = new Card('Eight Of Hearts', 8, "images/8H.png", "images/red_back.png");
let sevenOfHearts = new Card('Seven Of Hearts', 7, "images/7H.png", "images/red_back.png");
let sixOfHearts = new Card('Six Of Hearts', 6, "images/6H.png", "images/red_back.png");
let fiveOfHearts = new Card('Five Of Hearts', 5, "images/5H.png", "images/red_back.png");
let fourOfHearts = new Card('Four Of Hearts', 4, "images/4H.png", "images/red_back.png");
let threeOfHearts = new Card('Three Of Hearts', 3, "images/3H.png", "images/red_back.png");
let twoOfHearts = new Card('Two Of Hearts', 2, "images/2H.png", "images/red_back.png");

//Spades
let aceOfSpades = new Ace('Ace of Spades', 11, "images/AS.png", "images/red_back.png", 1);
let kingOfSpades = new Card('King of Spades', 10, "images/KS.png", "images/red_back.png");
let queenOfSpades = new Card('Queen of Spades', 10, "images/QS.png", "images/red_back.png");
let jackOfSpades = new Card('Jack of Spades', 10, "images/JS.png", "images/red_back.png");
let tenOfSpades = new Card('Queen of Spades', 10, "images/10S.png", "images/red_back.png");
let nineOfSpades = new Card('Nine of Spades', 9, "images/9S.png", "images/red_back.png");
let eightOfSpades = new Card('Eight of Spades', 8, "images/8S.png", "images/red_back.png");
let sevenOfSpades = new Card('Seven of Spades', 7, "images/7S.png", "images/red_back.png");
let sixOfSpades = new Card('Six of Spades', 6, "images/6S.png", "images/red_back.png");
let fiveOfSpades = new Card('Five of Spades', 5, "images/5S.png", "images/red_back.png");
let fourOfSpades = new Card('Four of Spades', 4, "images/4S.png", "images/red_back.png")
let threeOfSpades = new Card('Three of Spades', 3, "images/3S.png", "images/red_back.png");
let twoOfSpades = new Card('Two of Spades', 2, "images/2S.png", "images/red_back.png");

//Clubs
let aceOfClubs = new Ace('Ace of Clubs', 11,"images/AC.png", "images/red_back.png", 1);
let kingOfClubs = new Card('King of Clubs', 10, "images/KC.png", "images/red_back.png");
let queenOfClubs = new Card('Queen of Clubs', 10, "images/QC.png", "images/red_back.png");
let jackOfClubs = new Card('Jack of Clubs', 10, "images/JC.png", "images/red_back.png");
let tenOfClubs = new Card('Ten of Clubs', 10, "images/10C.png", "images/red_back.png");
let nineOfClubs = new Card('Nine of Clubs', 9, "images/9C.png", "images/red_back.png");
let eightOfClubs = new Card('Eight of Clubs', 8, "images/8C.png", "images/red_back.png");
let sevenOfClubs = new Card('Seven of Clubs', 7, "images/7C.png", "images/red_back.png");
let sixOfClubs = new Card('Six of Clubs', 6, "images/6C.png", "images/red_back.png");
let fiveOfClubs = new Card('Five of Clubs', 5, "images/5C.png", "images/red_back.png");
let fourOfClubs = new Card('Four of Clubs', 4, "images/4C.png", "images/red_back.png");
let threeOfClubs = new Card('Three of Clubs', 3, "images/3C.png", "images/red_back.png");
let twoOfClubs = new Card('Two of Clubs', 2, "images/2C.png", "images/red_back.png");

//Diamonds
let aceOfDiamonds = new Ace('Ace of Diamonds', 11,"images/AD.png", "images/red_back.png", 1);
let kingOfDiamonds = new Card('King of Diamonds', 10, "images/KD.png", "images/red_back.png");
let queenOfDiamonds = new Card('Queen of Diamonds', 10, "images/QD.png", "images/red_back.png");
let jackOfDiamonds = new Card('Jack of Diamonds', 10, "images/JD.png", "images/red_back.png");
let tenOfDiamonds = new Card('Ten of Diamonds', 10, "images/10D.png", "images/red_back.png");
let nineOfDiamonds = new Card('Nine of Diamonds', 9, "images/9D.png", "images/red_back.png");
let eightOfDiamonds = new Card('Eight of Diamonds', 8, "images/8D.png", "images/red_back.png");
let sevenOfDiamonds = new Card('Seven of Diamonds', 7, "images/7D.png", "images/red_back.png");
let sixOfDiamonds = new Card('Six of Diamonds', 6, "images/6D.png", "images/red_back.png");
let fiveOfDiamonds = new Card('Five of Diamonds', 5, "images/5D.png", "images/red_back.png");
let fourOfDiamonds = new Card('Four of Diamonds', 4, "images/4D.png", "images/red_back.png");
let threeOfDiamonds = new Card('Three of Diamonds', 3, "images/3D.png", "images/red_back.png");
let twoOfDiamonds = new Card('Two of Diamonds', 2, "images/2D.png", "images/red_back.png");

//Hold all the Cards with an Array
let cardArray = [twoOfClubs, threeOfClubs, fourOfClubs, fiveOfClubs, sixOfClubs, sevenOfClubs, eightOfClubs, nineOfClubs, tenOfClubs, jackOfClubs, queenOfClubs, kingOfClubs, aceOfClubs, twoOfDiamonds, threeOfDiamonds, fourOfDiamonds, fiveOfDiamonds, sixOfDiamonds, sevenOfDiamonds, eightOfDiamonds, nineOfDiamonds, tenOfDiamonds, jackOfDiamonds, queenOfDiamonds, kingOfDiamonds, aceOfDiamonds, twoOfSpades, threeOfSpades, fourOfSpades, fiveOfSpades, sixOfSpades, sevenOfSpades, eightOfSpades, nineOfSpades, tenOfSpades, jackOfSpades, queenOfSpades, kingOfSpades, aceOfSpades, twoOfHearts, threeOfHearts, fourOfHearts, fiveOfHearts, sixOfHearts, sevenOfHearts, eightOfHearts, nineOfHearts, tenOfHearts, jackOfHearts, queenOfHearts, kingOfHearts, aceOfHearts];

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
let cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight, cardNine, cardTen, cardEleven, cardTwelve, cardThirteen, cardFourTeen;

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
let playerScore, dealerScore, playerAltScore, dealerAltScore;
let balance = 500;
let wager = 25;

//Booleans
let playerTurn = true;
let playerWin = false;
let dealerWin = false;
let blackJack = false;
let cardOneAceAltOn = false;
let cardThreeAceAltOn = false;

let count = 0;

const newGame = () => {
    balance = 500;
    wager = 25;
    balanceId.innerHTML = `Your Balance: $${balance}`;
    wagerId.innerHTML = `Current Wager: $25`;
    handScore.innerHTML = 'Your Hand: ';
    reset();
    playerScore = 0;
    dealerScore = 0;
}


const changeWager = () => {
    let wagerPrompt = prompt('How much would you like to wager per hand?')
    if (!wagerPrompt) {
        wagerPrompt = wager;
    }
    while (wagerPrompt > balance) {
        wagerPrompt = prompt('Not enough money. Please enter a valid wager')
        if (!wagerPrompt) {
            wagerPrompt = wager;
        }
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
    cardArray = [twoOfClubs, threeOfClubs, fourOfClubs, fiveOfClubs, sixOfClubs, sevenOfClubs, eightOfClubs, nineOfClubs, tenOfClubs, jackOfClubs, queenOfClubs, kingOfClubs, aceOfClubs, twoOfDiamonds, threeOfDiamonds, fourOfDiamonds, fiveOfDiamonds, sixOfDiamonds, sevenOfDiamonds, eightOfDiamonds, nineOfDiamonds, tenOfDiamonds, jackOfDiamonds, queenOfDiamonds, kingOfDiamonds, aceOfDiamonds, twoOfSpades, threeOfSpades, fourOfSpades, fiveOfSpades, sixOfSpades, sevenOfSpades, eightOfSpades, nineOfSpades, tenOfSpades, jackOfSpades, queenOfSpades, kingOfSpades, aceOfSpades, twoOfHearts, threeOfHearts, fourOfHearts, fiveOfHearts, sixOfHearts, sevenOfHearts, eightOfHearts, nineOfHearts, tenOfHearts, jackOfHearts, queenOfHearts, kingOfHearts, aceOfHearts];

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
    cardOneAceAltOn = false;
    cardThreeAceAltOn = false;
}

const deal = (cardArr) => {
    if (wager > balance) {
        return alert(`Insufficient Funds. You can't wager more than in your balance`);
    }

    if (wager === 0) {
        return alert('Your wager cannot be zero.')
    }
    //Subtract from Balance
    reset();
    balance -= wager
    balanceId.innerHTML = `Your Balance: $${balance}`;

    //Shuffle Deck and get first 4 cards
    let shuffleDeck = shuffleCards(cardArray);
    cardOne = shuffleDeck.shift(); //player card
    cardTwo = shuffleDeck.shift();//dealer card
    cardThree = shuffleDeck.shift();//player card
    cardFour = shuffleDeck.shift(); //dealer card
    cardFive = shuffleDeck.shift(); //player card
    cardSix = shuffleDeck.shift(); //player card
    cardSeven = shuffleDeck.shift(); //player card
    cardEight = shuffleDeck.shift(); //player card
    cardNine = shuffleDeck.shift(); //player card
    cardTen = shuffleDeck.shift();//dealer card
    cardEleven = shuffleDeck.shift(); //dealer card
    cardTwelve = shuffleDeck.shift(); //dealer card
    cardThirteen = shuffleDeck.shift(); //dealer card
    cardFourTeen = shuffleDeck.shift(); //dealer card

    //Deal Cards
    playerCardOne.src = cardOne.imgUp;
    playerCardOne.style.display = 'block';

    setTimeout(function () {
        dealerCardOne.src = cardTwo.imgDown;
        // console.log(`Card down is: ${cardTwo.name}`)
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
    ifAce();
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

const ifAce = () => {
    if (playerScore > 21) {
        if (cardOne.altValue) {
            playerScore = cardOne.altValue + cardThree.value;
            cardOneAceAltOn = true;
        } else {
            playerScore = cardOne.value + cardThree.altValue;
        }
    } else if (dealerScore > 21) {
        if (cardTwo.altValue) {
            dealerScore = cardTwo.altValue + cardFour.value;
        } else {
            dealerScore = cardTwo.value + cardFour.altValue;
        }
    } else if (dealerScore === 17){
        if (cardTwo.altValue) {
            dealerScore = cardTwo.altValue + cardFour.value;
            console.log(dealerScore)
            console.log('this hit')
        } else if (cardFour.altValue){
            dealerScore = cardTwo.value + cardFour.altValue;
        }
    }

}

/*
else if (cardOne.altValue && !cardThree.altValue) {
    playerScore -= cardOne.value
    playerScore += cardOne.altValue + cardSix.value
} else if (!cardOne.altValue && cardThree.altValue) {
    playerScore -= cardThree.value
    playerScore += cardThree.altValue + cardSix.value
}
*/

const hitCards = () => {
    count += 1;
    if (count === 1) {
        playerCardThree.src = cardFive.imgUp;
        playerCardThree.style.display = 'block'
        playerScore += cardFive.value;
        if (playerScore > 21) {
            if (cardFive.altValue) {
                playerScore -= cardFive.value;
                playerScore += cardFive.altValue;
            } else if (cardOne.altValue && !cardOneAceAltOn) {
                playerScore -= cardOne.value
                playerScore += cardOne.altValue;
                cardOneAceAltOn = true;
            } else if (cardThree.altValue && !cardThreeAceAltOn) {
                playerScore -= cardThree.value;
                playerScore += cardThree.altValue;
                cardThreeAceAltOn = true;
            }
        }
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        // console.log(count)
        checkForBust();
    } else if (count === 2) {
        playerCardFour.src = cardSix.imgUp;
        playerCardFour.style.display = 'block'
        playerScore += cardSix.value;
        if (playerScore > 21) {
            if (cardSix.altValue) {
                playerScore -= cardSix.value;
                playerScore += cardSix.altValue;
            } else if (cardOne.altValue && !cardOneAceAltOn) {
                playerScore -= cardOne.value
                playerScore += cardOne.altValue;
                cardOneAceAltOn = true;
            } else if (cardThree.altValue && !cardThreeAceAltOn) {
                playerScore -= cardThree.value;
                playerScore += cardThree.altValue;
                cardThreeAceAltOn = true;
            }
        }
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        // console.log(count)
        checkForBust();
    } else if (count === 3) {
        playerCardFive.src = cardSeven.imgUp;
        playerCardFive.style.display = 'block'
        playerScore += cardSeven.value;
        if (playerScore > 21) {
            if (cardSeven.altValue) {
                playerScore -= cardSeven.value;
                playerScore += cardSeven.altValue;
            } else if (cardOne.altValue && !cardOneAceAltOn) {
                playerScore -= cardOne.value
                playerScore += cardOne.altValue;
                cardOneAceAltOn = true;
            } else if (cardThree.altValue && !cardThreeAceAltOn) {
                playerScore -= cardThree.value;
                playerScore += cardThree.altValue;
                cardThreeAceAltOn = true;
            }
        }
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        // console.log(count)
        checkForBust();
    } else if (count === 4) {
        playerCardSix.src = cardEight.imgUp;
        playerCardSix.style.display = 'block';
        playerScore += cardEight.value;
        if (playerScore > 21) {
            if (cardEight.altValue) {
                playerScore -= cardEight.value;
                playerScore += cardEight.altValue;
            }else if (cardOne.altValue && !cardOneAceAltOn) {
                playerScore -= cardOne.value
                playerScore += cardOne.altValue;
                cardOneAceAltOn = true;
            } else if (cardThree.altValue && !cardThreeAceAltOn) {
                playerScore -= cardThree.value;
                playerScore += cardThree.altValue;
                cardThreeAceAltOn = true;
            }
        }
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        // console.log(count)
        checkForBust();
    } else if (count === 5) {
        playerCardSeven.src = cardNine.imgUp;
        playerCardSeven.style.display = 'block';
        playerScore += cardNine.value;
        if (playerScore > 21) {
            if (cardNine.altValue) {
                playerScore -= cardNine.value;
                playerScore += cardNine.altValue;
            } else if (cardOne.altValue && !cardOneAceAltOn) {
                playerScore -= cardOne.value
                playerScore += cardOne.altValue;
                cardOneAceAltOn = true;
            } else if (cardThree.altValue && !cardThreeAceAltOn) {
                playerScore -= cardThree.value;
                playerScore += cardThree.altValue;
                cardThreeAceAltOn = true;
            }
        }
        handScore.innerHTML = `Your Hand: ${playerScore}`;
        // console.log(count)
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
    if (blackJack) {
        // console.log('blackjack pays')
        balance += wager + (wager * (3 / 2));
        balanceId.innerHTML = `Your Balance: $${balance}`;

    } else if (playerWin) {
        // console.log('regular winner')
        balance += wager + wager;
        balanceId.innerHTML = `Your Balance: $${balance}`;

    } else if (!playerTurn && !dealerTurn && playerScore === dealerScore) {
        // console.log('push man')
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
        // console.log('player bj')
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
        // console.log('player bust hit')
    } else if (!playerTurn && dealerScore > 21) {
        gameOver();
        playerWin = true;
        dealerTurn = false;
        playerTurn = false;
        // console.log('dealer bust hit')
    } else if (dealerScore <= 21 && dealerScore >= 17 && !playerTurn) {
        gameOver();
        dealerCardOne.src = cardTwo.imgUp;
        dealerTurn = false;
        // console.log('no bust hit')
    }
}

const determineWinner = () => {
    if (!playerTurn && !dealerTurn) {
        if (playerScore > dealerScore || dealerScore > 21) {
            playerWin = true;
            winner();
            gameOver();
        } else if (playerScore === dealerScore) {
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


