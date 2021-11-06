const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function() {
    //hooks
    beforeEach(function() {
        value = 0;
    });

    it('Somar dois numeros', function(done) {
        const math = new Math();
        this.timeout(3000);

        value = 5
        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multiplicar dois numeros', function() {
        const math = new Math();
        expect(math.multiply(value, 5)).to.equal(0);
        // assert.equal(math.multiply(value, 5), 0);
    });
});