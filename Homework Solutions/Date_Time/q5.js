// 5.	 Write a JavaScript function to get the amount of days of a years

function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));