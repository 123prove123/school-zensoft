class Subject {
  constructor(name, level, hours, quote, books = [] ) {
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

module.exports = Subject;
