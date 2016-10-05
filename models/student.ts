import Person from './commons/person';
import StudentService from '../services/student-service';

class Student extends Person{
  constructor(user, studentGroup, parents = []) {
    super(user);
    this.setStudentGroup(studentGroup);
    this.setParents(parents);
  }
  save() {
    StudentService.add(this);
    return this;
  }
  setStudentGroup(studentGroup) {
    this.studentGroup = studentGroup;
    return this;
  }
  getStudentGroup() {
    return this.studentGroup;
  }
  setParents(parents) {
    this.parents = parents || [];
    return this;
  }
  getParents() {
    return this.parents;
  }
  addParent(parent) {
    this.parents.push(parent);
    return this;
  }
}

export default Student;
