// 3.	Write a JavaScript function to get the month name from a particular date
function monthName(specificDate){
   allMonths=[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

   return allMonths[specificDate.getMonth()]
} 

let date=new Date()
console.log(monthName(date));