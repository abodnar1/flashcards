const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should take in a player\'s guess and the current card', function() {
    const currentCard = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard);
    expect(turn.guess).to.equal('object');
    expect(turn.card).to.equal(currentCard);
  });

  it('should return a player\'s guess', function() {
    const currentCard = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the current card', function() {
    const currentCard = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard);
    expect(turn.returnCard()).to.equal(currentCard);
  });

  it('should return true when the player\'s guess is correct', function() {
    const currentCard = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback on whether the player\'s guess is correct or not', function() {
    const currentCard = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard);
    expect(turn.giveFeedback()).to.equal("correct!");
  });
});
