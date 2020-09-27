const flat = (arrary) => {
    while (arrary.some(i => Array.isArray(i))) {
        arrary = arrary.reduce((pre, aft) => {
            Array.isArray(aft) ? (pre = pre.concat(i)) : pre.push(i)
            return pre
        }, [])
    }
    return arrary
}

// 合并两个有序傻猪猪 ： 快慢指针
const merge = (A, B) => {
    const merged = []
    A=A.sort((a, b)=> a-b)
    A=A.sort((a, b)=> a-b)

    while (A[0] || B[0]) {
        A[0] <= B[0]
        ? merged.push(A.shift())
        : merged.push(B.shift())
    }
    if (A.length) merged.concat(A)
    if (B.length) merged.concat(B)
    return merged
}
console.log(
    merge([1, 13, 4, 5, 7], [1, 2, 4, 7, 89])
)


