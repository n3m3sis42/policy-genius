TO RUN THE APP:

Go the the policy-genius directory and type open index.html to start the app.
Fill in the form prompts and click the See Your Estimate! button to display your quote.

TO RUN TESTS:

Uncomment the 'require' and 'module.exports' statements in the following files:
Condition.js
Person.js
Policy.js

Run the following commands in the policy-genius directory:
npm install mocha -g
npm install chai
npm test

Once you are finished testing, please comment the 'require' and 'module.exports' statements out again. This is necessary because I did not set up Babel and Webpack in the interest of saving time, and these keywords will cause errors in the browser.

DESIGN DECISIONS:

Since we'd likely handle more than one type of policy for this insurance vendor, I built in the ability to pull base price and minimum age (along with name, description and maximum age for the policy type, even though these aren't in use by the current version of the app) from the policy type. Since there's currently only one policy type, I hardcoded it in the data store rather than creating a PolicyType model. This could be built out in the future.

Similarly, I chose to hard code gender and conditions as objects in the store and write find methods for them in index.js rather than building out models for them. I made this decision because the use cases for gender and condition were fairly simple in this version of the app, and would likely change in future iterations. Additionally, if we built out the app later, it would more than likely use a database and one or more frameworks, which might change how we stored and searched for these values.

While I considered adding logic to check whether a person has already submitted a quote request, this seemed unnecessary since the estimates are not currently stored in a database.

In the interest of time, I made the instance methods for the various adjustments on the Policy class less generic/flexible than I would have preferred. It would be easier to make them more flexible if I knew more about what types of adjustments might be likely to exist for other types of policies.

If I were to build out this app further, I'd like the select box for conditions on the form to populate its values dynamically based on the conditions in the store (I hardcoded them in order to finish the app more quickly).

I chose to validate the minimum age through the form as opposed to checking it on the back end, but I could have also added validation on my age adjustment methods.

Considered using closures to simulate the generation of a unique ID for each instance of the policy and person models created, and storing them in a store.js file as a way of mocking up a database. However, this seemed more complicated than was necessary for the scope of this app. If we were to build it out further, we'd more than likely use a database and back end framework.
