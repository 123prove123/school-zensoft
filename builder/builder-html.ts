import StudentGroupService from '../services/student-group-service';
import SubjectService from '../services/subject-service';
import TableHelper from '../helper/table-helper'

class BuilderHTML{
  static groupsBuild() {
    const store = StudentGroupService.getStore().getAll();
    const table = document.querySelector('#StudentGroups tbody');
    TableHelper.createTable(store, table, 'student-group', 'StudentGroupForm');
  }

  static subjectBuild() {
      const store = SubjectService.getStore().getAll();
      const table = document.querySelector('#Subjects tbody');
      TableHelper.createTable(store, table, 'subject');
  }

  static run() {
    BuilderHTML.groupsBuild();
    // BuilderHTML.subjectBuild();
  }
}

export default BuilderHTML;
