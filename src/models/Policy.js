// const Condition = require('./Condition.js');

const policyTypes = [
  {
    name: "TICKLE Life Insurance Plan",
    description: "Pays claims in the form of tacos",
    minAge: 18,
    maxAge: null,
    basePrice: 100.00
  }
];

class Policy {
    constructor(person, policyType = policyTypes[0]) {
      this.type = policyType;
      this.person = person;
    }

    genderDiscount() {
      return this.person.gender === 'female' ? 12 : 0;
    }

    yearsOverMinAge() {
      return this.person.age - this.type.minAge;
    }

    ageDifferential() {
      return Math.floor(this.yearsOverMinAge() / 5);
    }

    ageAdjustment() {
      return this.ageDifferential() * 20;
    }

    conditionMultiplier() {
      const { condition } = this.person;
      return Condition.find(condition).costMultiplier || 0;
    }

    conditionAdjustment(price) {
      return price * this.conditionMultiplier();
    }

    adjustBasePriceForAge() {
      return this.type.basePrice + this.ageAdjustment();
    }

    applyAdjustments() {
      const ageAdjustedBasePrice = this.adjustBasePriceForAge();

      return ageAdjustedBasePrice + this.conditionAdjustment(ageAdjustedBasePrice)
    }

    calculateEstimate() {
      this.adjustedBasePrice = this.applyAdjustments();
      this.estimateTotal = (this.adjustedBasePrice - this.genderDiscount()).toFixed(2);

      return this.estimateTotal;
    }

}

// module.exports = Policy;
