const Store = require('./store.js');
const StoreTeacher = new Store();
const TeacherRoleService = require('./teacher-role-service.js');

class TeacherService {
  static create(model) {
    return new Teacher(model);
  }
  static add(model) {
    StoreTeacher.add(model);
    return this;
  }
  static getStore() {
    return StoreTeacher;
  }
  static salaryTeacherById(id) {
    return TeacherRoleService.salaryTeacherFindById(id);
  }
  static salaryTeacherBy(field, value) {
    return TeacherRoleService.salaryTeacherFindBy(field,value);
  }
  static findById(id) {
    return StoreTeacher.findById(id);
  }
}


module.exports = TeacherService;


const Teacher = require('../models/teacher.js');
