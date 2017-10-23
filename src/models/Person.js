// NOTE assume only one health condition per person

function createPerson() {
  let id = 0;

  return class {
    constructor(name, age, gender, condition = null) {
      this.name = name;
      this.age = age;
      this.gender = gender;      
      this.condition = condition;
      this.id = ++id;
      store.people.push(this);
    }

    // render() {
    //   return `<li>${this.text}</li>`
    // }
  }

}

let Person = createPerson()
