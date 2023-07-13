const arr = [4, 73, 67, 38, 33 ]

const Grade = () => {
  
    const finalarr3 = []
    for (let i = 0; i < arr.length; i++) {
        const grade = arr[i];
        if (grade % 5 == 0 || grade % 5 < 3) {
            finalarr3.push(grade)
            
        } if (grade % 5 >= 3 && grade > 5 && grade > 35) {
             finalarr3.push(Math.round(grade / 5) * 5 )
        }
        if (grade > 5 && grade < 35) {
            finalarr3.push(grade)

        }

    }
    return finalarr3 

}
console.log(Grade())


// function gradingStudents(grades) {
//     var roundedGrades = [];
  
//     for (var i = 0; i < grades.length; i++) {
//       var grade = grades[i];
  
//       if (grade < 38 || grade % 5 === 0) {
//         // Grade is below 38 or already a multiple of 5
//         roundedGrades.push(grade);
//       } else {
//         var nextMultipleOf5 = Math.ceil(grade / 5) * 5;
//         var difference = nextMultipleOf5 - grade;
  
//         if (difference < 3) {
//           // Round grade up to the next multiple of 5
//           roundedGrades.push(nextMultipleOf5);
//         } else {
//           // Leave grade unchanged
//           roundedGrades.push(grade);
//         }
//       }
//     }
  
//     return roundedGrades;
//   }
  