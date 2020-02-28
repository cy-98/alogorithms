var binaryTreePaths = function(root) {
    const allPaths = []
    biTree(root,[])

    function biTree(node, arr) {
        arr.push(node.val)

        if(node.left) {
            biTree(node.left, newArr(arr))
        }
        if(node.right) {
            biTree(node.right, newArr(arr))
        }
        if(!node.left && !node.right) {

            allPaths.push(arr)
        }
    }

    function newArr (arr) {
        return arr.concat()
    }
    console.log(allPaths)
    return allPaths.join('->')
};

binaryTreePaths({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: null,
      right: { val: 7, left: null, right: null }
    }
  })