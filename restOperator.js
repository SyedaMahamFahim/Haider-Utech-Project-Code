// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
    console.log("This is my First Name",firstName); 
    console.log(otherInfo);
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
  
//   // The invocation above will return:
//   ["CodeSweetly", "Web Developer", "Male"]