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
  static getStudentsByGroupId(id) {
    return StudentGroupStore.findById(id).students;
  }
  static getStudentsBy(field, value) {
    return StudentGroupStore.findBy(field,value).students;
  }
  static getTeachersByGroupId(id) {
    const teachers = [];
    StudentGroupStore.findById(id)
      .teacherRoles.forEach(function(el2){
        teachers.push(el2.teacher);
      });
    return teachers;
  }
}

module.exports = StudentGroupService;

const StudentGroup = require('../models/student-group.js');
