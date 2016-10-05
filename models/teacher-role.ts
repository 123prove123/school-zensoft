import TeacherRoleService from '../services/teacher-role-service';

class TeacherRole {
  constructor(subject, teacher) {
    this.setSubject(subject);
    this.setTeacher(teacher);
  }
  save() {
    TeacherRoleService.add(this);
    return this;
  }
  setSubject(subject) {
    this.subject = subject;
    return this;
  }
  setTeacher(teacher) {
    this.teacher = teacher;
    return this;
  }
  getTeacher() {
    return this.teacher;
  }
  getSubject() {
    return this.subject;
  }
}

export default TeacherRole;
