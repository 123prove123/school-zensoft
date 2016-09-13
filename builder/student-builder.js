const Student = require('../models/student.js');

const students = {
  VasyaPupkin: {
    name: 'VasyaPupkin',
    contact: 123,
    isActive: true,
    dateOfBirth: '2005.11.21'
  },
  BobMarley: {
    name: 'BobMarley',
    contact: 123,
    isActive: true,
    dateOfBirth: '1997.11.21'
  },
};

class StudentBuilder {
  static create(name) {
    const options = students[name];
    const student = new Student({name : options.name, contact : options.contact, isActive: options.isActive, dateOfBirth: options.dateOfBirth});
    return student;
  }
}

module.exports = StudentBuilder;
