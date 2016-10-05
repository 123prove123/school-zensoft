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

import TeacherRole from '../models/teacher-role';

import BuilderData from './builder-data';

BuilderData.run();

const teacherJohnSmith = TeacherService.getStore().findById(1);
const teacherPavelVolya = TeacherService.getStore().findById(2);

const parentOne = ParentService.getStore().findById(1);

const positionTeacher = PositionService.getStore().findById(1);

teacherJohnSmith.setPosition(positionTeacher);
teacherPavelVolya.setPosition(positionTeacher);



const subjectAlgebraTwo = SubjectService.getStore().findById(1);
const subjectClassMaster = SubjectService.getStore().findById(2);

const teacherRoleAlgebraTwo = new TeacherRole(
  subjectAlgebraTwo,
  teacherPavelVolya
).save();

const teacherRoleClassMaster = new TeacherRole(
  subjectClassMaster,
  teacherJohnSmith
).save();

const A1 = StudentGroupService.getStore().findById(1);
const A2 = StudentGroupService.getStore().findById(2);

const vasyaPupkin = StudentService.getStore().findById(1);

vasyaPupkin.setStudentGroup(A2);
vasyaPupkin.addParent(parentOne);

A2.addTeacherRole(teacherRoleAlgebraTwo);
A2.addTeacherRole(teacherRoleClassMaster);
A2.addStudent(vasyaPupkin).save();

teacherPavelVolya.addStudentGroup(A2).addSubject(subjectAlgebraTwo).save()

class Builder {
  static run() {
  }
}

export default Builder;
