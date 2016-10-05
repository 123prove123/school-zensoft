define(["require", "exports", '../services/student-group-service', '../services/book-service'], function (require, exports, student_group_service_1, book_service_1) {
    "use strict";
    var groupData = {
        groupA1: { level: 1, groupNumber: 'A' },
        groupA2: { level: 2, groupNumber: 'A' }
    };
    var bookData = {
        AlgebraTwo: {
            subject: 'Algebra Two',
            name: 'Algebra Two'
        },
        BiologyTwo: {
            subject: 'Biology Two',
            name: 'Biology Two'
        }
    };
    class GroupBuilder {
        static fillGroups() {
            for (let group in groupData) {
                student_group_service_1.default.create(groupData[group].level, groupData[group].groupNumber).save();
            }
        }
    }
    class BookBuilder {
        static fillBooks() {
            for (let book in bookData) {
                book_service_1.default.create(bookData[book].subject, bookData[book].name).save();
            }
        }
    }
    class Builder {
        static run() {
            BookBuilder.fillBooks();
            GroupBuilder.fillGroups();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Builder;
});
