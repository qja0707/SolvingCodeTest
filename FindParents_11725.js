function solution(input) {
    var inputArr = input.split('\n');
    inputArr.shift();
    var tree = [0];
    inputArr.forEach(function (item) {
        var nodes = item.split(' ');
        var firstNumber = +nodes[0];
        var secondNumber = +nodes[1];
        if (tree[firstNumber - 1] !== undefined) {
            tree[secondNumber - 1] = firstNumber;
        }
        else {
            tree[firstNumber - 1] = secondNumber;
        }
    });
    tree.shift();
    var result = tree.filter(function (item) { return item; });
    console.log(result.join('\n'));
}
var Tinput = "\n2\n1 3\n";
var input1 = "\n7\n1 6\n6 3\n3 5\n4 1\n2 4\n4 7\n";
var input2 = "\n12\n1 2\n1 3\n2 4\n3 5\n3 6\n4 7\n4 8\n5 9\n5 10\n6 11\n6 12\n";
solution(Tinput.trim());
