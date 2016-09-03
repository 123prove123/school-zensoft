const Subject = require('../models/subject.js');

class SubjectServices extends Subject{
  constructor(name, level, hours, books = [], quote) {
      super(name, level, hours, books = [], quote)
  }
  addBook();
}
