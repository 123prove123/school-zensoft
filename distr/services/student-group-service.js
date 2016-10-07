define(["require", "exports", './store', '../models/student-group'], function (require, exports, store_1, student_group_1) {
    "use strict";
    const StudentGroupStore = new store_1.default();
    class StudentGroupService {
        static create(level, groupNumber) {
            return new student_group_1.default(level, groupNumber);
        }
        static add(model) {
            StudentGroupStore.add(model);
        }
        static getStore() {
            return StudentGroupStore;
        }
        static getStudentsByGroupId(id) {
            return StudentGroupStore.findById(id).students;
        }
        static getStudentsByGroup(field, value) {
            return StudentGroupStore.findBy(field, value).students;
        }
        static getTeachersByGroupId(id) {
            const teachers = [];
            StudentGroupStore.findById(id)
                .teacherRoles.forEach(function (el2) {
                teachers.push(el2.teacher);
            });
            return teachers;
        }
        static getTeachersNameByGroupId(id) {
            let teachers = StudentGroupService.getTeachersByGroupId(id);
            let teacherName = [];
            teachers.forEach(function (el) {
                teacherName.push(el.user.name);
            });
            return teacherName;
        }
        static getStudentsNameByGroupId(id) {
            let students = StudentGroupService.getStudentsByGroupId(id);
            let studentName = [];
            students.forEach(function (el) {
                studentName.push(el.user.name);
            });
            return studentName;
        }
        static getGroupsName() {
            let groupNames = [];
            StudentGroupStore.forEach(function (el) {
                groupNames.push(`${el.groupNumber}${el.level}`);
            });
            return groupNames;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StudentGroupService;
});
