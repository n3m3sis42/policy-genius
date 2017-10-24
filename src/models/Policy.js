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

    genderAdjustment() {
      return this.person.gender === 'female' ? -12 : 0;
    }

    ageAdjustment() {
      return Math.floor((this.person.age - this.type.minAge) / 5) * 20;
    }

    conditionMultiplier() {
      const { condition } = this.person;
      return Condition.find(condition).costMultiplier || 0;
    }

    calculateEstimate() {
      const { basePrice } = this.type;

      const ageAdjustment = this.ageAdjustment();
      const genderAdjustment = this.genderAdjustment();
      const conditionMultiplier =  this.conditionMultiplier();

      const adjustedBasePrice = basePrice + ageAdjustment;
      const conditionAdjustment = adjustedBasePrice * conditionMultiplier;

      this.total = adjustedBasePrice + conditionAdjustment + genderAdjustment;

      return this.total.toFixed(2);
    }

}

module.exports = Policy;
