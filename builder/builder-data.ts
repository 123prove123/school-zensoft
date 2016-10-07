import StudentGroupService from '../services/student-group-service';
import BookService from '../services/book-service';
import ParentService from '../services/parent-service';
import PositionService from '../services/position-service';
import StudentService from '../services/student-service';
import SubjectService from '../services/subject-service';
import TeacherService from '../services/teacher-service';

import BookData from './data/book-data';
import GroupData from './data/group-data';
import ParentData from './data/parent-data';
import PositionData from './data/position-data';
import StudentData from './data/student-data';
import SubjectData from './data/subject-data';
import TeacherData from './data/teacher-data';

class BuilderData {
  static bookBuilder() {
    for (let book in BookData) {
      BookService.create(BookData[book].subject, BookData[book].name).save();
    }
  }
  static groupBuilder() {
    for(let group in GroupData) {
      StudentGroupService.create(GroupData[group].level, GroupData[group].groupNumber).save();
    }
  }
  static parentBuilder() {
    for(let parent in ParentData) {
      ParentService.create(
        ParentData[parent].name,
        ParentData[parent].contact,
        ParentData[parent].isActive,
        ParentData[parent].dateOfBirth,
        ParentData[parent].whoWork).save();
    }
  }
  static positionBuilder() {
    for(let position in PositionData) {
      PositionService.create(
        PositionData[position].name,
        PositionData[position].quote
        ).save();
    }
  }
  static studentBuilder() {
    for(let student in StudentData) {
      StudentService.create(
        StudentData[student].name,
        StudentData[student].contact,
        StudentData[student].isActive,
        StudentData[student].dateOfBirth).save();
    }
  }
  static subjectBuilder() {
    for(let subject in SubjectData) {
      SubjectService.create(
        SubjectData[subject].name,
        SubjectData[subject].level,
        SubjectData[subject].hours,
        SubjectData[subject].quote).save();
    }
  }
  static teacherBuilder() {
    for(let teacher in TeacherData) {
      TeacherService.create(
        TeacherData[teacher].name,
        TeacherData[teacher].contact,
        TeacherData[teacher].isActive,
        TeacherData[teacher].dateOfBirth).save();
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

export default BuilderData;
