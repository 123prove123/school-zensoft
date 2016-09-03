const Student = require('../models/student.js');

class StudentServices extends Student{
  constructor(name, contact, isActive, dateOfBirth,
    studentGroup,parents = []) {
      super(name, contact, isActive, dateOfBirth,
        studentGroup,parents = [])
  }
  addStudentGroup();
  addParent();
  getParentContact();
  getStudentSubjects();
  getStudentTeachers();
  getTeacherContact();
  
}
