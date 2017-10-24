var expect = require('chai').expect;

describe('Policy', function() {
    it('should exist', function() {
        var Policy = require('../src/models/Policy.js');
        expect(Policy).to.not.be.undefined;
    });
});
