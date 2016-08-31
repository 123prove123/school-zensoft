const TeacherRole = require('./teacher-role.js');

class StudentGroup {
  constructor(level, groupNumber, teacherRole = [], students = [] ) {
    this.setLevel(level);
    this.setGroupNumber(groupNumber);
    this.setTeacherRoles(teacherRole);
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
  addStudent(student) {
    this.students.push(student);
    return this;
  }
  addTeacherRole(teacherRole) {
    this.teacherRoles.push(teacherRole);
  }
}

module.exports = StudentGroup;
