const mergeList = (l1,l2) => {
    return merge(l1,l2)
    function merge(l1,l2){
        if(!l1){ return l2 }
        if(!l2){ return l1 }
        if(l1.val >= l2.val) {
            l2.next = merge(l1,l2.next)
            return l2
        }
        if(l1.val < l2.val) {
            l1.next = merge(l1.next, l2)
            return l1
        }
    }
}
