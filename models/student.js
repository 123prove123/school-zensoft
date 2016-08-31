const Person = require('./commons/person.js');
const Parent = require('./parent.js');
const StudentGroup = require('./student-group.js');

class Student extends Person{
  constructor(name, contact, isActive, dateOfBirth,
    studentGroup,parents = []) {
    super(name,contact,isActive,dateOfBirth)
    this.setStudentGroup(studentGroup);
    this.parents = parents;
  }
  setStudentGroup(studentGroup) {
    this.studentGroup = studentGroup;
    return this;
  }
  addParent(parent){
    this.parents.push(parent);
    return this;
  }
}

module.exports = Student;
