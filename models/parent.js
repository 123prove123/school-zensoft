const Person = require('./commons/person.js');

class Parent extends Person{
  constructor(name, contact, whoWork) {
    super(name,contact);
    this.setWhoWork(whoWork);
  }
  setWhoWork(position) {
    this.whoWork = position;
    return this;
  }
}

module.exports = Parent;
