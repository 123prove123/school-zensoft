import Store from './store';
const ParentStore = new Store();

class ParentService{
  static create(model) {
    return new Parent(model);
  }
  static add(model) {
    ParentStore.add(model);
  }
  static getStore() {
    return ParentStore;
  }
}

export default ParentService;

import Parent from '../models/student-group';
