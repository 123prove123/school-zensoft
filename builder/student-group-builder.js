const StudentGroup = require('../models/student-group.js');

const studentGroups = {
  A1: {
    level: 1,
    groupNumber: 'A1'
  },
  A2: {
    level: 2,
    groupNumber: 'A2'
  }
};



class StudentGroupBuilder {
  static create(name) {
    const options = studentGroups[name];
    const studentGroup = new StudentGroup(options.level, options.groupNumber);
    return studentGroup;
  }
}

module.exports = StudentGroupBuilder;
