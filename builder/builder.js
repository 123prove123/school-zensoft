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

const StudentBuilder = require('./student-builder.js');
const StudentGroupBuilder = require('./student-group-builder.js');
const TeacherBuilder = require('./teacher-builder.js');



const vasyaPupkin = StudentBuilder.create('VasyaPupkin').save();

const teacherPavelVolya = TeacherBuilder.create('pavelVolya').save();

const A1 = StudentGroupBuilder.create('A1').save();






module.exports = TeacherService.getStore();
