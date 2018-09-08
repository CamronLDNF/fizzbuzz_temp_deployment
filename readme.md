# **FizzBuzz Weekend Challenge (Wk 2)**
-------

## Deployed site
-------

[Rupert's FizzBuzz Site](https://rupertlion.github.io/fizzbuzz_temp_deployment/)

Pull request: https://github.com/rupertlion/fizzbuzz_rupert/pull/1

## Prerequisites
-------
Initialised npm (package manager) and utilising: superstatic (for feature-testing), mocha (for unit-testing).

## Built With
-------

* [Javascript](https://www.javascript.com/) - The programming language used
* [npm](https://www.npmjs.com/) - Package manager
* [Chai](http://www.chaijs.com/) - BDD / TDD assertion library
* [Mocha](https://mochajs.org/) - Testing framework
* [Tailwind](https://tailwindcss.com/) - CSS Styling

## **Overview**
-------
The purpose of this challenge is to create a FizzBuzz app in Javascript programming lanugage, test and style the site.

## **Specific questions**
-------

### Question 1:

#### In your README to the best of your knowledge please explain what the following lines of code do?

    let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
    eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)

#### Answer:

* The previous lines of code required 'fs'.The fs module provides an API for interacting with a file system when using node.js. This allows use of node.js as a file server, including the ability to read, write, update and delete files in local folders. (Node.js allows us to run on our machine as a standalone application rather than only in a browser).

* The following line of code allows node.js modules to read the fizz-buzz.js implementation code that resides locally on my computer. That function is subsequently stored in a variable called 'fizzBuzz': 
    ```
    let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js')
    ```

*  The eval() method reads strings as js code. In the case of the code above, `\nexports.FizzBuzz = FizzBuzz;` is appended to the implementation code in fizz-buzz.js. My assumption is that this, in effect allows the the implementation code to be exported to node modules.

-------

### Question 2:

#### In your README to the best of your knowledge please explain why we are placing the code outside the it block?

    let fizzBuzz = new FizzBuzz


#### Answer:

* We want all the tests to run on a new instance of fizzbuzz, rather than keep testing the same one with tests one after the other.

-------

### Question 3:

#### In your README to the best of your knowledge please explain the difference between using === and == in JS?

#### Answer:

* When using triple equals === in JavaScript, we are testing for strict equality. This means both the type and the value we are comparing have to be the same. e.g. 'hello world' === 'hello world' // true (Both Strings, equal values).

* When using double equals in JavaScript we are testing for loose equality. e.g. 77 == '77'
// true.

-------

### Question 4:

#### In your README to the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?

#### Answer:

* Javascript reads from left to right and top to bottom in the code. In the if statement, the code will be read until 'true' is returned and then will stop.

-------

### Question 5:

#### In your README to the best of your knowledge please explain the difference between feature and unit test?

#### Answer:

* Unit Tests are written from a developer's perspective to ensure that a particular method (or a unit) of a class performs a set of specific tasks. This can be thought of as testing the code is fulling the requirements expected by the developer.

* Feature Tests are written from the user's perspective and ensure that the system is functioning as users would expect it to. In effect the feature fest automates what 'real life user' might do when using the application to see if it would fullfill their requirements.

-------

### Question 6:

####  In your README to the best of your knowledge please explain what expectations in the context of testing are?

#### Answer:

* When creating a test, the developer sets what the result SHOULD be when the implemenation code is run with the inputs provided. Expectations link what the developer is expecting to the results of running the implementation code.

-------

### Question 7:

####  In your README to the best of your knowledge please write a line to line explanation of what is happening in this code?

#### Answer:

```
<script src="src/js/fizz-buzz.js"></script>
```
The fizz-buzz.js implementation code is being connected to the DOM to allow manipulation of the html.

```
document.addEventListener('DOMContentLoaded', () => {
```
The code within the following {} will be executed when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

```
let button = document.getElementById('button')
```
Setting the HTML element with Id 'button' to a variable 'button' for the purposes of manipulation in the DOM.

```
let displayDiv = document.getElementById('display_answer')
```
Setting the HTML element with Id 'display_answer' to a variable 'displayDiv' for the purposes of manipulation in the DOM.

```
button.addEventListener('click', () =>{
```
The code within the following {} will be executed when the 'button' object in the DOM is clicked.

```
let value = document.getElementById('value').value
```
Setting the HTML element with Id 'value' to a variable 'value' for the purposes of manipulation in the DOM (as part of the 'click' event listener).

```
let fizzBuzz = new FizzBuzz
```
Creating a new instance of the FizzBuzz javascript class and storing in a new variable called 'fizzbuzz'.

```
let result = fizzBuzz.check(value)
```
Taking the value returned by the new instance of the FizzBuzz javascript implementation and storing that result in a new variable called 'result'.

```
displayDiv.innerHTML = result;
```
Changes the variable 'displayDiv' that holds the 'display_answer' HTML element to the newly created 'result' variable that holds the result of the FizzBuzz javascript implementation.

-------

### Question 8:

#### In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?

#### Answer:

* A content delivery network (CDN) is a system of distributed servers that deliver pages and other Web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server. CDNs also provide protection from large surges in traffic.

* By way of example, if you were to use Netflix them having a suitable CDN in place, you would likely be accessing content based on servers on the West Coast of the US. This would cause huge issues of latency and bandwidth contraints that would likely reduce the quality of the viewing experience. Instead, content is "cached" in servers located geographically close to the user to allow for faster loading and lower latency.

-------
## **Author**
-------
* **Rupert Lion**