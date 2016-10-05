import StudentGroupService from '../services/student-group-service';
import BookService from '../services/book-service';

class BuilderHTML{
  static groupsBuild() {
    const store = StudentGroupService.getStore().getAll();
    const storeLength = store.size + 1;
    let table = document.getElementById('StudentGroups');
    for(let i = 1; i < storeLength; i++) {

      let tr = document.createElement('tr');
      let tdLevel = document.createElement('td');
      let tdGroupNumber = document.createElement('td');
      let tdTeachers = document.createElement('td');
      let tdStudents = document.createElement('td');

      let teachersName = StudentGroupService.getTeachersNameByGroupId(i);
      teachersName = teachersName.join(", ");
      let studentsName = StudentGroupService.getStudentsNameByGroupId(i);
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
    const store = BookService.getStore().getAll();
    const storeLength = store.size + 1;
    let table = document.getElementById('Books');
    for(let i = 1; i < storeLength; i++) {
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
  static run() {
    BuilderHTML.groupsBuild();
    BuilderHTML.booksBuild();
  }
}

export default BuilderHTML;
