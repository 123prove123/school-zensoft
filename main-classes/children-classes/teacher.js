const Person = require('../person.js');
const Subject = require('../subject.js');
const StudentGroup = require('../student-group.js');
const Position = require('../position.js');

class Teacher extends Person {
  constructor(subjects = [], studentGroup = [], salaryes, position) {
    super(name,contacts, isActive,dateOfBirth)
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
    this.position = new Position(position);
    return this;
  }
  addSubject(subject) {
    this.subjects.push(new Subject(subject));
    return this;
  }
  addStudentGroup(studentGroup) {
    this.studentGroup.push(new StudentGroup(studentGroup));
    return this;
  }
}

module.exports = Teacher;
