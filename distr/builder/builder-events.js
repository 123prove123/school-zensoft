define(["require", "exports"], function (require, exports) {
    "use strict";
    /*
      studentGroupEvent
    
      Main tasks
    
      1) Create Input Level, GroupNumber, TeacherRoles select, Students select (no study)
      2) When a student add in the SG. Writing in student prop SG.
      3) Create delete and edit
    */
    class EventBuilder {
        static studentGroupEvent() {
            const openButton = document.getElementById('StudentGroupOpen');
            const closeButton = document.getElementById('StudentGroupClose');
            const form = document.getElementById('StudentGroupForm');
            const addButton = document.getElementById('addStudentGroup');
            addButton.addEventListener('click', function () {
                const inputLevel = document.getElementById('GroupLevelInput').value;
                const inputGroupNumber = document.getElementById('GroupNumberInput').value;
                const table = document.getElementById('StudentGroups');
                const tr = document.createElement('tr');
                const tdLevel = document.createElement('td');
                const tdGroupNumber = document.createElement('td');
                tdLevel.textContent = inputLevel;
                tdGroupNumber.textContent = inputGroupNumber;
                tr.appendChild(tdLevel);
                tr.appendChild(tdGroupNumber);
                table.querySelector('tbody').appendChild(tr);
                form.style.display = 'none';
            });
            openButton.addEventListener('click', function () {
                form.style.display = 'block';
            });
            closeButton.addEventListener('click', function () {
                form.style.display = 'none';
            });
        }
        static run() {
            EventBuilder.studentGroupEvent();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = EventBuilder;
});
