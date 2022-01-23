// 4.	Write a JavaScript function to get difference between two dates in days

var date_diff_indays = function (pDate1,pDate2) {
    let date1 = new Date(pDate1)
    let dateOneInMilliSeconds=Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
    let date2 = new Date(pDate2)
    let dateTwoInMilliSeconds=Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())

    return Math.floor((dateTwoInMilliSeconds-dateOneInMilliSeconds ) / (1000 * 60 * 60 * 24))

}
console.log(date_diff_indays('01/01/2021','02/01/2021'));


// =========================== Hint======================
// const now = new Date()

// // UTC Date String
// now.toUTCString() // "Sun, 30 May 2021 14:59:15 GMT"

// // ISO String
// now.toISOString() // "2021-05-30T14:59:15.449Z"

// // Unix timestamp
// Math.floor(now / 1000) // 1622386878
