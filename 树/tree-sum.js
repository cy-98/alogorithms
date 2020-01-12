
function tree_Sum (arr) {       //二叉树求和  数组只有两个item

    return ((Array.isArray(arr[0]) ? tree_Sum(arr[0]) : arr[0]) 
            + (Array.isArray(arr[1]) ? tree_Sum(arr[1]) : arr[1]))
        
}

console.log(tree_Sum([1,[1,[1,2]]]))
