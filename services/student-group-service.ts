import Store from './store';
const StudentGroupStore = new Store();

class StudentGroupService {
  static create(model) {
    return new StudentGroup(model);
  }

  static add(model) {
    StudentGroupStore.add(model);
  }

  static getStore() {
    return StudentGroupStore;
  }


}

export default StudentGroupService;

import StudentGroup from '../models/student-group';
