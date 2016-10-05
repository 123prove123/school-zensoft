import StudentGroupService from '../services/student-group-service';

class EventBuilder {
  static studentGroupEvent(){
    const openButton = document.getElementById('StudentGroupOpen');
    const closeButton = document.getElementById('StudentGroupClose');
    const form = document.getElementById('StudentGroupForm');
    const addButton = document.getElementById('addStudentGroup');


    openButton.addEventListener('click', function(){
      form.style.display = 'block';
    });
    closeButton.addEventListener('click', function(){
      form.style.display = 'none';
    });

    addButton.addEventListener('click', function() {
      const inputLevel = document.getElementById('GroupLevelInput').value;
      const inputGroupNumber = document.getElementById('GroupNumberInput').value;
      let table = document.getElementById('StudentGroups');
      let tr = document.createElement('tr');
      let tdLevel = document.createElement('td');
      let tdGroupNumber = document.createElement('td');
      tdLevel.textContent = inputLevel;
      tdGroupNumber.textContent = inputGroupNumber;
      tr.appendChild(tdLevel);
      tr.appendChild(tdGroupNumber);
      table.querySelector('tbody').appendChild(tr);

      form.style.display = 'none';
    });
  }

  static run() {
    EventBuilder.studentGroupEvent();
  }
}

export default EventBuilder;
