const systemUnderTest = require('./secret-sauce.js')

describe('the world\'s most tested heading tag', function () {

    it('has an <h1>', function () {
        const h1Element = systemUnderTest.querySelector('h1')

        expect(h1Element).toBeTruthy();
    });

    it('has exactly one <h1>', function () {
        const h1Element = systemUnderTest.querySelectorAll('h1')

        expect(h1Element.length).toEqual(1);
    });

    it('says "Testing the Jesting"', function () {
        const h1Element = systemUnderTest.querySelector('h1').textContent

        expect(h1Element).toEqual("Testing the Jesting")
    });
});
