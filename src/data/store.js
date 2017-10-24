let store = {
  conditions: [
    {
      id: 1,
      name: 'Allergies',
      costIncrease: .01
    },
    {
      id: 2,
      name: 'Sleep Apnea',
      costIncrease: .06
    },
    {
      id: 3,
      name: 'Heart Disease',
      costIncrease: .17
    }
  ],
  genders: [
    {
      id: 1,
      name: "female",
      adjustment: -12.00
    },
    {
      id: 2,
      name: "male",
      adjustment: 0.00
    }
  ],
  policyTypes: [
    {
      id: 1,
      name: "TICKLE Life Insurance Plan",
      description: "Pays claims in the form of tacos",
      minAge: 18,
      maxAge: null,
      basePrice: 100.00
    }
  ],
  policies: [],
  people: []
}
