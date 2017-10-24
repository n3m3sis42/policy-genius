const displayEstimate = (policy) => {

}

const getEstimate = (event) => {
  event.preventDefault();
  const form = document.querySelector('.estimate-form');

  const name = document.querySelector('#name').value;
  const age = parseInt(document.querySelector('#age').value);
  const gender = document.querySelector('#gender').value;
  const condition = document.querySelector('#condition').value;

  const person = new Person(name, age, gender, condition);
  const policy = new Policy(person);
  const estimate = policy.calculateEstimate();

  form.reset();
  displayEstimate(policy);
  // NOTE watch HTML/CSS tutorial to see how to submit form and redraw the page 

  console.log(person);
  console.log(policy);
  console.log(estimate);


  debugger;
}

// document.getElementById('estimate-form').addEventListener('submit', getEstimate, false);
