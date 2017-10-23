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
  policyTypes: [
    {
      id: 1,
      name: "TICKLE Life Insurance Plan",
      description: "Pays claims in the form of tacos",
      minAge: 18,
      maxAge: null,
      basePrice: 100.00,
      conditions: [1, 2, 3]
    }
  ],
  policies: [],
  people: []
}
