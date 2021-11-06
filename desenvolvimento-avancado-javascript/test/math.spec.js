const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function() {
    it('soma dois numeros', function (done) {
        const math = new Math();
        math.sum(5, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });
});