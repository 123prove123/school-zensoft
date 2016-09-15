const Person = require('./commons/person.js');
const ParentService = require('../services/parent-service.js');

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

module.exports = Parent;
