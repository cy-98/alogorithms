
//判断是否为对称树
function sysTree (root) {

    let node1 = root.left,
        node2 = root.right
    
    if ( !node1 && !node2 ) return true
    if ( !node1 || !node2 ) return false
    if ( node1.data !== node2.data ) return false

    return sysNode(node1, node2)

    function sysNode ( node1, node2 ) {
        
        if ( !node1 && !node2 ) return true
        if ( !node1 || !node2 ) return false
        if ( node1.data !== node2.data ) return false
        
        return sysNode ( node1.left, node2.right ) && sysNode( node1.right, node2.left )
    }
}

//搜索树的第k小的结点
function searchTree (root) {
    this.data = root
    this.left = ''
    this.right= ''
}

searchTree.prototype = {

    insert (num) {
        let node = new searchTree(num)
        let current = this
        let parent = null

        while (true) {

            if (num < current.data) {

                parent = current
                current = current.left
                if(!current) {
                    parent.left = node
                    return
                }

            } else

            if (num > current.data ) {
                parent = current
                current = current.right
                if(!current) {
                    parent.right = node
                    return
                }
            }
        }
    },

    search (K) {                          //搜索树的中序遍历就是排好序的序列  返回第k大的数
        let stack = []

        function biTree (node) {
            biTree (node.left)
            stack.push(node.data)
            biTree(ndoe.right)
        }

        return stack [k]
    },
    
    getDeep (node) {
        if ( !node ) { return 0 }

        return Math.max( this.getDeep(node.left), this.getDeep(node.right) ) +1
    },
}
let tree = new searchTree(9)
tree.insert(4)
tree.insert(3)
tree.insert(7)
tree.insert(11)
tree.insert(13)
tree.insert(18)
console.log(
    tree.getDeep(tree)

)