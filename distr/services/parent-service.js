define(["require", "exports", './store', '../models/student-group'], function (require, exports, store_1, student_group_1) {
    "use strict";
    const ParentStore = new store_1.default();
    class ParentService {
        static create(model) {
            return new student_group_1.default(model);
        }
        static add(model) {
            ParentStore.add(model);
        }
        static getStore() {
            return ParentStore;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ParentService;
});
