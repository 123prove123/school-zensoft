import Store from './store';
const StoreTeacher = new Store();
import TeacherRoleService from './teacher-role-service';

class TeacherService {
  static create(model) {
    return new Teacher(model);
  }
  static add(model) {
    StoreTeacher.add(model);
    return this;
  }
  static getStore() {
    return StoreTeacher;
  }
  static salaryTeacherById(id) {
    return TeacherRoleService.salaryTeacherFindById(id);
  }
  static salaryTeacherBy(field, value) {
    return TeacherRoleService.salaryTeacherFindBy(field,value);
  }
  static findById(id) {
    return StoreTeacher.findById(id);
  }
}


export default TeacherService;


import Teacher from '../models/teacher';
