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

    setGenderAdjustment() {
      this.genderAdjustment = (this.person.gender === 'female' ? -12.00 : 0.00);
    }

    setAgeAdjustment() {
      this.ageAdjustment = Math.floor((40 - 18) / 5) * 20
    }

    setConditionAdjustment() {

    }

    getAdjustedPrice(person) {

    }


  }
}

let Policy = createPolicy()
