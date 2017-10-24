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
      const genderAdjustment = this.genderAdjustment();
      const ageAdjustment = this.ageAdjustment();
      const conditionMultiplier =  this.conditionMultiplier();

      const subtotal = basePrice + genderAdjustment + ageAdjustment;
      const conditionAdjustment = subtotal * conditionMultiplier;
      const total = subtotal + conditionAdjustment;

      return total.toFixed(2);
    }

}

module.exports = Policy;
