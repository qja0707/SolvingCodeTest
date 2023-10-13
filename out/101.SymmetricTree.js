class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function isSymmetric(root) {
    const leftTree = root.left;
    const rightTree = root.right;
    const leftArr = [];
    const rightArr = [];
    leftVisit(leftTree, leftArr);
    rightVisit(rightTree, rightArr);
    for (let i = 0; i < leftArr.length; i++) {
        if (leftArr[i] !== rightArr[i]) {
            return false;
        }
    }
    return true;
}
;
const leftVisit = (root, result) => {
    result.push(root.val);
    if (root.left) {
        leftVisit(root.left, result);
    }
    if (root.right) {
        if (!root.left) {
            result.push(200);
        }
        leftVisit(root.right, result);
    }
    else if (root.left) {
        result.push(200);
    }
};
const rightVisit = (root, result) => {
    result.push(root.val);
    if (root.right) {
        rightVisit(root.right, result);
    }
    if (root.left) {
        if (!root.right) {
            result.push(200);
        }
        rightVisit(root.left, result);
    }
    else if (root.right) {
        result.push(200);
    }
};
const node = [new TreeNode(0), new TreeNode(1), new TreeNode(2), new TreeNode(3), new TreeNode(4), new TreeNode(5)];
node[0].left = node[1];
node[1].left = node[5];
node[1].right = node[2];
node[0].right = node[3];
node[3].right = node[4];
const numArr = [];
rightVisit(node[0], numArr);
console.log(isSymmetric(node[0]));
//# sourceMappingURL=101.SymmetricTree.js.map