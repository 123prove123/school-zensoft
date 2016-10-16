import TeacherRole from './teacher-role';
import StudentGroupService from '../services/student-group-service';

class StudentGroup {
  constructor(model) {
    this.level =  model.level;
    this.groupNumber = model.groupNumber;
    this.teacherRoles = model.teacherRoles;
    this.students =  model.students;
    this.id = model.id;
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
