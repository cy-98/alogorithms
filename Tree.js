
/**
 * 
 * Node
 * @param {any} data 
 * @param {any} left 
 * @param {any} right 
 */

function Node( data, left, right) {
    
    this.data  = data
    this.left  = left
    this.right = right

}

Node.prototype={
    show : function() { console.log(this.data) }
}


/**
 * 
 * 
 * @param {any} root 
 */

function Tree() {

    this.root = null

} 

Tree.prototype = {

    /**
     * 插入结点
     * @param {number} data 
     */

    insert : function(data) {           

        const node = new Node(data,null,null)
        if( !this.root ) { 
            this.root = node 
            return 
        }

        let current = this.root
        let parent  = null
        while( current ) {
            if( node.data > current.data ) {
                parent = current
                current = current.right
                if(!current){
                    parent.right = node
                    return
                }
            }else
            if( node.data < current.data ) {
                parent = current
                current = current.left
                if(!current){
                    parent.left = node
                    return
                }
            }
        }
    },

    /**
     * 先序遍历
     * @param {node} node
     */
    preOrder:function(node = this.root) {
        if(!node) return
        console.log(node.data)
        this.preOrder(node.left)
        this.preOrder(node.right)
    },

    /**
     * 最小值  最左叶结点
     */
    getMin:function() {
        let current = this.root
        while(true) {

            if( current.left ) {
                current = current.left
            }else{
                return current.data
            }
        }
    },

    /**
     * 求树的深度
     * 传入根节点
     */

    getDeep:function(node,deep) {
        deep = deep || 0
        if( !node ) { return deep }
    
        deep ++
        let leftDeep  = this.getDeep( node.left , deep )
        let rightDeep = this.getDeep( node.right, deep )

        return Math.max(leftDeep,rightDeep)
    }

}



//重建二叉树

// const pre = [1,2,4,7,3,5,6,8]
// const mid = [4,7,2,1,5,3,8,6]

// /**
//  * 得到根节点和两子树 递归
//  * @param {array} pre 
//  * @param {array} mid 
//  */

//  function binaryTree (pre,mid){
//     let root = pre[0]
//     let mid_left = mid.slice(0,mid.indexOf(root))
//     let mid_right = mid.slice(mid.indexOf(root)+1)

//     let pre_left = pre.slice(1,mid_left.length)
//     let pre_right = pre.slice(mid_left.length +1,mid_right.length)

//     this.left = pre_left && mid_left ?  new binaryTree(pre_left,mid_left) : null
//     this.right = pre_right && mid_right ? new binaryTree(pre_right,mid_right) :null
//  }
