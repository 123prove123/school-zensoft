import Store from './store';
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

export default PositionService;

import Position from '../models/position';
