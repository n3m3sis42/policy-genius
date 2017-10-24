# TICKLE Policy Estimator - Sarah G Evans 


## How to Use

### Running the App

* Go the the policy-genius directory and type open index.html.
* Click the Get Started button or manually scroll down to the estimate form.
* Submit the form to display your estimate.
* To calculate another estimate after submitting, just refresh the page.

### Running Tests

* Uncomment the 'require' and 'module.exports' statements in the following files:
```
Condition.js
Person.js
Policy.js
```

* Run the following commands from the root directory:
```
cd policy-genius
npm install mocha -g
npm install chai
npm test
```

Once you are finished testing, please comment the 'require' and 'module.exports' statements out again. 

This is necessary because I did not set up Babel and Webpack in the interest of saving time, and these keywords will cause errors in the browser.

##


## Rationale and Design Considerations

### Models

#### Policy:
* This model contains the code that calculates adjustments, discounts, and the estimate total.
* Each instance of this model represents a single policy estimate.
* This model could later easily be expanded to store data about a customer's active insurance contracts.
* Methods in the Policy model can easily be reused or modified to allow for more complex calculations.
* The constructor for the Policy model accepts a Person object and a policyType object as parameters.
* The policyType object holds the base price, minimum age, and other information related to the type of insurance policy.
* Using the policyType object allows for greater scalability in the future.
* Although I considered building a policyType model, I hardcoded the policyType object in the MVP for the sake of simplicity.

#### Condition: 
* At present, this model contains only a static #find method.
* The #find method searches a hardcoded object with a list of conditions and the cost increases associated with them.
* This method allows for clean and reusable code to calculate price adjustments based on health conditions.

#### Person:
* This model stores the name, age, gender, and health condition of the person requesting a policy estimate.
* As instructed, it assumes that a user has only one health condition.
* Should we decided to allow multiple health conditions later, instance methods can easily be added to handle this.

### Other data

As noted above, the MVP pulls data about policy types and health conditions from hardcoded objects. I chose to do this for the sake of simplicity, since we currently only use a single policy type and three health conditions. In the future, code can easily be added to create class instances for this data.

The format of these objects is shown below.

```
const conditions = [
    {
      name: 'Allergies',
      costMultiplier: .01
    },
    {
      name: 'Sleep Apnea',
      costMultiplier: .06
    },
    {
      name: 'Heart Disease',
      costMultiplier: .17
    }
];
```

```
const policyTypes = [
  {
    name: "TICKLE Life Insurance Plan",
    description: "Pays claims in the form of tacos",
    minAge: 18,
    maxAge: null,
    basePrice: 100.00
  }
];
```

### Additional Considerations

* User Interface:
At present, the values in the Health Condition dropdown box are hardcoded.
Were this application to be built out further, I'd pull them from the conditions object or a database.

* Validation:
For the sake of simplicity, the app validates the minimum age through HTML field checks.
In the future, I might choose to do this validation within the age adjustment code to allow for custom error messages.

* Record IDs:
I considered mocking up a database by creating my model classes inside closures to allow IDs to be created and incremented.
Had I gone this route, I'd also have created a store.js file to hold instances of my Person and Policy objects.
I decided against this option because I felt that it made the app needlessly complex.

##


## Other Notes

This is a single-page app designed according to the following instructions:

PolicyGenius wants to bring a new life insurance company, Taco Insurance Company of Kentucky and Lower Europe, into the marketplace.

TICKLE has great rates on their policies, but we're not sure if our customers will respond positively to their life insurance claims being paid in the form of tacos. Due to this consideration, we want to build a simple MVP to get TICKLE onto our platform and see if customers are interested in this new product.

You've been asked to build this pricing engine that prints out the estimated policy price for a given person. Keep in mind that this is an MVP that may fail once we launch, or could grow into a large application with very complex pricing rules. Try to strike a balance between creating an application that will be maintainable as it grows, with spending too much time building something that may end up failing.


##


## Technologies used: 

* JavaScript
* JQuery (for scrolling navigation to estimate form only)
* Mocha and Chai (for tests)
* HTML/CSS
