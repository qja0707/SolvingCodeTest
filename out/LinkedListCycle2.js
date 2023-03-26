//Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
class dListNode {
    constructor(val, prev) {
        this.val = val;
        this.prev = prev;
        // this.next = next
    }
}
function detectCycle(head) {
    if (!head) {
        return null;
    }
    const nodeArray = [];
    let curNode = head;
    while (curNode) {
        const found = nodeArray.find(e => e === (curNode === null || curNode === void 0 ? void 0 : curNode.next));
        if (found) {
            return found;
        }
        nodeArray.push(curNode);
        curNode = curNode.next;
    }
    return null;
}
;
const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);
a.next = b;
b.next = c;
c.next = d;
d.next = b;
console.log(detectCycle(a).val);
//# sourceMappingURL=LinkedListCycle2.js.map