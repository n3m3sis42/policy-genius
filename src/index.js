$(document).ready(function() {
  /* scroll to estimate form when button is clicked */
  $('.js--scroll-to-form').click(function() {
    $('html, body').animate({ scrollTop: $('.js--get-estimate').offset().top }, 1000);
  });
});

const displayEstimate = (policy) => {
  const form = document.querySelector('.estimate-form');
  form.hidden = true;

  const header = document.querySelector('#estimate-header');
  const main = document.querySelector('#estimate-main');

  const { name } = policy.person;
  const { estimateTotal } = policy;

  header.innerHTML = '<h2>Your estimate is ready!</h2>';
  main.innerHTML = `<p>${name}, your estimate is $${estimateTotal}. Please refresh the page if you'd like another quote.</p>`;
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
}
