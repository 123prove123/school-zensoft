const Subject = require('./subject.js');

class TeacherRole {
  constructor(subject, teacher) {
    this.setSubject(subject);
    this.setTeacher(teacher);
  }
  setSubject(subject) {
    this.subject = subject;
    return this;
  }
  setTeacher(teacher) {
    this.teacher = teacher;
    return this;
  }
}

module.exports = TeacherRole;
