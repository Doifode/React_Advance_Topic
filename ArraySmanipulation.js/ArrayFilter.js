const d = require("./MainArrays")
let filter1 = d.DataArry.filter((item)=> !d.NumArray.find((i)=>i === item.id))
console.log(filter1);