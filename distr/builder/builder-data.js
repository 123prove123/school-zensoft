define(["require", "exports", '../services/student-group-service', '../services/book-service', '../services/parent-service', '../services/position-service', '../services/student-service', '../services/subject-service', '../services/teacher-service', './data/book-data', './data/group-data', './data/parent-data', './data/position-data', './data/student-data', './data/subject-data', './data/teacher-data'], function (require, exports, student_group_service_1, book_service_1, parent_service_1, position_service_1, student_service_1, subject_service_1, teacher_service_1, book_data_1, group_data_1, parent_data_1, position_data_1, student_data_1, subject_data_1, teacher_data_1) {
    "use strict";
    class BuilderData {
        static bookBuilder() {
            for (let book in book_data_1.default) {
                book_service_1.default.create(book_data_1.default[book].subject, book_data_1.default[book].name).save();
            }
        }
        static groupBuilder() {
            for (let group in group_data_1.default) {
                student_group_service_1.default.create(group_data_1.default[group].level, group_data_1.default[group].groupNumber).save();
            }
        }
        static parentBuilder() {
            for (let parent in parent_data_1.default) {
                parent_service_1.default.create(parent_data_1.default[parent].name, parent_data_1.default[parent].contact, parent_data_1.default[parent].isActive, parent_data_1.default[parent].dateOfBirth, parent_data_1.default[parent].whoWork).save();
            }
        }
        static positionBuilder() {
            for (let position in position_data_1.default) {
                position_service_1.default.create(position_data_1.default[position].name, position_data_1.default[position].quote).save();
            }
        }
        static studentBuilder() {
            for (let student in student_data_1.default) {
                student_service_1.default.create(student_data_1.default[student].name, student_data_1.default[student].contact, student_data_1.default[student].isActive, student_data_1.default[student].dateOfBirth).save();
            }
        }
        static subjectBuilder() {
            for (let subject in subject_data_1.default) {
                subject_service_1.default.create(subject_data_1.default[subject].name, subject_data_1.default[subject].level, subject_data_1.default[subject].hours, subject_data_1.default[subject].quote).save();
            }
        }
        static teacherBuilder() {
            for (let teacher in teacher_data_1.default) {
                teacher_service_1.default.create(teacher_data_1.default[teacher].name, teacher_data_1.default[teacher].contact, teacher_data_1.default[teacher].isActive, teacher_data_1.default[teacher].dateOfBirth).save();
            }
        }
        static run() {
            BuilderData.bookBuilder();
            BuilderData.groupBuilder();
            BuilderData.parentBuilder();
            BuilderData.positionBuilder();
            BuilderData.studentBuilder();
            BuilderData.subjectBuilder();
            BuilderData.teacherBuilder();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BuilderData;
});
