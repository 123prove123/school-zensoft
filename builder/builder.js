const TeacherRole = require('../models/teacher-role.js');
const Book = require('../models/book.js');
const Subject = require('../models/subject.js');
const Teacher = require('../models/teacher.js');
const Student = require('../models/student.js');


const StudentGroupService = require('../services/student-group-service.js');
const TeacherService = require('../services/teacher-service.js');
const StudentService = require('../services/student-service.js');
const PositionService = require('../services/position-service.js');
const TeacherRoleService = require('../services/teacher-role-service.js');
const SubjectService = require('../services/subject-service.js');
const BookService = require('../services/book-service.js');
const ParentService = require('../services/parent-service.js');

const MainBuilder = require('./main-builder.js');


const vasyaPupkin = MainBuilder.student('VasyaPupkin');

const teacherPavelVolya = MainBuilder.teacher('pavelVolya').save();
const teacherJohnSmith = MainBuilder.teacher('johnSmith').save();

const A2 = MainBuilder.studentGroup('A2').save();
const A1 = MainBuilder.studentGroup('A1').save();

const bookAlgebraTwo = MainBuilder.book('AlgebraTwo').save();

const parentOne = MainBuilder.parent('parentOne').save();


const positionTeacher = MainBuilder.position('teacher').save();

teacherPavelVolya.setPosition(positionTeacher);
teacherJohnSmith.setPosition(positionTeacher);

const subjectAlgebraTwo = MainBuilder.subject('AlgebraTwo').save();
const subjectClassMaster = MainBuilder.subject('ClassMaster').save();

const teacherRoleAlgebraTwo = new TeacherRole(
  subjectAlgebraTwo,
  teacherPavelVolya
).save();

const teacherRoleClassMaster = new TeacherRole(
  subjectClassMaster,
  teacherJohnSmith
).save();

vasyaPupkin.setStudentGroup(A2);
vasyaPupkin.addParent(parentOne).save();

A2.addTeacherRole(teacherRoleAlgebraTwo);
A2.addTeacherRole(teacherRoleClassMaster);
A2.addStudent(vasyaPupkin).save();

teacherPavelVolya.addStudentGroup(A2).addSubject(subjectAlgebraTwo).save();

const bobMarley = MainBuilder.student('BobMarley').save();

StudentGroupService.addStudentToGroupById(bobMarley, 1);

BookService.add(new Book('Chemistry One','Chemistry One'));

SubjectService.add(new Subject('Chemistry One', 2, 10, 3000));

SubjectService.addBookToSubjectById(BookService.findById(2),3);

TeacherService.add(new Teacher(
  {name: 'Teacher 3', contact: 1231, isActive:true, dateOfBirth: '1982.11.05'},
  SubjectService.findById(3)
));

TeacherService.findById(3).setPosition(positionTeacher);

TeacherRoleService.add(new TeacherRole(SubjectService.findById(3), TeacherService.findById(3)));

StudentGroupService.addTeacherRoleToGroupById(TeacherRoleService.findById(3), 2);

StudentService.add(new Student(
  {name:"Ilya Taracov", contact: 23123, isActive:true, dateOfBirth: '1997.11.05'}
));

StudentGroupService.addStudentToGroupById(StudentService.getStore().findById(3), 2);


const test = BookService.getStore();

module.exports = test;
