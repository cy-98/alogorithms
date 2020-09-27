const findIndex = (nums, target) => {
    const cach = {}
    for(let index = 0; index < nums.length; index++) {

        const anotherNum = target - nums[index]
        if (String(anotherNum) in cach) return [index, cach[anotherNum]]
        else {
            const curNum = nums[index]

            !cach[curNum]
              && (cach[curNum] = index)
        }
    }
    return null
}

console.log(
    findIndex([1,3,4,6,7,], 4) // [1, 0]
)