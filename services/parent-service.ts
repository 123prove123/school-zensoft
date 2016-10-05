import Store from './store';
const ParentStore = new Store();

class ParentService{
  static create(name, contact, isActive, dateOfBirth, whoWork) {
    return new Parent({name, contact, isActive, dateOfBirth}, whoWork);
  }
  static add(model) {
    ParentStore.add(model);
  }
  static getStore() {
    return ParentStore;
  }
}

export default ParentService;

import Parent from '../models/parent';
