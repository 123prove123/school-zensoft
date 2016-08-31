class Book {
  constructor(subject, name) {
    this.subject = subject;
    this.setName(name);
  }
  setName(name){
    this.name = name
    return this;
  }
}

module.exports = Book;
