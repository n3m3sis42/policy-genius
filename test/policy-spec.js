const expect = require('chai').expect;
const Policy = require('../src/models/Policy.js');

describe('Policy', function() {
    it('should exist', function() {
        expect(Policy).to.not.be.undefined;
    });
});

// describe('#photoObjToURL()', function() {
//     it('should take a photo object from Flickr and return a string', function() {
//         var input = {
//             id:       '24770505034',
//             owner:    '97248275@N03',
//             secret:   '31a9986429',
//             server:   '1577',
//             farm:     2,
//             title:    '20160229090898',
//             ispublic: 1,
//             isfriend: 0,
//             isfamily: 0
//         };
//         var expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
//         var actual = FlickrFetcher.photoObjToURL(input);
//         expect(actual).to.eql(expected);
//     });
// });
