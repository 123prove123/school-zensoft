const Store = require('./store.js');
const StudentGroupStore = new Store();

class StudentGroupService{
  static create(model) {
    return new StudentGroup(model);
  }
  static add(model) {
    StudentGroupStore.add(model);
  }
  static getStore() {
    return StudentGroupStore;
  }
}

module.exports = StudentGroupService;

const StudentGroup = require('../models/student-group.js');
