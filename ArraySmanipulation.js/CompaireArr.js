// const alice = [8, 2, 3, 4, 5, 6, 8, 4, 4, 4]
// const bob = [8, 7, 4, 5, 1, 2, 1, 2, 2, 2]
// const compaire = () => {
//     let a = 0;
//     let b = 0;
//     for (let i = 0; i < alice.length; i++) {
//         if (alice[i] > bob[i]) { a++ }
//         else if (alice[i] < bob[i]) { b++ }

//     }
//     console.log([a, b]);


// }
// compaire()





// // function hourglassSum(arr) {
// //     // Write your code here
// //     const sums = [];
// //     for (let i = 0; i < 4; i++) {
// //         for (let j = 0; j < 4; j++) {
// //             sums.push(arr[i][j] + arr[i][j+1] + arr[i][j+2]
// //             + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
// //         }
// //     }
// //     return  Math.max(...sums);
// // }


// const data = [1,2,5,4,8,7,8]
// console.log(data.reduce((a,b)=> a+b))

// var myArray = [
//     [5, 2, 3],
//     [5, 6, 7],
//     [9, 10, 11]
// ];

// const diagonal = () => {
//     let l = 0; let r = 0; let n = myArray.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) { if (i == j) { r += myArray[i][j]; } }
//         l += myArray[i][n - i - 1];
//     }
//     return Math.abs(r - l);

// }
// console.log( myArray[1][2])


// console.log(diagonal())

// const arr =[12,-2,-3,0,0]
// function plusMinus( ) {
//     let p = 0;
//     let z = 0;
//     let n = 0;
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] === 0) {
//             z++

//         } else if (arr[i] < 0) {
//             n++

//         } else if (arr[i] > 0) {
//             p++
//         }

//     }
//     console.log((p/arr.length).toFixed(6) )
//     console.log((z/arr.length).toFixed(6) )
//     console.log((n/arr.length).toFixed(6) )

// }
// console.log(plusMinus());

// const pattern = () => {
//     let row = ''
//     for (let i = 0; i <= 6; i++) {
//         row = ""
//         for (let j = 6-i; j >0 ; j--) {
//             row += " "
//         }
//         for(let k=1; k <=i; k++) {
//             row += "#"
//         }
//         console.log(row)
//     }
// }
// pattern()


// const arr = [1, 2, 3, 4, 5];
// function miniMaxSum( arr) {
//     const a= arr.sort((a,b)=> a-b).slice(0,4)
//     const b=arr.sort((a,b)=> b-a).slice(0,4)
//     console.log(a.reduce((a,b)=>a+b),b.reduce((a,b)=>a+b));

// }
// miniMaxSum(arr)


// const candles = [4, 6, 3, 3, 3, 2, 6]
// function birthdayCakeCandles() {
//     const sort = candles.sort((a, b) => b - a).slice(0, 1)
//     const same = candles.filter((i) => sort[0]==i);
//     console.log(same.length)


// }
// birthdayCakeCandles()

// function convertToMilitaryTime(normalTime) {
//      var date = new Date(normalTime);

//      var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var second = date.getSeconds()

//      var paddedHours = hours.toString().padStart(2, "0");
//     var paddedMinutes = minutes.toString().padStart(2, "0");
//     var paddedSecond = second.toString().padStart(2, "0");
//      return paddedHours + ":" + paddedMinutes+":"+paddedSecond;
// }
// console.log(convertToMilitaryTime("07:05:45PM"))



// function timeConversion(s) {
//     // Write your code here
//     let str=s.split(":")
//     let time= str[str.length-1].split("")
//     if(time[time.length-2]=='P'){
//         if(Number(str[0])===12){
//         str[0]=String(Number(str[0]))
//         return str.join(":").substring(0,s.length-2)
//         }else{
//             str[0]=String(Number(str[0])+12)
//             return str.join(":").substring(0,s.length-2)
//         }

//     }
//     if(time[time.length-2]=='A'){
//             if(Number(str[0])===12){
//                 str[0]='00'
//             }
//         return str.join(":").substring(0,s.length-2)
//     }

// }
// console.log(timeConversion('07:05:45PM'));

// function minimumBribes(queue) {
//     const n = queue.length;
//     let bribes = 0;

//     for (let i = n - 1; i >= 0; i--) {
//       const currentPerson = queue[i];
//       const originalPosition = currentPerson - 1;

//       if (originalPosition - i > 2) {
//         // If a person moved more than 2 positions forward, it indicates they bribed more than 2 people
//         console.log("Too chaotic");
//         return;
//       }

//       // Count the number of people who bribed the current person
//       for (let j = Math.max(0, originalPosition - 1); j < i; j++) {
//         if (queue[j] > currentPerson) {
//           bribes++;
//         }
//       }
//     }

//     console.log(bribes);
//   }

//   // Example usage
//   const queue = [2, 1, 5, 3, 4];
//   minimumBribes([5]); // Output: 3


// function bonetrousle(n, k, b) {
//     const minSum = (b * (b + 1)) / 2;
//     const maxSum = (k * (k + 1)) / 2;

//     if (n < minSum || n > maxSum) {
//       return -1; // Impossible to achieve the desired sum
//     }

//     const boxes = Array(b).fill(0);
//     let remainingSum = n - minSum;

//     for (let i = b - 1; i >= 0; i--) {
//       const maxPossibleValue = Math.min(k, remainingSum);
//       boxes[i] += maxPossibleValue;
//       remainingSum -= maxPossibleValue;
//       k--;
//     }

//     return boxes;
//   }

// Example usage
//   const n = 12;
//   const k = 7;
//   const b = 3;
//   const result = bonetrousle(n, k, b);
//   console.log(result); // Output: [3, 4, 5]
// const arr = [45, 87, 8, 5, 7, 4, 42, 43, 87, 38]

// const Grade = (arr) => {
//     let a =0
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]/5)
//     }
//  }
// console.log(Grade(arr))