const Person = require('./commons/person.js');

class Teacher extends Person {
  constructor(user, subjects = [], studentGroups = [],  position) {
    super(user)
    this.setSubjects(subjects);
    this.setStudentGroups(studentGroups);
    this.setPositions(position)
  }
  setPositions(position){
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
  addStudentGroups(studentGroup) {
    this.studentGroup.push(studentGroup);
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
