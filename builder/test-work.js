// const StudentGroup = require('../models/student-group.js');
// const Subject = require('../models/subject.js');
// const Book = require('../models/book.js');
//
// const Position = require('../models/position.js');
//
// const Teacher = require('../models/teacher.js');
// const Parent = require('../models/parent.js');
const Student = require('../models/student.js');
// const TeacherRole = require('../models/teacher-role.js');
//

const Mike = new Student({'name' : 'Mike', 'contact': 91321231, 'isActive': true, 'dateOfBirth' : '21.11.1997'});




module.exports = Mike;
