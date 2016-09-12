const Person = require('./commons/person.js');

class Student extends Person{
  constructor(user, studentGroup, parents) {
    super(user);
    this.setStudentGroup(studentGroup);
    this.setParents(parents);
  }
  setStudentGroup(studentGroup) {
    this.studentGroup = studentGroup;
    return this;
  }
  getStudentGroup() {
    return this.studentGroup;
  }
  setParents(parents) {
    this.parents = parents;
  }
  getParents() {
    return this.parents;
  }
  addParent(parent) {
    this.parents.push(parent);
    return this;
  }
}

module.exports = Student;
