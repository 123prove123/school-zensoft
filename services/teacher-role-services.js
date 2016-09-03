const TeacherRole = require('../models/teacher-role.js.js');

class TeacherRoleServices extends TeacherRole{
  constructor(subject, teacher) {
      super(subject, teacher)
  }
}
