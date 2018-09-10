const { FizzBuzz } = require('./spec.helper')

describe('Fizz Buzz', () => {
    let fizzBuzz = new FizzBuzz

    it('returns a number if no game rules are met', () => {
        expect(fizzBuzz.check(1)).to.eql('Hey come on, be serious, give me a better number!')
    })

    it('returns Fizz if number is divisible by 3', () => {
        expect(fizzBuzz.check(3)).to.eql('Fizz')
    })

    it('returns Buzz if number is divisible by 5', () => {
        expect(fizzBuzz.check(5)).to.eql('Buzz')
    })

    it('returns FizzBuzz if number is divisible by 15', () => {
        expect(fizzBuzz.check(15)).to.eql('FizzBuzz')
    })

    it('returns error message if not a number', () => {
        expect(fizzBuzz.check('test')).to.eql('Give me a number! I want one now!')
    })

    it('returns error message if number is less than 0', () => {
        expect(fizzBuzz.check(-1)).to.eql('Give me a number of 1 or larger! Now!')
    })

    it('returns error message if number is equal to 0', () => {
        expect(fizzBuzz.check(0)).to.eql('Give me a number! I want one now!')
    })

})

