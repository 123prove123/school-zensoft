define(["require", "exports", './store', './teacher-role-service', '../models/teacher'], function (require, exports, store_1, teacher_role_service_1, teacher_1) {
    "use strict";
    const StoreTeacher = new store_1.default();
    class TeacherService {
        static create(name, contact, isActive, dateOfBirth) {
            return new teacher_1.default({ name, contact, isActive, dateOfBirth });
        }
        static add(model) {
            StoreTeacher.add(model);
            return this;
        }
        static getStore() {
            return StoreTeacher;
        }
        static salaryTeacherById(id) {
            return teacher_role_service_1.default.salaryTeacherFindById(id);
        }
        static salaryTeacherBy(field, value) {
            return teacher_role_service_1.default.salaryTeacherFindBy(field, value);
        }
        static findById(id) {
            return StoreTeacher.findById(id);
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TeacherService;
});
