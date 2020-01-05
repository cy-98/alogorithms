
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
console.log(1)
var t = new Tree();
t.insert(3);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(11);
t.insert(33);
t.insert(22);

console.log(t);
t.preOrder(t.root);
console.log(t.getMin());
console.log(t.getDeep(t.root, 0));
// console.log(t.getNode(5,t.root));
