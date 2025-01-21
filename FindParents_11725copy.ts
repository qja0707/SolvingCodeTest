function solution(input: string) {
    const inputArr = input.split('\n');

    const tree = [0];

    makeTree(inputArr, tree)

    tree.shift()
    console.log("tree:", tree)
    const result = tree.filter(item => item)

    console.log(result.join('\n'))
}

const makeTree = (inputArr: string[], tree: number[]) => {
    const leftOverNodes: string[] = []

    inputArr.forEach(item => {

        const nodes = item.split(' ')

        const firstNumber = +nodes[0]
        const secondNumber = +nodes[1]

        if (tree[firstNumber - 1] !== undefined) {
            tree[secondNumber - 1] = firstNumber
        } else if (tree[secondNumber - 1] !== undefined) {
            tree[firstNumber - 1] = secondNumber
        } else {
            leftOverNodes.push(item)
        }
    });

    if (leftOverNodes.length !== 0) {
        makeTree(leftOverNodes, tree)
    }

}

const Tinput = `
3
1 4
5 4
`

const Tinput2 = `
7
1 5
1 3
1 4
2 4
6 4
7 4
`

const Tinput3 = `
8
1 4
3 1
2 1
5 3
8 2
7 2
2 6`

const input1 = `
7
1 6
6 3
3 5
4 1
2 4
4 7
`
const input2 = `
12
1 2
1 3
2 4
3 5
3 6
4 7
4 8
5 9
5 10
6 11
6 12
`

solution(Tinput3.trim());