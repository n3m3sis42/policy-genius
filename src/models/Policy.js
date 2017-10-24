// discounts: [
//   {
//     id: 0,
//     discountType: 'amount',
//     discountAmt: '12.00',
//     applyDiscount: (function (price, person) { return person.gender === "female" ? price - 12.00 : price })
//   }
// ],

function createPolicy() {
  let id = 0;

  return class {
    constructor(person, policyType = store.policyTypes[0]) {
      this.type = policyType;
      this.person = person;
      this.id = ++id;
      store.policies.push(this);
    }

    genderAdjustment() {
      const { gender } = this.person;
      return gender === 'female' ? -12 : 0;
    }

    ageAdjustment() {
      const { age } = this.person;
      const { minAge } = this.type;
      return Math.floor((age - minAge) / 5) * 20;
    }

    conditionAdjustment() {
      const { condition } = this.person;
      return condition.costIncrease || 0;
    }

    calculateTotalPrice(adjustments) {
      const { genderAdjustment, ageAdjustment, conditionAdjustment } = adjustments;
      const { basePrice } = this.type;
      const total = basePrice + genderAdjustment + ageAdjustment;
      return total + (total * conditionAdjustment);
    }

    calculateEstimate() {
      const { basePrice } = this.type;
      const adjustments = {
        genderAdjustment: this.genderAdjustment(),
        ageAdjustment: this.ageAdjustment(),
        conditionAdjustment: this.conditionAdjustment()
      }

      this.estimate = {
        basePrice: basePrice,
        adjustments: adjustments,
        totalPrice: this.calculateTotalPrice(adjustments)
      }

      return this.estimate;
    }

  }
}

let Policy = createPolicy()
