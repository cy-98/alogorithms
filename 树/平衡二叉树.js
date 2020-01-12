
// 二叉树是否平衡                   平衡 每个子树的深度之差不超过1

//数组构建平衡二叉树
function balanceTree(arr){
    let length = arr.length,                //少了一个逗号 日
          mid  = Math.floor(length/2)


    if( arr.length === 0 ) return null
    if( arr.length === 1 ) {
        this.root = arr[0]
        return null
    }

    this.root = arr[mid]
    this.left  = new balanceTree(arr.slice(0,mid))
    this.right = new balanceTree(arr.slice(mid+1))

    return this
}

// console.log(new balanceTree([1,2,3,4,5,6,7,8,9]))

function balance (node) {
    //返回为-1或者0 则为平衡二叉树
    let flag = 0
    if ( !node ) { return 0 }
    if ( !node.left  && !node.right ) { return 0 }
    if ( !node.left  || !node.right ) { 
        flag = -1
    }

    return flag + Math.min(
        node.left  ? balance(node.left):0,
        node.right ? balance(node.right):0
        )
}

console.log(balance(new balanceTree([0])))
var  node = {
    root : 1,
    left : {
        root  : 2,

    }
}
console.log(balance(node))
