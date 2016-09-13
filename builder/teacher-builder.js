const Teacher = require('../models/teacher.js');

const teachers = {
  johnSmith: {
    name: 'John Smith',
    contact: 0321,
    isActive: true,
    dateOfBirth: '1983.09.21'
  },
  pavelVolya: {
    name: 'Pavel Volya',
    contact: 0321,
    isActive: true,
    dateOfBirth: '1983.09.21'
  }
};


class TeacherBuilder {
  static create(name) {
    const options = teachers[name];
    const teacher = new Teacher({name : options.name, contact : options.contact, isActive: options.isActive, dateOfBirth: options.dateOfBirth});
    return teacher;
  }
}

module.exports = TeacherBuilder;
