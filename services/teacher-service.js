const Store = require('./store.js');
const StoreTeacher = new Store();

class TeacherService {
  static create(model) {
    return new Teacher(model);
  }
  static add(model) {
    StoreTeacher.add(model);
  }
  static getStore() {
    return StoreTeacher;
  }
}


module.exports = TeacherService;


const Teacher = require('../models/teacher.js');
