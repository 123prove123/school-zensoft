define(["require", "exports", './commons/person', '../services/teacher-service'], function (require, exports, person_1, teacher_service_1) {
    "use strict";
    class Teacher extends person_1.default {
        constructor(user, subjects = [], studentGroups = [], position) {
            super(user);
            this.setSubjects(subjects);
            this.setStudentGroups(studentGroups);
            this.setPosition(position);
        }
        save() {
            teacher_service_1.default.add(this);
            return this;
        }
        setPosition(position) {
            this.position = position;
            return this;
        }
        getPosition() {
            return this.position;
        }
        setStudentGroups(studentGroups) {
            this.studentGroups = studentGroups;
            return this;
        }
        getStudentGroups() {
            return this.studentGroups;
        }
        addStudentGroup(studentGroup) {
            this.studentGroups.push(studentGroup);
            return this;
        }
        setSubjects(subjects) {
            this.subjects = subjects;
            return this;
        }
        getSubjects() {
            return this.subjects;
        }
        addSubject(subject) {
            this.subjects.push(subject);
            return this;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Teacher;
});
