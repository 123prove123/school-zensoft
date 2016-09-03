const Person = require('./commons/person.js');
const Parent = require('./parent.js');
const StudentGroup = require('./student-group.js');

class Student extends Person{
  constructor(name, contact, isActive, dateOfBirth,
    studentGroup,parents = []) {
    super(name,contact,isActive,dateOfBirth)
    this.setStudentGroup(studentGroup);
    this.setParents(parents);
  }
  setStudentGroup(studentGroup) {
    this.studentGroup = studentGroup;
    return this;
  }
  setParents(parents) {
    this.parents = parents;
  }
  getStudentGroup() {
    return this.studentGroup;
  }
  getParents() {
    return this.parents;
  }
}

module.exports = Student;
