function solution(input) {
    var inputArr = input.split('\n');
    var tree = [0];
    makeTree(inputArr, tree);
    tree.shift();
    console.log("tree:", tree);
    var result = tree.filter(function (item) { return item; });
    console.log(result.join('\n'));
}
var makeTree = function (inputArr, tree) {
    var leftOverNodes = [];
    inputArr.forEach(function (item) {
        var nodes = item.split(' ');
        var firstNumber = +nodes[0];
        var secondNumber = +nodes[1];
        if (tree[firstNumber - 1] !== undefined) {
            tree[secondNumber - 1] = firstNumber;
        }
        else if (tree[secondNumber - 1] !== undefined) {
            tree[firstNumber - 1] = secondNumber;
        }
        else {
            leftOverNodes.push(item);
        }
    });
    if (leftOverNodes.length !== 0) {
        makeTree(leftOverNodes, tree);
    }
};
var Tinput = "\n3\n1 4\n5 4\n";
var Tinput2 = "\n7\n1 5\n1 3\n1 4\n2 4\n6 4\n7 4\n";
var Tinput3 = "\n8\n1 4\n3 1\n2 1\n5 3\n8 2\n7 2\n2 6";
var input1 = "\n7\n1 6\n6 3\n3 5\n4 1\n2 4\n4 7\n";
var input2 = "\n12\n1 2\n1 3\n2 4\n3 5\n3 6\n4 7\n4 8\n5 9\n5 10\n6 11\n6 12\n";
solution(Tinput3.trim());
