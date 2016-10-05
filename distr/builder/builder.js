define(["require", "exports", '../services/student-group-service', '../services/parent-service', '../services/position-service', '../services/student-service', '../services/subject-service', '../services/teacher-service', '../models/teacher-role', './builder-data'], function (require, exports, student_group_service_1, parent_service_1, position_service_1, student_service_1, subject_service_1, teacher_service_1, teacher_role_1, builder_data_1) {
    "use strict";
    builder_data_1.default.run();
    const teacherJohnSmith = teacher_service_1.default.getStore().findById(1);
    const teacherPavelVolya = teacher_service_1.default.getStore().findById(2);
    const parentOne = parent_service_1.default.getStore().findById(1);
    const positionTeacher = position_service_1.default.getStore().findById(1);
    teacherJohnSmith.setPosition(positionTeacher);
    teacherPavelVolya.setPosition(positionTeacher);
    const subjectAlgebraTwo = subject_service_1.default.getStore().findById(1);
    const subjectClassMaster = subject_service_1.default.getStore().findById(2);
    const teacherRoleAlgebraTwo = new teacher_role_1.default(subjectAlgebraTwo, teacherPavelVolya).save();
    const teacherRoleClassMaster = new teacher_role_1.default(subjectClassMaster, teacherJohnSmith).save();
    const A1 = student_group_service_1.default.getStore().findById(1);
    const A2 = student_group_service_1.default.getStore().findById(2);
    const vasyaPupkin = student_service_1.default.getStore().findById(1);
    vasyaPupkin.setStudentGroup(A2);
    vasyaPupkin.addParent(parentOne);
    A2.addTeacherRole(teacherRoleAlgebraTwo);
    A2.addTeacherRole(teacherRoleClassMaster);
    A2.addStudent(vasyaPupkin).save();
    teacherPavelVolya.addStudentGroup(A2).addSubject(subjectAlgebraTwo).save();
    class Builder {
        static run() {
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Builder;
});
