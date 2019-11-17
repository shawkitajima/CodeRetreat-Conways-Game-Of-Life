const assert = chai.assert;

describe('checkSurroundings', function() {
    it ('should return 3 if i = 0', function() {
        assert.equal(checkSurroundings([1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 3);
    });
    it ('should return 5 if i = 1', function() {
        assert.equal(checkSurroundings([1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 5);
    });
    it ('should return 3 if i = 2', function() {
        assert.equal(checkSurroundings([1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 3);
    });
    it ('should return 5 if i = 3', function() {
        assert.equal(checkSurroundings([1, 1, 1, 1, 1, 1, 1, 1, 1], 3), 5);
    });
    it ('should return 8 if i = 4', function() {
        assert.equal(checkSurroundings([1, 1, 1, 1, 1, 1, 1, 1, 1], 4), 8);
    });
    it ('should return 5 if i = 5', function() {
        assert.equal(checkSurroundings([1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 5);
    });
    it ('should return 3 if i = 6', function() {
        assert.equal(checkSurroundings([1, 1, 1, 1, 1, 1, 1, 1, 1], 6), 3);
    });
    it ('should return 5 if i = 7', function() {
        assert.equal(checkSurroundings([1, 1, 1, 1, 1, 1, 1, 1, 1], 7), 5);
    });
    it ('should return 3 if i = 8', function() {
        assert.equal(checkSurroundings([1, 1, 1, 1, 1, 1, 1, 1, 1], 8), 3);
    });
})

// describe('generateNext', function() {
//     it ('should return return Hello', function() {
//         assert.equal(generateNext([0, 1, 1, 1, 0, 1, 0, 0, 1]), []);
//     });
// });zz