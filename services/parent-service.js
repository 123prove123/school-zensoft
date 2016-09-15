const Store = require('./store.js');
const ParentStore = new Store();

class ParentService{
  static create(model) {
    return new Parent(model);
  }
  static add(model) {
    ParentStore.add(model);
  }
  static getStore() {
    return ParentStore;
  }
}

module.exports = ParentService;

const Parent = require('../models/student-group.js');
