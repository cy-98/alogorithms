function num(arr) {
    const map = {}
    let i = 1

    let num = 0

    while(i < arr.length) {
        let j = i -1

            for(let c = 0; c < i; c ++) {
               num += arr[c] < arr[i] ? arr[c] : 0
            }
            i ++ 
        }

    return num
}