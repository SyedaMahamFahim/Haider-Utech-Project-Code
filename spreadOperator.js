// Define a function with three parameters:
function myBio(firstName, lastName, company) { 
    return console.log(`${firstName} ${lastName} runs ${company}`);
  }
  
// Use spread to expand an array’s items into individual arguments:
  myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);
  
//   // The invocation above will return:
//   “Oluwatobi Sofela runs CodeSweetly”