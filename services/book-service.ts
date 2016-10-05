import Store from './store';
const BookStore = new Store();

class BookService{
  static create(subject, name) {
    return new Book(subject, name);
  }
  static add(model) {
    BookStore.add(model);
  }
  static getStore() {
    return BookStore;
  }
  static findBy(field, name) {
    return BookStore.findBy(field,name);
  }
  static findById(id) {
    return BookStore.findById(id);
  }
}

export default BookService;

import Book from '../models/book';
