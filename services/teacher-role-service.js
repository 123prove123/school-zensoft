const Store = require('./store.js');
const TeacherRoleStore = new Store();

class TeacherRoleService {
  static create(model) {
    return new TeacherRole(model);
  }
  static add(model) {
    TeacherRoleStore.add(model);
    return this;
  }
  static getStore() {
    return TeacherRoleStore;
  }
  static salaryTeacherFindById(id) {
    let sum;
    TeacherRoleStore.forEach(function (el) {
      if(el.teacher.id == id) {
        sum = el.subject.quote + el.teacher.position.quote;
      }
    });
    return sum;
  }
  static salaryTeacherFindBy(field, value) {
    let sum;
    TeacherRoleStore.forEach(function (el) {
      if(el.teacher.user[field] === value) {
        sum = el.subject.quote + el.teacher.position.quote;
      } else {
        if(el.teacher[field] === value) {
          sum = el.subject.quote + el.teacher.position.quote;
        }
      }
    });
    return sum;
  }
}

module.exports = TeacherRoleService;

const TeacherRole = require('../models/teacher-role.js');
