function Tree (data,n) {

    let count = 0
    count += data

    if(count === n) return 

    this.data  = data
    this.left  = new Tree(1,n)
    this.right = new Tree(2,n)
}
function climb(n){
    let res = new Tree(1,n)
}