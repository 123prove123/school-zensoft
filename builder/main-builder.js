const Student = require('../models/student.js');
const StudentGroup = require('../models/student-group.js');
const Teacher = require('../models/teacher.js');
const Book = require('../models/book.js')
const Position = require('../models/position.js');
const TeacherRole = require('../models/teacher-role.js');
const Subject = require('../models/subject.js');
const Parent = require('../models/parent.js');


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

const books = {
  AlgebraTwo: {
    subject: 'Algebra Two',
    name: 'Algebra Two'
  },
  BiologyTwo: {
    subject: 'Biology Two',
    name: 'Biology Two'
  }
}

const parents = {
  parentOne: {
    name: 'ParentOne',
    contact: 0321,
    isActive: true,
    dateOfBirth: '1983.09.21',
    whoWork: 'Businesman'
  },
  parentTwo: {
    name: 'ParentOne',
    contact: 0321,
    isActive: true,
    dateOfBirth: '1983.09.21',
    whoWork: 'Driver'
  }
}

const positions = {
  teacher: {
    quote: 5000,
    name: 'Teacher'
  },
  director: {
    quote: 10000,
    name: 'Director'
  }
}

const subjects = {
  AlgebraTwo: {
    name: 'Algebra Two',
    level: 2,
    hours: 10,
    quote: 3000
  },
  BiologyTwo: {
    name: 'Biology Two',
    level: 2,
    hours: 10,
    quote: 3000
  },
  ClassMaster: {
    name: 'Class master',
    level: 2,
    hours: 1,
    quote: 3000
  }
}

class SubjectBuilder {
  static create(name) {
    const options = subjects[name];
    const subject = new Subject(options.name, options.level, options.hours, options.quote);
    return subject;
  }
}

class PositionBuilder {
  static create(name) {
    const options = positions[name];
    const position = new Position(options.quote, options.name);
    return position;
  }
}

class ParentBuilder {
  static create(name) {
    const options = parents[name];
    const parent = new Parent({name : options.name, contact : options.contact, isActive: options.isActive, dateOfBirth: options.dateOfBirth}, options.whoWork);
    return parent;
  }
}

class TeacherBuilder {
  static create(name) {
    const options = teachers[name];
    const teacher = new Teacher({name : options.name, contact : options.contact, isActive: options.isActive, dateOfBirth: options.dateOfBirth});
    return teacher;
  }
}

class StudentBuilder {
  static create(name) {
    const options = students[name];
    const student = new Student({name : options.name, contact : options.contact, isActive: options.isActive, dateOfBirth: options.dateOfBirth});
    return student;
  }
}

class StudentGroupBuilder {
  static create(name) {
    const options = studentGroups[name];
    const studentGroup = new StudentGroup(options.level, options.groupNumber);
    return studentGroup;
  }
}

class BookBuilder {
  static create(name) {
    const options = books[name];
    const book = new Book(options.subject, options.name);
    return book;
  }
}

class MainBuilder {
  static teacher(teacher) {
    return TeacherBuilder.create(teacher);
  }
  static student(student) {
    return StudentBuilder.create(student);
  }
  static studentGroup(studentGroups) {
    return StudentGroupBuilder.create(studentGroups);
  }
  static book(book){
    return BookBuilder.create(book);
  }
  static parent(parent) {
    return ParentBuilder.create(parent);
  }
  static position(position) {
    return PositionBuilder.create(position);
  }
  static subject(subject){
    return SubjectBuilder.create(subject);
  }
}


module.exports = MainBuilder
