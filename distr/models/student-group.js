define(["require", "exports", '../services/student-group-service'], function (require, exports, student_group_service_1) {
    "use strict";
    class StudentGroup {
        constructor(level, groupNumber, teacherRoles = [], students = []) {
            this.setLevel(level);
            this.setGroupNumber(groupNumber);
            this.setTeacherRoles(teacherRoles);
            this.setStudents(students);
        }
        save() {
            student_group_service_1.default.add(this);
            return this;
        }
        setLevel(level) {
            this.level = level;
            return this;
        }
        getLevel() {
            return this.level;
        }
        setGroupNumber(groupNumber) {
            this.groupNumber = groupNumber;
            return this;
        }
        getGroupNumber() {
            return this.groupNumber;
        }
        setStudents(students) {
            this.students = students;
            return this;
        }
        getStudents() {
            return this.students;
        }
        addStudent(student) {
            this.students.push(student);
            return this;
        }
        setTeacherRoles(teacherRoles) {
            this.teacherRoles = teacherRoles;
            return this;
        }
        getTeacherRoles() {
            return this.teacherRoles;
        }
        addTeacherRole(teacherRole) {
            this.teacherRoles.push(teacherRole);
            return this;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StudentGroup;
});
