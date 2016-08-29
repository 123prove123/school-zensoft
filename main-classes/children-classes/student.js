const Person = require('../person.js');
const Parent = require('./parent.js');
const StudentGroup = require('../student-group.js');

class Student extends Person{
  constructor(name, contacts, isActive, dateOfBirth,
    studentGroup,parents = []) {
    super(name,contacts,isActive,dateOfBirth)
    this.setStudentGroup(studentGroup);
    this.parents = parents;
  }
  setStudentGroup(studentGroup) {
    this.studentGroup = new StudentGroup(studentGroup);
    return this;
  }
  addParent(parent){
    this.parents.push(new Parent(parent));
    return this;
  }
}

module.exports = Student;
