// 5.	Write a JavaScript function to find the difference of two arrays. 

function differenceOf2Arrays (array1, array2) {
    var temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
    
    for (var i in array1) {
    if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }
    for(i in array2) {
    if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }
    return temp.sort((a,b) => a-b);
    }
    
    console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
    console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));