const chai = require ('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let turn;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    turn = new Turn('array', card1);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should take in a deck as an argument', () => {
    expect(round.deck).to.equal(deck);
  });

  it('should start at turn 0 by default', () => {
    expect(round.turns).to.equal(0);
  });

  it('should update turn count when a player makes a guess', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn('array');
    expect(round.turns).to.equal(1);

    round.takeTurn('mutator method');
    expect(round.turns).to.equal(2);
  });

  it('should return the current card being played', () => {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should store incorrect guesses to an array by default', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should store incorrect guesses by card id to an array', () => {
    round.takeTurn('array');
    expect(round.incorrectGuesses[0]).to.equal(card1.id);
  });

  it('should give feedback whether the guess is correct or incorrect', () => {
    round.takeTurn('array');
    expect(round.takeTurn()).to.equal('incorrect!');
  });

  it('should update the current card to the next card in the deck after a player takes a turn', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);

    round.takeTurn('array');
    round.takeTurn('mutator method');
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should be able to calculate the percent of correct guesses', () => {
    round.takeTurn('array');
    round.takeTurn('object');
    round.takeTurn('mutator method');
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should print a message to the console when the round is over', () => {
    round.takeTurn('array');
    round.takeTurn('object');
    round.takeTurn('mutator method');
    round.endRound();
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  });
});
