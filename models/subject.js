class Subject {
  constructor(name, level, hours, books = [], quote) {
    this.setName(name);
    this.setLevel(level);
    this.setHours(hours);
    this.setQuote(quote);
    this.books = books;
  }
  addBook(book) {
    this.books.push(new Book(book));
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
}

module.exports = Subject;
