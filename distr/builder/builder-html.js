define(["require", "exports", '../services/student-group-service', '../services/book-service', '../services/student-service'], function (require, exports, student_group_service_1, book_service_1, student_service_1) {
    "use strict";
    class BuilderHTML {
        static groupsBuild() {
            const store = student_group_service_1.default.getStore().getAll();
            const storeLength = store.size + 1;
            let table = document.getElementById('StudentGroups');
            for (let i = 1; i < storeLength; i++) {
                let tr = document.createElement('tr');
                let tdLevel = document.createElement('td');
                let tdGroupNumber = document.createElement('td');
                let tdTeachers = document.createElement('td');
                let tdStudents = document.createElement('td');
                let teachersName = student_group_service_1.default.getTeachersNameByGroupId(i);
                teachersName = teachersName.join(", ");
                let studentsName = student_group_service_1.default.getStudentsNameByGroupId(i);
                studentsName = studentsName.join(", ");
                tdLevel.textContent = store.findById(i).level;
                tdGroupNumber.textContent = store.findById(i).groupNumber;
                tdTeachers.textContent = teachersName;
                tdStudents.textContent = studentsName;
                tr.appendChild(tdLevel);
                tr.appendChild(tdGroupNumber);
                tr.appendChild(tdTeachers);
                tr.appendChild(tdStudents);
                table.querySelector('tbody').appendChild(tr);
            }
            return store;
        }
        static booksBuild() {
            const store = book_service_1.default.getStore().getAll();
            const storeLength = store.size + 1;
            let table = document.getElementById('Books');
            for (let i = 1; i < storeLength; i++) {
                let tr = document.createElement('tr');
                let tdSubject = document.createElement('td');
                let tdName = document.createElement('td');
                tdSubject.textContent = store.findById(i).subject;
                tdName.textContent = store.findById(i).name;
                tr.appendChild(tdSubject);
                tr.appendChild(tdName);
                table.querySelector('tbody').appendChild(tr);
            }
            return store;
        }
        static studentBuild() {
            const store = student_service_1.default.getStore().getAll();
            const storeLength = store.size + 1;
            let table = document.getElementById('Students');
            for (let i = 1; i < storeLength; i++) {
                let tr = document.createElement('tr');
                let tdName = document.createElement('td');
                let tdContact = document.createElement('td');
                let tdIsActive = document.createElement('td');
                let tdDateOfBirth = document.createElement('td');
                tdName.textContent = store.findById(i).user.name;
                tdContact.textContent = store.findById(i).user.contact;
                tdIsActive.textContent = store.findById(i).user.isActive;
                tdDateOfBirth.textContent = store.findById(i).user.dateOfBirth;
                tr.appendChild(tdName);
                tr.appendChild(tdContact);
                tr.appendChild(tdIsActive);
                tr.appendChild(tdDateOfBirth);
                table.querySelector('tbody').appendChild(tr);
            }
            return store;
        }
        static run() {
            BuilderHTML.groupsBuild();
            BuilderHTML.booksBuild();
            BuilderHTML.studentBuild();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BuilderHTML;
});
