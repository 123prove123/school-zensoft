const Person = require('./commons/person.js');

class Parent extends Person{
  constructor(user, whoWork) {
    super(user);
    this.setWhoWork(whoWork);
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
