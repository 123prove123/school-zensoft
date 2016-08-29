const Person = require('../person.js');

class Parent extends Person{
  constructor(name, contacts, whoWork) {
    super(name,contacts);
    this.setWhoWork(whoWork);
  }
  setWhoWork(position) {
    this.whoWork = position;
    return this;
  }
}

module.exports = Parent;
