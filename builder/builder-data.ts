import StudentGroupService from '../services/student-group-service';
import SubjectService from '../services/subject-service';

import GroupData from './data/group-data';
import SubjectData from './data/subject-data';

class BuilderData {
  static groupBuilder() {
    let sessionGroupData = [];
    GroupData.forEach((group) => {
      let studentGroup = StudentGroupService.create({
        'level': group.level,
        'groupNumber':group.groupNumber,
        'teacherRoles': group.teacherRoles,
        'students': group.students
      }).save();
      sessionGroupData.push(studentGroup);
    });
    sessionStorage.setItem('student-group',JSON.stringify(sessionGroupData));
  }
  static subjectBuilder() {
    let sessionSubjectData = []
    SubjectData.forEach((subject) => {
      SubjectService.create({
        'name': subject.name,
        'level': subject.level,
        'hours': subject.hours,
        'quote': subject.quote,
        'books': subject.books
      }).save();
      sessionSubjectData.push(subject);
    });
    sessionStorage.setItem('subject',JSON.stringify(sessionSubjectData));
  }

  static groupSessionBuild() {
    let models = JSON.parse(sessionStorage.getItem('student-group'));
    models.forEach(function(model){
      StudentGroupService.create({
        'level': model.level,
        'groupNumber':model.groupNumber,
        'teacherRoles': model.teacherRoles,
        'students': model.students,
        'id': model.id
      }).save();
    });
  }

  static subjectSessionBuild() {
    let models = JSON.parse(sessionStorage.getItem('subject'));
    models.forEach((model, index) => {
      SubjectService.create({
        'name': model.name,
        'level': model.level,
        'hours': model.hours,
        'quote': model.quote,
        'books': model.books,
        'id': model.id
      }).save();
    });
  }

  static run() {
    if(!sessionStorage.getItem('student-group')) {
      BuilderData.groupBuilder();
    } else {
      BuilderData.groupSessionBuild();
    }
    if(!sessionStorage.getItem('subject')) {
      BuilderData.subjectBuilder();
    } else {
      BuilderData.subjectSessionBuild();
    }
  }
}

export default BuilderData;
