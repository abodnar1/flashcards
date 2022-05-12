const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should set current round to null by default', () => {
    expect(game.currentRound).to.equal(null);
  });

  it('should keep track of the current round', () => {
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
});
