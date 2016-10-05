define(["require", "exports", '../services/teacher-role-service'], function (require, exports, teacher_role_service_1) {
    "use strict";
    class TeacherRole {
        constructor(subject, teacher) {
            this.setSubject(subject);
            this.setTeacher(teacher);
        }
        save() {
            teacher_role_service_1.default.add(this);
            return this;
        }
        setSubject(subject) {
            this.subject = subject;
            return this;
        }
        setTeacher(teacher) {
            this.teacher = teacher;
            return this;
        }
        getTeacher() {
            return this.teacher;
        }
        getSubject() {
            return this.subject;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TeacherRole;
});
