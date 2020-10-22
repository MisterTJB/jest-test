const myPage = require('./secret-sauce.js')

describe('The World\'s most tested heading tag', function () {

    it('has an <h1>', function () {
        const h1Element = myPage.querySelector('h1')

        expect(h1Element).toBeTruthy();
    });

    it('has exactly one <h1>', function () {
        const h1Element = myPage.querySelectorAll('h1')

        expect(h1Element.length).toEqual(1);
    });

    it('says "Testing the Jesting"', function () {
        const h1Element = myPage.querySelector('h1').textContent

        expect(h1Element).toEqual("Testing the Jesting")
    });
});

describe('Extra for experts', function () {
    
    it('has exactly a <marquee>', function () {
        const marquee = myPage.querySelector('marquee');

        expect(marquee).toBeTruthy()
    });
    
    it('the <marquee> says "Success!"', function () {
        const marquee = myPage.querySelector('marquee');

        expect(marquee.textContent).toEqual("Success!")
    });
})
