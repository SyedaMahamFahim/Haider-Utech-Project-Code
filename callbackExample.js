function greeting(name) {
    alert('Hello ' + name);
    console.log("Greeting Function Performed")
  }
  
function processUserInput(greeting) {
    var name = prompt('Please enter your name.');
    greeting(name);
  }
  
  processUserInput(greeting);