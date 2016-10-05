import Person from './commons/person';
import ParentService from '../services/parent-service';

class Parent extends Person{
  constructor(user, whoWork) {
    super(user);
    this.setWhoWork(whoWork);
  }

  save() {
    ParentService.add(this);
    return this;
  }
  setWhoWork(position) {
    this.whoWork = position;
    return this;
  }
  getWhoWork() {
    return whoWork;
  }

}

export default Parent;
