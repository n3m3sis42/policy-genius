// Vanilla javascript code challenge from Flatiron
// https://github.com/n3m3sis42/javascript-code-challenge-web-060517/blob/master/index.html

// JS tasklister
// https://github.com/n3m3sis42/js-task-lister-project-web-060517/blob/master/index.html

// Examples
// https://github.com/davidgilbertson/know-it-all/blob/master/app/data/store.js
// https://hackernoon.com/how-i-converted-my-react-app-to-vanillajs-and-whether-or-not-it-was-a-terrible-idea-4b14b1b2faff


// NOTE do I want to use keyed objects (I can use lodash to make this easier? or arrays for my store)

// NOTE hardcode conditions and policies into store

// NOTE how to make tests
// https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/

const findCondition = (conditionName) => {
  return store.conditions.find(condition => {return condition.name === conditionName}) || {}
}

const getEstimate = (event) => {

  const name = document.querySelector('#name').value;
  const age = parseInt(document.querySelector('#age').value);
  const gender = document.querySelector('#gender').value;
  const condition =  findCondition(document.querySelector('#condition').value);

  const person = new Person(name, age, gender, condition);
  const policy = new Policy(person);

  console.log(person);
  console.log(policy);
  console.log(store);


  debugger;
  // event.preventDefault();
  // person = new Person('Josh', 40, 'male', 'Sleep Apnea');
  // policy = new Policy(person);

}

// document.getElementById('estimate-form').addEventListener('submit', getEstimate, false);
