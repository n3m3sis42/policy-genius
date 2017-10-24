// NOTE assume only one health condition per person

class Person {
  constructor(name, age, gender, condition) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.condition = condition;
  }
}

module.exports = Person;
