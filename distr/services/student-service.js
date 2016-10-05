define(["require", "exports", './store', '../models/student'], function (require, exports, store_1, student_1) {
    "use strict";
    const StudentStore = new store_1.default();
    class StudentService {
        static create(model) {
            return new student_1.default(model);
        }
        static add(model) {
            StudentStore.add(model);
        }
        static getStore() {
            return StudentStore;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StudentService;
});