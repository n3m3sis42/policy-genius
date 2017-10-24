const conditions = [
    {
      name: 'Allergies',
      costMultiplier: .01
    },
    {
      name: 'Sleep Apnea',
      costMultiplier: .06
    },
    {
      name: 'Heart Disease',
      costMultiplier: .17
    }
];

class Condition {

  static find(name) {
    return conditions.find(condition => {return condition.name === name}) || {}
  }

}

// module.exports = Condition;
