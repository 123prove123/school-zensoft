import Store from './store';
const SubjectStore = new Store();

class SubjectService extends Store{
  static create(name, level, hours, quote) {
    return new Subject(name, level, hours, quote);
  }
  static add(model) {
    SubjectStore.add(model);
  }
  static getStore() {
    return SubjectStore;
  }
  static findById(id) {
    return SubjectStore.findById(id);
  }
  static addBookToSubjectById(book, id) {
    const subject = SubjectStore.findById(id);
    subject.addBook(book);
    return subject;
  }
}

export default SubjectService;

import Subject from '../models/subject';
