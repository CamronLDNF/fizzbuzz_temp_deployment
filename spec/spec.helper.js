const fs = require('fs');
const chai = require('chai');
global.expect = chai.expect;

let   fizzbuzz = fs.readFileSync('./src/js/fizz-buzz.js')
eval( fizzbuzz + `\nexports.FizzBuzz = FizzBuzz;`)