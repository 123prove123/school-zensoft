import Store from './store';
const StudentGroupStore = new Store();

class StudentGroupService {
  static create(level, groupNumber) {
    return new StudentGroup(level, groupNumber);
  }

  static add(model) {
    StudentGroupStore.add(model);
  }

  static getStore() {
    return StudentGroupStore;
  }


  static getStudentsByGroupId(id) {
    return StudentGroupStore.findById(id).students;
  }

  static getStudentsByGroup(field, value) {
    return StudentGroupStore.findBy(field, value).students;
  }

  static getTeachersByGroupId(id) {
    const teachers = [];
    StudentGroupStore.findById(id)
      .teacherRoles.forEach(function (el2) {
        teachers.push(el2.teacher);
    });
    return teachers;
  }
}

export default StudentGroupService;

import StudentGroup from '../models/student-group';
