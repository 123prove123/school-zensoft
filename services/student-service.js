const Store = require('./store.js');
const StudentStore = new Store();



class StudentService {
  static create(model) {
    return new Student(model);
  }
  static add(model) {
    StudentStore.add(model);
  }
  static getStore() {
    return StudentStore;
  }
}


module.exports = StudentService;



const Student = require('../models/student.js');
