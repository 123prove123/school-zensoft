import StudentGroupService from '../services/student-group-service';
import BookService from '../services/book-service';
import ParentService from '../services/parent-service';
import PositionService from '../services/position-service';
import StudentService from '../services/student-service';
import SubjectService from '../services/subject-service';
import TeacherService from '../services/teacher-service';

class BuilderHTML{
  static groupsBuild() {
    const store = StudentGroupService.getStore().getAll();
    const storeLength = store.size + 1;
    const table = document.getElementById('StudentGroups');
    for(let i = 1; i < storeLength; i++) {

      const tr = document.createElement('tr');
      const tdLevel = document.createElement('td');
      const tdGroupNumber = document.createElement('td');
      const tdTeachers = document.createElement('td');
      const tdStudents = document.createElement('td');

      // buttons start
      const tdButtons = document.createElement('td');
      const buttonEdit = document.createElement('a');
      const buttonDelete = document.createElement('a');

      buttonEdit.textContent = 'Edit';
      buttonDelete.textContent = 'Delete';

      buttonEdit.setAttribute('id', 'ElementEditButton');
      buttonDelete.setAttribute('id', 'ElementDeleteButton');

      // buttonDelete.setAttribute('store-name', store.keys);

      console.log(store.findById(i));

      buttonDelete.setAttribute('element-id', store.findById(i).id);
      buttonEdit.setAttribute('element-id', store.findById(i).id);

      buttonEdit.setAttribute('class', 'btn-edit btn btn-warning');
      buttonDelete.setAttribute('class', 'btn-delete btn btn-danger');

      tdButtons.appendChild(buttonEdit);
      tdButtons.appendChild(buttonDelete);

      // buttons end 

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
      tr.appendChild(tdButtons);
      table.querySelector('tbody').appendChild(tr);
    }
    return store;
  }
  static booksBuild() {
    const store = BookService.getStore().getAll();
    const storeLength = store.size + 1;
    const table = document.getElementById('Books');
    for(let i = 1; i < storeLength; i++) {
      const tr = document.createElement('tr');
      const tdSubject = document.createElement('td');
      const tdName = document.createElement('td');

      

      tdSubject.textContent = store.findById(i).subject;
      tdName.textContent = store.findById(i).name;
      tr.appendChild(tdSubject);
      tr.appendChild(tdName);
      table.querySelector('tbody').appendChild(tr);
    }
    return store;
  }
  static studentBuild() {
    const store = StudentService.getStore().getAll();
    const storeLength = store.size + 1;
    const table = document.getElementById('Students');
    for(let i = 1; i < storeLength; i++) {

      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdContact = document.createElement('td');
      const tdIsActive = document.createElement('td');
      const tdDateOfBirth = document.createElement('td');

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
  static parentBuild() {
    const store = ParentService.getStore().getAll();
    const storeLength = store.size + 1;
    const table = document.getElementById('Parents');
    for (let i = 1; i < storeLength; i++) {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdContact = document.createElement('td');
      const tdIsActive = document.createElement('td');
      const tdDateOfBirth = document.createElement('td');
      const tdWhoWork = document.createElement('td');

      tdName.textContent = store.findById(i).user.name;
      tdContact.textContent = store.findById(i).user.contact;
      tdIsActive.textContent = store.findById(i).user.isActive;
      tdDateOfBirth.textContent = store.findById(i).user.dateOfBirth;
      tdWhoWork.textContent = store.findById(i).whoWork;

      tr.appendChild(tdName);
      tr.appendChild(tdContact);
      tr.appendChild(tdIsActive);
      tr.appendChild(tdDateOfBirth);
      tr.appendChild(tdWhoWork);


      table.querySelector('tbody').appendChild(tr);
    }
    return store;
  }
  static positionBuild() {
      const store = PositionService.getStore().getAll();
      const storeLength = store.size + 1;
      const table = document.getElementById('Positions');
      for (let i = 1; i < storeLength; i++) {
          const tr = document.createElement('tr');
          const tdQuote = document.createElement('td');
          const tdName = document.createElement('td');

          tdName.textContent = store.findById(i).name;
          tdQuote.textContent = store.findById(i).quote;

          tr.appendChild(tdQuote);
          tr.appendChild(tdName);

          table.querySelector('tbody').appendChild(tr);
      }
      return store;
  }
  static subjectBuild() {
      const store = SubjectService.getStore().getAll();
      const storeLength = store.size + 1;
      const table = document.getElementById('Subjects');
      for (let i = 1; i < storeLength; i++) {
          const tr = document.createElement('tr');
          const tdName = document.createElement('td');
          const tdLevel = document.createElement('td');
          const tdHours = document.createElement('td');
          const tdQuote = document.createElement('td');

          tdName.textContent = store.findById(i).name;
          tdLevel.textContent = store.findById(i).level;
          tdHours.textContent = store.findById(i).hours;
          tdQuote.textContent = store.findById(i).quote;

          tr.appendChild(tdName);
          tr.appendChild(tdLevel);
          tr.appendChild(tdHours);
          tr.appendChild(tdQuote);

          table.querySelector('tbody').appendChild(tr);
      }
      return store;
  }
  static teacherBuild() {
    const store = TeacherService.getStore().getAll();
    const storeLength = store.size + 1;
    const table = document.getElementById('Teachers');
    for (let i = 1; i < storeLength; i++) {

      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdContact = document.createElement('td');
      const tdIsActive = document.createElement('td');
      const tdDateOfBirth = document.createElement('td');

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
    BuilderHTML.parentBuild();
    BuilderHTML.positionBuild();
    BuilderHTML.subjectBuild();
    BuilderHTML.teacherBuild();
  }
}

export default BuilderHTML;
