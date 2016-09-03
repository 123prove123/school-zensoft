const StudentGroup = require('../models/student-group.js');

class StudentGroupServices extends StudentGroup{
  constructor(level, groupNumber, teacherRoles = [], students = [] ) {
      super(level, groupNumber, teacherRoles = [], students = [] )
  }
  addStudents();
  addTeacherRoles();
  getStudents();
  getTeachers();
  getAllStudents();
  getAllTeacherRoles();
  getAllTeacher();
  getAllSubjects();
  getStudentNumberForName();
}
