import Store from './store';
const StudentStore = new Store();



class StudentService {
  static create(model) {
    return new Student(model);
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
