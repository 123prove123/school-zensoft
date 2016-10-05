define(["require", "exports", './store', '../models/subject'], function (require, exports, store_1, subject_1) {
    "use strict";
    const SubjectStore = new store_1.default();
    class SubjectService extends store_1.default {
        static create(name, level, hours, quote) {
            return new subject_1.default(name, level, hours, quote);
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SubjectService;
});
