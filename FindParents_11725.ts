function solution(input: string) {
    const inputArr = input.split('\n');
    inputArr.shift()

    const tree = [{head:0, child:[]}]

    inputArr.forEach(item => {
        const nodes = item.split(' ')

        const firstNumber = +nodes[0]
        const secondNumber = +nodes[1]

        const head = tree.find(item=>item.head === firstNumber)
        
        if (head) {
            head.child.push(secondNumber)
        } else {
            const newHead = tree.find(item=>item.head === secondNumber)

            newHead.child.push(firstNumber)
        }
    });

    for (let i = 1; i < tree.length; i++) {
        console.log(tree[i])
    }
}

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

solution(input1.trim());