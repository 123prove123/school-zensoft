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
  setContact(contact) {
    this.contact = contact;
    return this;
  }
  setActive(isActive) {
    this.isActive = isActive;
    return this;
  }
  setDate(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
    return this;
  }

}

module.exports = Person;
