function Array2Tree(arr) {

    return new Tree(0)
    function Tree(i) {
        let j = 2*(i+1) - 1
        let k = 2*(i+1)

        this.value = arr[i]
        this.left = arr[j] ? new Tree(j) : null
        this.right = arr[k] ? new Tree(k) : null
    }
}
console.log(Array2Tree([1,2,3,4,5,7]))