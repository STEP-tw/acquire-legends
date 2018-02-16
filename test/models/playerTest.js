const assert = require('chai').assert;
const Player = require('../../src/models/player.js');

describe('Player', () => {
  describe('addTile',()=>{
    it('should add given tile to player tiles',()=>{
      let player = new Player(0,'random');
      player.addTile('4A');
      assert.include(player.tiles,'4A');
    });
  });
  describe('addTiles',()=>{
    it('should add given tiles to player tiles',()=>{
      let player = new Player(0,'random');
      player.addTiles(['4A','4B']);
      assert.deepEqual(player.tiles,['4A','4B']);
    });
  });
  describe('getTiles',()=>{
    it('should return tiles of player',()=>{
      let player = new Player(0,'random');
      player.addTile('4A');
      player.addTile('4B');
      let tiles=player.getTiles();
      assert.deepEqual(tiles,['4A','4B']);
    });
  });
  describe('getAvailableCash',()=>{
    it('should return 0 when a player is created',()=>{
      let pragya=new Player(0,'pragya');
      let actual = pragya.getAvailableCash();
      assert.equal(actual,0);
    });
    it('should return currently available money in player\'s account',()=>{
      let pragya=new Player(0,'pragya');
      let actual = pragya.getAvailableCash();
      assert.equal(actual,0);
      pragya.addMoney(6000);
      actual = pragya.getAvailableCash();
      assert.equal(actual,6000);
    });
  });
  describe('getDetails',()=>{
    it('should return player detail by given id',()=>{
      let expected =['1A','2A','3A','4A','5A','6A'];
      let pragya=new Player(0,'pragya');
      pragya.addTiles(['1A','2A','3A','4A','5A','6A']);
      assert.deepEqual(expected,pragya.getDetails(0).tiles);
    });
  });
});
