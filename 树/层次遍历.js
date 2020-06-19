var levelOrder = (root) => {
    const layers = [],
        layer = [root]
    if(!root) return layers
    let isTreeEnd = false
    while(!isTreeEnd) {               //  不断扁平化数组
        layers.push(layer.map(
            node => node.val
        ))
        biTree(layer)
    }
    return layers

    function biTree(currentLayer) {
        if(!currentLayer.length){ return }
        let cach = currentLayer.pop() // 当前函数栈保存结点
        biTree(currentLayer)          // 进入下一个函数栈
        cach.left  && currentLayer.push(cach.left)
        cach.right && currentLayer.push(cach.right)

        if(!currentLayer.length) {
            isTreeEnd = true          // 只有最上层函数栈决定是否为底
        } else {
            isTreeEnd = false
        }

    }
}



//循环解法

var levelOrder = (root) => {
    const res = []
    if(!root) return res
    const queue = [root]
    while(true) {
        let temp = [],
            length = queue.length
        for(let i = 0; i < length; i++) {
            const node =  queue.pop()
            temp.push(node.val)
            node.left  && queue.unshift(node.left)
            node.right && queue.unshift(node.right)
        }
        if(temp.length) {
            res.push(temp)
            temp = []
        }else {
            break
        }
    }
    return res
}
