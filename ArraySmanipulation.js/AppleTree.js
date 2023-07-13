const apple = [2, 2, 1]
const orange = [5, -6]
const a = 3;
const b = 2
const s = 7
const t = 11
const checkAppleOrange = (s, t, a, b, apple, orange) => {
    // const appleCal = apple.map((i) => i + a)
    // const orangeCal = orange.map((i) => i + b)
    // const filteredApple = appleCal.filter((i) => i >= s && i <= t )
    // const filterOrannge = orangeCal.filter((i) => i >= s && i <= t)
    // return [filteredApple.length, filterOrannge.length].filter((i)=>i>0)[0]
    let orangecount = 0
    let appleCount = 0
    for (let i = 0; i <= orange.length; i++) {
        let orangeposition = orange[i] + b
        if (orangeposition >= s && orangeposition <= t) {
            orangecount++
        }
    }
    for (let i = 0; i <= orange.length; i++) {
        let appleposition = orange[i] + a
        if (appleposition >= s && appleposition <= t) {
            appleCount++
        }
    }
    console.log(appleCount)
    console.log(orangecount)
}
console.log(checkAppleOrange(s, t, a, b, apple, orange))



function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return "NO";
    }
    var jumps = (x2 - x1) / (v1 - v2);
    if (jumps >= 0 && Number.isInteger(jumps)) {
        return "YES";
    } else {
        return "NO";
    }
}



function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return "No"
    }
    var jumps = (x2 - x1) / (v1 - v2)
    if (jumps >= 0 && Number.isInteger(jumps)) {
        return "YES"
    } else {
        return "NO"
    }

}
