import StudentGroupService from '../services/student-group-service'
import BookService from '../services/book-service';

var groupData = {
  groupA1: {level: 1, groupNumber: 'A'},
  groupA2: {level: 2, groupNumber: 'A'}
}

var bookData = {
  AlgebraTwo: {
    subject: 'Algebra Two',
    name: 'Algebra Two'
  },
  BiologyTwo: {
    subject: 'Biology Two',
    name: 'Biology Two'
  }
}

class GroupBuilder {
  static fillGroups() {
    for(let group in groupData) {
      StudentGroupService.create(groupData[group].level, groupData[group].groupNumber).save();
    }
  }
}

class BookBuilder {
		static fillBooks() {
				for (let book in bookData) {
					BookService.create(bookData[book].subject, bookData[book].name).save();
				}
		}
}

class Builder {
  static run() {
    BookBuilder.fillBooks();
    GroupBuilder.fillGroups();
  }
}

export default Builder;
