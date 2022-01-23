var x=2
var y=5

console.log(x*y)
y=10
console.log(x*y) // x*y =20
x=4
console.log(x*y)  // x*y =40

function myFunction(p1, p2)  {
    return p1 * p2;  
    // p1 and p2 are parameters
}

// myFunction(2,5)
console.log("From Functions")
console.log(myFunction(2,5))   // p1=2 p2=5
console.log(myFunction(2,10))
console.log(myFunction(4,10))


