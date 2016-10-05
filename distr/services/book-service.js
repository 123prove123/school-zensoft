define(["require", "exports", './store', '../models/book'], function (require, exports, store_1, book_1) {
    "use strict";
    const BookStore = new store_1.default();
    class BookService {
        static create(subject, name) {
            return new book_1.default(subject, name);
        }
        static add(model) {
            BookStore.add(model);
        }
        static getStore() {
            return BookStore;
        }
        static findBy(field, name) {
            return BookStore.findBy(field, name);
        }
        static findById(id) {
            return BookStore.findById(id);
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BookService;
});
