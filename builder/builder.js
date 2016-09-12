const Student = require('../models/student.js');
const Teacher = require('../models/teacher.js');
const StudentGroup = require('../models/student-group.js');
const Position = require('../models/position.js');
const TeacherRole = require('../models/teacher-role.js');
const Subject = require('../models/subject.js');
const Book = require('../models/book.js');
const Parent = require('../models/parent.js');

const StudentGroupService = require('../services/student-group-service.js');
const TeacherService = require('../services/teacher-service.js');
const StudentService = require('../services/student-service.js');
const PositionService = require('../services/position-service.js');
const TeacherRoleService = require('../services/teacher-role-service.js');
const SubjectService = require('../services/subject-service.js');
const BookService = require('../services/book-service.js');
const ParentService = require('../services/parent-service.js');

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

class StudentBuilder {
  static create(name) {
    const options = students[name];
    const student = new Student({name : options.name, contact : options.contact, isActive: options.isActive, dateOfBirth: options.dateOfBirth});
    return student;
  }
}

class TeacherBuilder {
  static create(name) {
    const options = teachers[name];
    const teacher = new Teacher({name : options.name, contact : options.contact, isActive: options.isActive, dateOfBirth: options.dateOfBirth});
    return teacher;
  }
}

class StudentGroupBuilder {
  static create(name) {
    const options = studentGroups[name];
    const studentGroup = new StudentGroup(options.level, options.groupNumber);
    return studentGroup;
  }
}


const vasyaPupkin = StudentBuilder.create('VasyaPupkin');
const bobMarley = StudentBuilder.create('BobMarley');


const parentEminem = new Parent({name: 'Eminem', contact: 3213, isActive: true, dateOfBirth: '1978.05.21'}, 'Singer');

bobMarley.setParents([parentEminem]);
vasyaPupkin.setParents([parentEminem]);


const positionDirector  = new Position(10000, 'Director');
const positionTeacher   = new Position(5000, 'Teacher');

const teacherJohnSmith = TeacherBuilder.create('johnSmith').setPosition(positionTeacher);
const teacherPavelVolya = TeacherBuilder.create('pavelVolya').setPosition(positionDirector);

const algebra2Book    = new Book('Algebra2', 'Algebra level 2');

const subjectAlgebra2 = new Subject('Algebra2', 2, 10, 3000).addBook(algebra2Book);

const subjectClassMaster = new Subject('Class master', 2, 1, 6000);


const algebraTeacher = new TeacherRole(subjectAlgebra2, teacherJohnSmith);
const classMasterRole = new TeacherRole(subjectClassMaster, teacherJohnSmith);

teacherJohnSmith.addSubject(subjectAlgebra2);

const A1 = StudentGroupBuilder.create('A1');
const A2 = StudentGroupBuilder.create('A2');

A2.addStudent(vasyaPupkin).addStudent(bobMarley);
A2.addTeacherRole(algebraTeacher).addTeacherRole(subjectClassMaster);

vasyaPupkin.setStudentGroup(A2);
bobMarley.setStudentGroup(A2);

teacherJohnSmith.addStudentGroup(A2);



module.exports = teacherJohnSmith;
