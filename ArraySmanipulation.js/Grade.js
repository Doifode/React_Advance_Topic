function roundToNearestMultiple(value, multiple) {
    if (value >= 38) {
        if ((value % 5) > 2) {
            const roundedValue = Math.ceil(value / multiple) * multiple;
            return value >= (multiple / 2) ? roundedValue : value;
        }
        else {
            return value
        }
    } else {
        console.log('failed')
    }
}
console.log(roundToNearestMultiple(43,5))