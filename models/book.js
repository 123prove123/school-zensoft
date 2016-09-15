const BookService = require('../services/book-service.js')

class Book {
  constructor(subject, name) {
    this.setSubject(subject);
    this.setName(name);
  }

  save() {
    BookService.add(this);
    return this;
  }
  setName(name){
    this.name = name
    return this;
  }
  getName() {
    return this.name;
  }
  setSubject(subject) {
    this.subject = subject;
    return this;
  }
  getSubject(){
    return this.subject;
  }
}

module.exports = Book;
