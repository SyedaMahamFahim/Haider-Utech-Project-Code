// 1. write a javascript function that reverse a number

function reverseNum(num) {
    let r = num.toString().split('').reverse().join('')
    return console.log(r)
  }
  
reverseNum(529);