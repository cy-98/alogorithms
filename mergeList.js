// 不开辟新的空间

// 原地插入

var mergeTwoLists = function (l1, l2) {
    if(!l1 && !l2) return l1
    if(!l1 && l2) return l2
    if(!l2 && l1) return l1
    let head

    if(l1.val > l2.val) {
        handle(l2, l1)
    }else if(l1.val <= l2.val) {
        handle(l1, l2)
    }
    return head   // 返回头结点

    function handle(lit, big){
        !head && (head = lit)
        let temp = lit.next
        if(!temp) {       // 小链表到头，链接另一链表=>结束
            lit.next = big
            return
        } else
        if(temp.val <= big.val) {   // 判断小链表的下一位和大链表的比较
            return handle(temp,big)
        } else
        if(temp.val > big.val) {    // 如果小链表的下一结点更大， 插入一个大连表的小节点， 大链表进一位，小链表结点不变
            const next = {}
            next.val = big.val
            next.next = temp

            lit.next = next
            big = big.next
            if(!big) return
            return handle(lit.next, big)
        }
    }
};