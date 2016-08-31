const Person = require('./commons/person.js');
const Subject = require('./subject.js');
const StudentGroup = require('./student-group.js');
const Position = require('./position.js');

class Teacher extends Person {
  constructor(name, contact, isActive, dateOfBirth, subjects = [], studentGroup = [], salaryes, position) {
    super(name,contact, isActive, dateOfBirth)
    this.subjects = subjects;
    this.studentGroup = studentGroup;
    this.setSalaryes(salaryes);
    this.setPosition(position)
  }
  setSalaryes(salaryes){
    this.salaryes = salaryes
    return this;
  }
  setPosition(position){
    this.position = position;
    return this;
  }
}

module.exports = Teacher;
