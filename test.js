 const expect = chai.expect;

describe('Deck', function() {
    it('should contain 52 cards', function() {
        const deck = new Deck();
		deck.buildDeck();
		expect(deck.cards).to.have.lengthOf(52)	
    })
})
