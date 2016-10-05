import TeacherRole from './teacher-role';
import StudentGroupService from '../services/student-group-service';

class StudentGroup {
  constructor(level, groupNumber, teacherRoles = [], students = [] ) {
    this.setLevel(level);
    this.setGroupNumber(groupNumber);
    this.setTeacherRoles(teacherRoles);
    this.setStudents(students);
  }
  save() {
    StudentGroupService.add(this);
    return this;
  }
  setLevel(level) {
    this.level = level;
    return this;
  }
  getLevel() {
    return this.level;
  }
  setGroupNumber(groupNumber) {
    this.groupNumber = groupNumber;
    return this;
  }
  getGroupNumber() {
    return this.groupNumber;
  }
  setStudents(students) {
    this.students = students;
    return this;
  }
  getStudents() {
    return this.students;
  }
  addStudent(student) {
    this.students.push(student);
    return this;
  }
  setTeacherRoles(teacherRoles) {
    this.teacherRoles = teacherRoles;
    return this;
  }
  getTeacherRoles() {
    return this.teacherRoles;
  }
  addTeacherRole(teacherRole) {
    this.teacherRoles.push(teacherRole);
    return this;
  }
}
export default StudentGroup;
