const StudentGroup = require('../models/student-group.js');
const Subject = require('../models/subject.js');
const Book = require('../models/book.js');

const Position = require('../models/position.js');

const Teacher = require('../models/teacher.js');
const Parent = require('../models/parent.js');
const Student = require('../models/student.js');
const TeacherRole = require('../models/teacher-role.js');

const AlgebraBook = new Book('Algebra', 'AlgebraFive');
const AlgebraSubject = new Subject('Algebra', 5, 10,
  [AlgebraBook], 5000);

const GroupFiveA = new StudentGroup(
  5, '5a'
);

const PositionTeacher = new Position(5000, 'Teacher')


const AnnaPetrovna = new Teacher(
  'AnnaPetrovna', 99667005205, true, '01.11.1965',
  [AlgebraSubject], [GroupFiveA],
  10000, PositionTeacher
);

const MikeParent = new Parent('MikeDad', 61020312, 'Bussinesman');

const Mike = new Student(
  'Mike', 951929312, true, '21.11.1997',
  GroupFiveA, [MikeParent]
);

const AlgebraTeacherRole = new TeacherRole(AlgebraSubject, AnnaPetrovna);




GroupFiveA.addStudent(Mike);
GroupFiveA.addTeacherRole(AlgebraTeacherRole);

module.exports = GroupFiveA;
