class Person {
  constructor(name,contact,isActive,dateOfBirth) {
    this.setName(name);
    this.setContact(contact);
    this.setActive(isActive);
    this.setDate(dateOfBirth);
  }
  setName(name) {
    this.name = name;
    return this;
  }
  getName() {
    return this.name;
  }
  setContact(contact) {
    this.contact = contact;
    return this;
  }
  getContact(){
    return this.contact;
  }
  setActive(isActive) {
    this.isActive = isActive;
    return this;
  }
  getIsActive() {
    return this.isActive;
  }
  setDate(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
    return this;
  }
  getDate(){
    return this.date;
  }

}

module.exports = Person;
