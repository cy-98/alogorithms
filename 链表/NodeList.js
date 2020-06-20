class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class NodeList {
    constructor() {
        this.head = new Node('head')
    }
    find(target) {
        let currentNode = this.head
        while(currentNode &&
              currentNode.element != target)
        {
            currentNode = currentNode.next
            if(currentNode.element === target) return currentNode
        }
        return null
    }
    insert(insert, item) {
        const newNode = new Node(insert)
        let current = this.find(item)
        newNode.next = currentNode.next
        newNode.next = newNode
    }
    remove(item) {
        let cur = this.head
        while( cur.next && cur.next != item) {
            cur = cur.next
            if(cur.next.element === item) { break }
        }
        cur.next = cur.next.next
    }
    display() {}
}