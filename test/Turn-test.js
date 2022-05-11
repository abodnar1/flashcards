const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let currentCard;
  let turn;

  beforeEach(() => {
    currentCard = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', currentCard);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should take in a player\'s guess', () => {
    expect(turn.guess).to.equal('object');
  });

  it('should take in the current card', () => {
    expect(turn.card).to.equal(currentCard);
  });

  it('should return a player\'s guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(currentCard);
  });

  it('should return true when the player\'s guess is correct', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback on whether the player\'s guess is correct or not', () => {
    expect(turn.giveFeedback()).to.equal("correct!");
  });
});
