define(["require", "exports", '../services/book-service'], function (require, exports, book_service_1) {
    "use strict";
    class Book {
        constructor(subject, name) {
            this.setSubject(subject);
            this.setName(name);
        }
        save() {
            book_service_1.default.add(this);
            return this;
        }
        setName(name) {
            this.name = name;
            return this;
        }
        getName() {
            return this.name;
        }
        setSubject(subject) {
            this.subject = subject;
            return this;
        }
        getSubject() {
            return this.subject;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Book;
});
