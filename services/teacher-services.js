const Teacher = require('../models/teacher.js');

class TeacherServices extends Teacher{
  constructor(name,contact,isActive, dateOfBirth, subjects = [];
  studentGroups = [], salaryes = [], position) {
      super(name,contact,isActive, dateOfBirth, subjects = [];
      studentGroups = [], salaryes = [], positions)
  }
  addSubject();
  addStudentGroup();
  addSalary();
  addPosition();
  getStudentsForStudentGroup(StudentGroupA);
  getSubjectsForStudentGroup(StudentGroupA);
  getStudentContact(nameStudent);
  getAllStudents();
}
