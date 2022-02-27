// 2.	 Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade

let students = [
    {
        id: 1,
        studentName: "John",
        rollNo: 4,
        section: "VD",
        totalNumberObtained: 400
    },
    {
        id: 2,
        studentName: "Ethan",
        rollNo: 2,
        section: "VE",
        totalNumberObtained: 500
    },
    {
        id: 3,
        studentName: "Steve",
        rollNo: 10,
        section: "VA",
        totalNumberObtained: 300
    },
]
let total = 0;
let avg=0
students.map((val) => {
    total+=val.totalNumberObtained
    avg = (total / students.length);
})



console.log("Average grade: " + (total) / students.length);