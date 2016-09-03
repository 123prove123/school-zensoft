const Person = require('./commons/person.js');

class Teacher extends Person {
  constructor(name, contact, isActive, dateOfBirth, subjects = [], studentGroups = [], salaryes, positions) {
    super(name,contact, isActive, dateOfBirth)
    this.setSubjects(subjects);
    this.setStudentGroups(studentGroups);
    this.setSalaryes(salaryes);
    this.setPositions(positions)
  }
  setSalaryes(salaryes){
    this.salaryes = salaryes
    return this;
  }
  setPositions(positions){
    this.positions = positions;
    return this;
  }
  setStudentGroups(studentGroups) {
    this.studentGroups = studentGroups;
    return this;
  }
  setSubjects(subjects) {
    this.subjects = subjects;
    return this;
  }
  getSubjects() {
    return this.subjects;
  }
  getStudentGroups() {
    return this.studentGroups;
  }
  getSalaryes() {
    return this.salaryes;
  }
  getPositions() {
    return this.positions;
  }
}

module.exports = Teacher;
