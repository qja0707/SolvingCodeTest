
//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


class dListNode {
    val: ListNode | null
    prev: dListNode[]
    next: dListNode | null

    constructor(val: ListNode | null, prev: dListNode[]) {
        this.val = val
        this.prev = prev
        // this.next = next
    }
}

function detectCycle(head: ListNode | null): ListNode | null {    

    if(!head){
        return null
    }

    const nodeArray = []

    let curNode:ListNode | null = head

    while(curNode){

        const found = nodeArray.find(e=>e === curNode?.next)
    
        if(found){
            return found
        }
        nodeArray.push(curNode)
        curNode = curNode.next
    }



    return null
};



const a = new ListNode(3)
const b = new ListNode(2)
const c = new ListNode(0)
const d = new ListNode(-4)
a.next = b
b.next = c
c.next = d
d.next = b

console.log(detectCycle(a).val)