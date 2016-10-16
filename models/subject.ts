import SubjectService from '../services/subject-service';

class Subject {
  constructor(model) {
    this.name = model.name;
    this.level = model.level;
    this.hours = model.hours;
    this.quote = model.quote;
    this.books = model.books;
    this.id = model.id;
  }
  save() {
    SubjectService.add(this);
    return this;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  getName() {
    return this.name;
  }
  setLevel(level){
    this.level = level;
    return this;
  }
  getLevel() {
    return this.level;
  }
  setHours(hours) {
    this.hours = hours;
    return this;
  }
  getHours() {
    return this.hours;
  }
  setBooks(books) {
    this.books = books;
    return this;
  }
  getBooks() {
    return this.books;
  }
  addBook(book) {
    this.books.push(book);
    return this;
  }
  setQuote(quote) {
    this.quote = quote
    return this;
  }
  getQuote() {
    return this.quoute
  }
}

export default Subject;
