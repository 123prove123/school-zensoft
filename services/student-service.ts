import Store from './store';
const StudentStore = new Store();



class StudentService {
  static create(name, contact, isActive, dateOfBirth) {
    return new Student({name, contact, isActive, dateOfBirth});
  }
  static add(model) {
    StudentStore.add(model);
  }
  static getStore() {
    return StudentStore;
  }
}


export default StudentService;



import Student from '../models/student';
