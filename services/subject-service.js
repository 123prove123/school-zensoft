const Store = require('./store.js');
const SubjectStore = new Store();

class SubjectService extends Store{
  static create(model) {
    return new Subject(model);
  }
  static add(model) {
    SubjectStore.add(model);
  }
  static getStore() {
    return SubjectStore;
  }
}

module.exports = SubjectService;

const Subject = require('../models/subject.js');
