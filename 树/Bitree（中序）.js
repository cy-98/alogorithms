var inorderTraversal = function(root) {
    var root = root
    let res = []
    let stack = [null]

    for(let i = 0,length = root.length;i < length;i++){
        stack.push(root.shift())
    }
    const Bitree = (i,)=>{
        if(i < 1 || i > stack.length ){
            console.log(i)
            return 
        }
        Bitree(2*i,stack)
        res.push(stack[i])
        Bitree(i*2 +1,stack)
    }
    Bitree(1,stack)
    return res

};
console.log(
    inorderTraversal([1,2,3,4,5,6])
)
