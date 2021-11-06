const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

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

    it.only('chamando res com soma e valor do index', function() {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called');
            }
        };
        sinon.spy(res, 'load');
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0][0]).to.equal('index');
    });
});