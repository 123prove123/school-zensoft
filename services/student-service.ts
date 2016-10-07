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
  static getStudentsName() {
    let studentNames = []
    StudentStore.forEach(function(el){
      studentNames.push(el.user.name);
    });
    return studentNames;
  }
}


export default StudentService;



import Student from '../models/student';
