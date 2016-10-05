define(["require", "exports", '../services/student-group-service', '../services/book-service'], function (require, exports, student_group_service_1, book_service_1) {
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
                tdLevel.textContent = store.findById(i).level;
                tdGroupNumber.textContent = store.findById(i).groupNumber;
                tr.appendChild(tdLevel);
                tr.appendChild(tdGroupNumber);
                table.appendChild(tr);
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
                table.appendChild(tr);
            }
            return store;
        }
        static run() {
            BuilderHTML.groupsBuild();
            BuilderHTML.booksBuild();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BuilderHTML;
});
