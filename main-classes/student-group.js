const TeacherRole = require('./teacher-role.js');

class StudentGroup {
  constructor(level,groupNumber, teacherRole, students = [] ) {
    this.setLevel(level);
    this.setGroupNumber(groupNumber);
    this.setTeacherRole(teacherRole);
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
  setStudents(studets) {
    this.studets = studets;
    return this;
  }
  setTeacherRole(teacherRole) {
    this.teacherRole = new TeacherRole(teacherRole);
    return this;
  }
}

module.exports = StudentGroup;
