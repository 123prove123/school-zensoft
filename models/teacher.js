const Person = require('./commons/person.js');
const TeacherService = require('../services/teacher-service.js');

class Teacher extends Person {
  constructor(user, subjects = [], studentGroups = [],  position) {
    super(user)
    this.setSubjects(subjects);
    this.setStudentGroups(studentGroups);
    this.setPosition(position)
  }
  save() {
    TeacherService.add(this);
    return this;
  }
  setPosition(position){
    this.position = position;
    return this;
  }
  getPosition() {
    return this.position;
  }
  setStudentGroups(studentGroups) {
    this.studentGroups = studentGroups;
    return this;
  }
  getStudentGroups() {
    return this.studentGroups;
  }
  addStudentGroup(studentGroup) {
    this.studentGroups.push(studentGroup);
    return this;
  }
  setSubjects(subjects) {
    this.subjects = subjects;
    return this;
  }
  getSubjects() {
    return this.subjects;
  }
  addSubject(subject){
    this.subjects.push(subject);
    return this;
  }
}

module.exports = Teacher;
