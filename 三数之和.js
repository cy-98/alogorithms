
function sum(nums='41257145',target = 7) {

    let arr = nums.split('').map(item=>item-0)
    arr = arr.sort()
    let map ={ }
    let i = 0,
        j = i + 1,
        k = arr.length - 1

    while(true) {

        if(j === k-1){
            j = i + 1
            k--
        }

        if(k === i + 2 ) return map
        if(arr[i] + arr[j++] + arr[k] === target ) {
            map[j] = [arr[i],arr[j],arr[k]]
        }
    }
}
console.log(sum())





