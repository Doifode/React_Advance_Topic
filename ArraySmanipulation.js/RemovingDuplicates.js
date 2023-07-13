// const Array1=[5,6,5,6,4,6,9,8,4,5,1,3,5,7,8,4,6,52,2,3,3,6];
// // const dublicate = new Set(Array1)
// const a = Array1.filter((i,d)=> { return Array1.indexOf(i) !== d })


// console.log(a)

// const fineNumber = () => {
//     const arr = [1, 23, 5, 4, 7, 8, 9, 6, 5, 4, 5]
//     const a = arr.includes(23)
//     console.log(a)
// }
// fineNumber()

const collectOdd = () => {
    const odd = [];
    const even = []
    for (let i = 2; i < 5; i++) {
        if (i % 2 == 0) {
            even.push(i)
        }
        if (i % 2 != 0) {
            odd.push(i)
        }
    }
    console.log(even, odd)
}
console.log(collectOdd())