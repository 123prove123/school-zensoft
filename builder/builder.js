const TeacherRole = require('../models/teacher-role.js');

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


var test = TeacherService.salaryTeacherBy('name', 'John Smith');

module.exports = test;
