const Store = require('./store.js');
const BookStore = new Store();

class BookService{
  static create(model) {
    return new Book(model);
  }
  static add(model) {
    BookStore.add(model);
  }
  static getStore() {
    return BookStore;
  }
}

module.exports = BookService;

const Book = require('../models/book.js');
