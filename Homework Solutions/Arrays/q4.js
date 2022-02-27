// 4.	Write a JavaScript program to remove duplicate items from an array 

const alpha = ['J', 'P', 'M', 'M', 'J'];

let unique = [...new Set(alpha)];
console.log(unique);