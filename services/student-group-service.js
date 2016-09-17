const Store = require('./store.js');
const StudentGroupStore = new Store();

class StudentGroupService {
  static create(model) {
    return new StudentGroup(model);
  }

  static add(model) {
    StudentGroupStore.add(model);
  }

  static getStore() {
    return StudentGroupStore;
  }

  static findById(id) {
    return StudentGroupStore.findById(id);
  }

  static getStudentsByGroupId(id) {
    return StudentGroupStore.findById(id).students;
  }

  static getStudentsByGroup(field, value) {
    return StudentGroupStore.findBy(field, value).students;
  }

  static getTeachersByGroupId(id) {
    const teachers = [];
    StudentGroupStore.findById(id)
      .teacherRoles.forEach(function (el2) {
        teachers.push(el2.teacher);
    });
    return teachers;
  }
  static addStudentToGroupById(student, id) {
    const SG = StudentGroupStore.findById(id);
    student.setStudentGroup(SG);
    SG.students.push(student);
    return StudentGroupStore.findById(id).students;
  }
  static addTeacherRoleToGroupById(teacherRole, id) {
    const SG = StudentGroupStore.findById(id);
    teacherRole.teacher.addStudentGroup(SG);
    SG.teacherRoles.push(teacherRole);
    return StudentGroupStore.findById(id).teacherRoles;
  }
}

module.exports = StudentGroupService;

const StudentGroup = require('../models/student-group.js');
