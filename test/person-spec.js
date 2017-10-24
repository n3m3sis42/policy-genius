const expect = require('chai').expect;
const Person = require('../src/models/Person.js');
const Condition = require('../src/models/Condition.js');

describe('Person', function() {

    let josh;

    before(() => {
     josh = new Person("Josh", 40, 'male', 'Sleep Apnea');
    })


    it('should exist', function() {
        expect(Person).to.not.be.undefined;
    });
});

// const expect = require('chai').expect;
// const person = require('../src/models/Person.js');
// const Person = person.createPerson();
//
// describe('Person', function() {
//
//   let josh;
//   let male = {
//     id: 2,
//     name: "male",
//     adjustment: 0.00
//   };
//   let sleepApnea = {
//     id: 2,
//     name: 'Sleep Apnea',
//     costIncrease: .06
//   }
//
//   before(() => {
//    josh = new Person("Josh", 40, male, sleepApnea);
//   })
//
//   describe('Person Constructor', function() {
//     it('can create a person with a name, age, gender and condition', function() {
//       expect(josh).toBeA(Person);
//       expect(josh.name).toEqual("Josh");
//       expect(josh.age).toEqual(40);
//       expect(josh.gender).toEq(male);
//       expect(josh.condition).toEq(sleepApnea);
//     })
//   })
//
// });

// var Policy = require('../src/models/Policy.js');
//
// describe('Policy', function() {
//
//   describe('#constructor')
//
//     it('should exist', function() {
//         const constructor = require('../src/models/Policy.js');
//         expect(Policy).to.not.be.undefined;
//     });
// });
//
// let lyndonJohnson
// before(() => {
//   lyndonJohnson = new President("Lyndon B Johnson", "Democrat", "1963-1969", "Texas")
// })
