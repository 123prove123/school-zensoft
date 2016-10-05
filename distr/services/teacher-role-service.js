define(["require", "exports", './store', '../models/teacher-role'], function (require, exports, store_1, teacher_role_1) {
    "use strict";
    const TeacherRoleStore = new store_1.default();
    class TeacherRoleService {
        static create(model) {
            return new teacher_role_1.default(model);
        }
        static add(model) {
            TeacherRoleStore.add(model);
            return this;
        }
        static getStore() {
            return TeacherRoleStore;
        }
        static salaryTeacherFindById(id) {
            let sum;
            TeacherRoleStore.forEach(function (el) {
                if (el.teacher.id == id) {
                    sum = el.subject.quote + el.teacher.position.quote;
                }
            });
            return sum;
        }
        static salaryTeacherFindBy(field, value) {
            let sum;
            TeacherRoleStore.forEach(function (el) {
                if (el.teacher.user[field] === value) {
                    sum = el.subject.quote + el.teacher.position.quote;
                }
                else {
                    if (el.teacher[field] === value) {
                        sum = el.subject.quote + el.teacher.position.quote;
                    }
                }
            });
            return sum;
        }
        static findById(id) {
            return TeacherRoleStore.findById(id);
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TeacherRoleService;
});
