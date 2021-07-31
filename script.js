
class Player {
	constructor(name, hand){
		this.name = name;
		this.score = 0;
		this.hand = hand;
	}
}

class Card {
	constructor(cardName, suit, value){
		this.cardName = cardName;
		this.suit = suit;
		this.value = value;		
	}

	displayCard(){
		console.log(this.suit + '' + this.value)
	}
}

class Deck {
	constructor(){
		this.cards = [];
	}

	buildDeck(){ //this method is building an object that contains a deck of cards
		let cardName = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
		let suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
		for (let i = 0; i < cardName.length; i++){
			for (let j = 0; j < suit.length; j++){
				this.cards.push(new Card(cardName[i], suit[j], i));
			}
		}
	}

	shuffleDeck(){  //this method is taking the deck created from buildDeck and shuffling them into a random order
		for (let i = this.cards.length -1; i > 0; i--){
 			const shuffle = Math.floor(Math.random() * i);
    		const tempArr = this.cards[i];
    		this.cards[i] = this.cards[shuffle];
    		this.cards[shuffle] = tempArr;
		}
	}	
}

class WarGame {  //this method split the shuffled deck into two, then give a single card
	constructor() {
		this.players = [];
		
	}

	begin(player1, player2){
			this.players.push(new Player(player1, theDeck.cards.slice(0, 26)));
			this.players.push(new Player(player2, theDeck.cards.slice(26)));  
			 
		for (let i = 0; i < 26; i++){
			console.log('--------- Round # ' + (i + 1) + ' ----------');
			const player1Card = this.players[0].hand.pop();
			const player2Card = this.players[1].hand.pop();
			console.log(`${this.players[0].name}'s card: ${player1Card.cardName} of ${player1Card.suit}`)
			console.log(`${this.players[1].name}'s card: ${player2Card.cardName} of ${player2Card.suit}`)
			
			if (player1Card.value > player2Card.value){
				this.players[0].score++;
				console.log(`${this.players[0].name} scores 1 point`)
			}
			else if (player1Card.value < player2Card.value){
				this.players[1].score++;
				console.log(`${this.players[1].name} scores 1 point`)	
			}
			else if(player1Card.value === player2Card.value){
				console.log('This round is a tie')
			}
				console.log(`${this.players[0].name} - ${this.players[0].score}`)
				console.log(`${this.players[1].name} - ${this.players[1].score}`)
		}
		
			if (this.players[0].score > this.players[1].score){
				console.log(`${this.players[0].name} wins the game!`)
			}
			
			else if (this.players[0].score < this.players[1].score){
				console.log(`${this.players[1].name} wins the game`)
			}
			
			else {
				console.log('It\'s a tie')
			}
	}
}
let theDeck = new Deck();
theDeck.buildDeck();

theDeck.shuffleDeck();  
let warGame = new WarGame();
warGame.begin('Marc', 'Colleen');