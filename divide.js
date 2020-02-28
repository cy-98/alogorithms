function divide(dividend, divisor) {
    let count = 0
    let float = ''
        while(true) {
            if(dividend < divisor) {
                break
            }
            dividend = dividend - divisor
            count ++
        }

    return count + `.${getFloat(dividend * 10, divisor)}`

    function getFloat(dividend, divisor){
        let count = 0
        while(true) {
            if(dividend < divisor) {
                float += count +''
                break
            }
            dividend = dividend - divisor
        }
        return dividend === 0 ? float : getFloat(dividend, divisor)
    }
} 
console.log(divide(7,3))