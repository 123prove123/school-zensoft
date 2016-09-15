const Store = require('./store.js');
const PositionStore = new Store();

class PositionService{
  static create(model) {
    return new Position(model);
  }
  static add(model) {
    PositionStore.add(model);
  }
  static getStore() {
    return PositionStore;
  }
}

module.exports = PositionService;

const Position = require('../models/position.js');
