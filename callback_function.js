// Main Function
function  myDisplayer(someText){
console.log(someText)
}
// This technique allows a function to call another function A callback function can run after another function has finished

function myFirst() {
    myDisplayer("Hello");
  }
function mySecond() {
    myDisplayer("Goodbye");
  }
  myFirst();
  mySecond();

// A callback is a function passed as an argument to another function
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }

let result = myCalculator(5, 5);
myDisplayer(result);

