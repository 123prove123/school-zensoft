const Parent = require('../models/parent.js');

class ParentServices extends Parent{
  constructor(name, contact, whoWork) {
      super(name, contact, whoWork)
  }
  getContactTeacherForSon();
}
