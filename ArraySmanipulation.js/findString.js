// const string = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// const findString = () => {
//     let count = 0;
//     const arr = []
//     for (let i = 0; i < string.length; i++) {
//         if (string[count] == string[i]) {
//             arr.push(string[i])
//         }

//     }
//     count++
//     return arr

// }
// console.log(findString())
// const arr = [[3, 5, 6, 7], [4, 5, 6, 4]
// ]
// const total = () => {
//     let totals = []
//     for (let i = 0; i <= arr.length; i++) {

//         for (let j = 0; j <= arr[i].length; j++) {
//             return arr[j].reduce((a, b) => a + b)


//         }
//     }

// }
// console.log(total())

// const catMouse =(catA,catB,MouseC)=>{
//     if(Math.abs(MouseC-catA) > Math.abs(MouseC-catB)){
//         return "Cat B"
//     }
//     if(Math.abs(MouseC -catB) >Math.abs(MouseC - catA) ){
//         return "Cat A"

//     }
//     if(Math.abs(MouseC- catA) === Math.abs(MouseC- catB)){
//         return "Mouse C"

//     }
// }


console.log(catMouse(1,3,2))