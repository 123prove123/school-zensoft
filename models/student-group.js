const TeacherRole = require('./teacher-role.js');

class StudentGroup {
  constructor(level, groupNumber, teacherRoles = [], students = [] ) {
    this.setLevel(level);
    this.setGroupNumber(groupNumber);
    this.setTeacherRoles(teacherRoles);
    this.setStudents(students);
  }
  setLevel(level) {
    this.level = level;
    return this;
  }
  setGroupNumber(groupNumber) {
    this.groupNumber = groupNumber;
    return this;
  }
  setStudents(students) {
    this.students = students;
    return this;
  }
  setTeacherRoles(teacherRoles) {
    this.teacherRoles = teacherRoles;
    return this;
  }
  getLevel() {
    return this.level;
  }
  getGroupNumber() {
    return this.groupNumber;
  }
  getStudents() {
    return this.students;
  }
  getTeacherRoles() {
    return this.teacherRoles;
  }
}

module.exports = StudentGroup;
