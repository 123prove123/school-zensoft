class Subject {
  constructor(name, level, hours, books = [], quote) {
    this.setName(name);
    this.setLevel(level);
    this.setHours(hours);
    this.setQuote(quote);
    this.setBooks(books)
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setLevel(level){
    this.level = level;
    return this;
  }
  setHours(hours) {
    this.hours = hours;
    return this;
  }
  setBooks(books) {
    this.books = books;
    return this;
  }
  setQuote(quote) {
    this.quote = quote
    return this;
  }
  getName() {
    return this.name;
  }
  getLevel() {
    return this.level;
  }
  getHours() {
    return this.hours;
  }
  getBooks() {
    return this.books;
  }
  getQuote() {
    return this.quoute
  }
}

module.exports = Subject;
