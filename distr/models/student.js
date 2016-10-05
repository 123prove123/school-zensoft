define(["require", "exports", './commons/person', '../services/student-service'], function (require, exports, person_1, student_service_1) {
    "use strict";
    class Student extends person_1.default {
        constructor(user, studentGroup, parents = []) {
            super(user);
            this.setStudentGroup(studentGroup);
            this.setParents(parents);
        }
        save() {
            student_service_1.default.add(this);
            return this;
        }
        setStudentGroup(studentGroup) {
            this.studentGroup = studentGroup;
            return this;
        }
        getStudentGroup() {
            return this.studentGroup;
        }
        setParents(parents) {
            this.parents = parents || [];
            return this;
        }
        getParents() {
            return this.parents;
        }
        addParent(parent) {
            this.parents.push(parent);
            return this;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Student;
});
