Design Decisions:

Since we'd likely handle more than one policy for this company, I built in the ability to pull the policy and its base price from the data store.

Discount should have its own model or be part of the Policy model? I think part of the Policy model for now, but would like to break it out later (not sure how without knowing more about what other types of policies/discounts are available)

Discount type is 'amount' but could add code later to handle 'percentage' or other discount types
Hm or can I store/pass a function as the "rule" for the discount
OR SHOULD I JUST MAKE A FKN MODEL SIGHHH OR WHAT ABOUT IIFEs (what are these even)

Conditions are part of the createPolicy closure so we could easily write methods to add and remove conditions for a policy later (and a conditions model)

Mocked up conditions and policyTypes in store -- could build these out into models to expand the app

*** OR DO I WANT A SELECTOR THAT ALLOWS US TO GRAB THE POLICY TYPE, SIGH ***

HOW TO ROUND TOTAL PRICE TO TWO DECIMAL PLACES
policy.estimate.totalPrice.toFixed(2)

check min age in browser and don't allow user to submit the form if they are under that age (don't do check for max age but could add a check in the future)

Didn't add logic to check if user has already received a quote by design - not sure if we'd want to throw an error or not and we're not currently persisting the quotes anyway. Would probably need to add this later.

I thought about passing a function for each discount to apply instead of using hard coded methods in the Policy model, but

Considered storing conditions on policy type or in a separate model. Also considered not saving them to the instance -- explain why I did it this way? Hm maybe actually store only the IDs and put them in the policy type and then look them up? More like a db this way? Idk

Ideally, select box for conditions wouldn't have hardcoded values, but I did this in the interest of time and the ability to provide a somewhat styled user interface
