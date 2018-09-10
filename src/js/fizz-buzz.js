function FizzBuzz()  {
    this.check = (number) => {
        if (!number) {
            return 'Give me a number! I want one now!';
        } else if 
        (number === 0) {
            return 'Give me a number of 1 or larger! Now!';
        } else if (number < 0) {
            return 'Give me a number of 1 or larger! Now!';
        } else if (number % 15 === 0) {
            return 'FizzBuzz';
        } else if (number % 5 === 0) {
            return 'Buzz';
        } else if (number % 3 === 0) {
            return 'Fizz';
        } else if (isNaN(number)) {
            return 'Give me a number! I want one now!';
        } else {
            return 'Hey come on, be serious, give me a better number!'
        }
    }
}