// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

// #思路

function Tree(pre, vin) {

    const root = pre[0]
    const mid = vin.indexOf(root)

    const preLeft = pre.slice(1,mid+1)
    const preRight = pre.slice(mid+1)
    
    const vinLeft = vin.slice(0,mid)
    const vinRight = vin.slice(mid+1)

    this.value = root
    this.left = preLeft.length? new Tree(preLeft,vinLeft): null
    this.right = preRight.length?  new Tree(preRight,vinRight): null
} 

console.dir(
    new Tree(
        [1,2,4,7,3,5,6,8],
        [4,7,2,1,5,3,6,8]
    )
)
