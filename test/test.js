const expect = require('chai').expect;

const Person = require('../src/models/Person.js');
const Policy = require('../src/models/Policy.js');
const Condition = require('../src/models/Condition.js');

describe('models', () => {

  let josh;
  let policy1;
  let kelly;
  let policy2;
  let brad;
  let policy3;
  let cond1;
  let cond2;

  before(() => {
    josh = new Person('Josh', 40, 'male', 'Sleep Apnea');
    policy1 = new Policy(josh);
    kelly = new Person('Kelly', 50, 'female', 'Allergies');
    policy2 = new Policy(kelly);
    brad = new Person('Brad', 20, 'male', 'Heart Disease');
    policy3 = new Policy(brad);
    ash = new Person('Ash', 25, 'other', 'None');
    policy4 = new Policy(ash);

    cond1 = Condition.find('Diabetes');
    cond2 = Condition.find('Sleep Apnea');
  });

  describe('Person', () => {

    describe('Constructor', () => {
      it('creates a person with a name, age, gender and condition', () => {
        expect(josh.name).equal("Josh");
        expect(josh.age).equal(40);
        expect(josh.gender).equal('male');
        expect(josh.condition).equal('Sleep Apnea');
      })
    })

  });

  describe('Condition', () => {

    describe('#find', () => {
      it('takes in a condition name and returns an object if the condition exists', () => {
        expect(cond2.name).equal('Sleep Apnea');
        expect(cond2.costMultiplier).equal(.06);
      })
      it('returns an empty object if the condition is not found', () => {
        expect(cond1.name).equal(undefined);
        expect(cond1.costMultiplier).equal(undefined);
      })
    })

  });

  describe('Policy', () => {

    describe('Constructor', () => {
      it('creates a policy with a person attached', () => {
        expect(policy1.person).eq(josh);
      })
      it('defaults in the policy type correctly if none is passed in', () => {
        expect(policy1.type.name).equal("TICKLE Life Insurance Plan");
        expect(policy1.type.description).equal("Pays claims in the form of tacos");
        expect(policy1.type.minAge).equal(18);
        expect(policy1.type.maxAge).equal(null);
        expect(policy1.type.basePrice).equal(100.00);
      })
    })

    describe('.genderDiscount', () => {
      it('returns a discount if the person associated with a policy has a gender of female', () => {
        expect(policy2.genderDiscount()).equal(12);
      })
      it('does not return a discount if the person associated with a policy has a gender of male', () => {
        expect(policy1.genderDiscount()).equal(0);
      })
      it('does not return a discount if the person associated with a policy has a gender of other', () => {
        expect(policy4.genderDiscount()).equal(0);
      })
    })

    describe('.yearsOverMinAge', () => {
      it('returns the difference in years between the age of the person associated with a policy and minimum age associated with the policy type', () => {
        expect(policy1.yearsOverMinAge()).equal(22);
        expect(policy2.yearsOverMinAge()).equal(32);
        expect(policy3.yearsOverMinAge()).equal(2);
      })
    })

    describe('.ageDifferential', () => {
      it('returns the number of five-year blocks between the age of the person associated with the policy and the minimum age for the policy type', () => {
        expect(policy1.ageDifferential()).equal(4);
        expect(policy2.ageDifferential()).equal(6);
      })
      it('returns zero if person associated with the policy is less than five years older than the minimum age for the policy type', () => {
        expect(policy3.ageDifferential()).equal(0);
      })
    })

    describe('.ageAdjustment', () => {
      it('returns the age differential multiplied by 20', () => {
        expect(policy1.ageAdjustment()).equal(80);
        expect(policy2.ageAdjustment()).equal(120);
        expect(policy3.ageAdjustment()).equal(0);
        expect(policy4.ageAdjustment()).equal(20);
      })
    })

    describe('.conditionMultiplier', () => {
      it('returns the cost multiplier for the condition associated with the policy holder if the condition exists in the list of conditions', () => {
        expect(policy1.conditionMultiplier()).equal(.06);
        expect(policy2.conditionMultiplier()).equal(.01);
        expect(policy3.conditionMultiplier()).equal(.17);
      })
      it('returns zero for the condition associated with the policy holder if the condition does not exist in the list of conditions', () => {
        expect(policy4.conditionMultiplier()).equal(0);
      })
    })

    describe('.conditionAdjustment', () => {
      it('takes in a price and returns the product of the price and the condition multiplier for the policy', () => {
        expect(policy1.conditionAdjustment(policy1.adjustBasePriceForAge())).equal(10.799999999999999);
        expect(policy2.conditionAdjustment(policy2.adjustBasePriceForAge())).equal(2.2);
        expect(policy3.conditionAdjustment(policy3.adjustBasePriceForAge())).equal(17);
      })
      it('returns zero if the person associated with the policy does not have an applicable condition', () => {
        expect(policy4.conditionAdjustment(policy3.adjustBasePriceForAge())).equal(0);
      })
    })

    describe('.adjustBasePriceForAge', () => {
      it('returns the sum of the base price for the policy type and the calculated age adjustment', () => {
        expect(policy1.adjustBasePriceForAge()).equal(180);
        expect(policy2.adjustBasePriceForAge()).equal(220);
        expect(policy3.adjustBasePriceForAge()).equal(100);
      })
    })

    describe('.applyAdjustments', () => {
      it('returns the sum of the base price and the applicable adjustments', () => {
        expect(policy1.applyAdjustments()).equal(190.799999999999999);
        expect(policy2.applyAdjustments()).equal(222.2);
        expect(policy3.applyAdjustments()).equal(117);
        expect(policy4.applyAdjustments()).equal(120);
      })
    })

    describe('.calculateEstimate', () => {
      it('applies all adjustments and subtracts the gender discount if applicable and returns the final total as a string with two decimal places', () => {
        expect(policy1.calculateEstimate()).equal('190.80');
        expect(policy2.calculateEstimate()).equal('210.20');
        expect(policy3.calculateEstimate()).equal('117.00');
      })
    })

  });

});
