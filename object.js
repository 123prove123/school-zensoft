const Book          = require('./main-classes/book.js');
const Person        = require('./main-classes/person.js');
const Position      = require('./main-classes/position.js');
const StudentGroup  = require('./main-classes/student-group.js');
const Subject       = require('./main-classes/subject.js');
const TeacherRole   = require('./main-classes/teacher-role.js');

const Parent  = require('./main-classes/children-classes/parent.js');
const Student = require('./main-classes/children-classes/student.js');
const Teacher = require('./main-classes/children-classes/teacher.js');


const AlgebraFiveBookFirst = new Book('Algebra Five First', 'Good Book')
const AlgebraFiveBookSecond = new Book('Algebra Five Second', 'Good Book')
const AlgebraFive = new Subject(
  'Algebra Five', 5, 6,
  [AlgebraFiveBookFirst, AlgebraFiveBookSecond],
  10000);

const MikeDad = new Parent('MikeDad', 700520597, 'President');
const MikeMom = new Parent('MikeMom', 700520597, 'Support president');
const Mike = new Student('Mike', 70052097, true, 1997, 'A', [MikeDad, MikeMom]);


const AlgebraTeacherRole = new TeacherRole(AlgebraFive);

const groupA = new StudentGroup(5, 5, AlgebraTeacherRole, [Mike])

console.log(groupA);
