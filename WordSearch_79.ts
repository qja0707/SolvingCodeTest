interface Input {
  board: Array<Array<string>>;
  word: string;
}

type NodeKey = string //x,y

interface CustomNode {
  // key: NodeKey
  value: string;
  adjacent: NodeKey[];
}

type Board = string[][];

const makeGraph = (board: Board): Map<NodeKey, CustomNode> => {
  const graph: Map<NodeKey, CustomNode> = new Map();

  board.forEach((row, y) => {
    row.forEach((cell, x) => {
      const newNode: CustomNode = { value: cell, adjacent: [] };

      if (0 <= x - 1 && x - 1 < row.length) {
        newNode.adjacent.push(`${x - 1},${y}`);
      }

      if (0 <= x + 1 && x + 1 < row.length) {
        newNode.adjacent.push(`${x + 1},${y}`);
      }

      if (0 <= y - 1 && y - 1 < board.length) {
        newNode.adjacent.push(`${x},${y - 1}`);
      }

      if (0 <= y + 1 && y + 1 < board.length) {
        newNode.adjacent.push(`${x},${y + 1}`);
      }

      graph.set(`${x},${y}`, newNode)
    })
  });

  return graph;
};

// const findNode = (graph: CustomNode[], key: NodeKey): CustomNode => {
//   return graph.find(node => node.key === key)
// }

const search = (graph: Map<NodeKey, CustomNode>, startStack: NodeKey[], visitedNode: NodeKey[], word: string, backTrackingIndex: number[]) => {
  //1. pop from startStack
  const searchKey = startStack.pop()

  // console.log("current key:", searchKey,)

  const compareObject = graph.get(searchKey)

  const unVisitedAdjacentNodes = compareObject.adjacent.filter(key => !visitedNode.includes(key))

  //2. compare with word
  if (compareObject.value !== word[visitedNode.length] ||
    visitedNode.includes(searchKey) || (word.length - 1 > visitedNode.length && unVisitedAdjacentNodes.length === 0)) {
    //done
    // console.log("no match")
    while (startStack.length <= backTrackingIndex[backTrackingIndex.length - 1]) {
      visitedNode.pop()
      backTrackingIndex.pop()
    }
    return;
  }

  visitedNode.push(searchKey)



  // console.log("ad:", unVisitedAdjacentNodes)

  backTrackingIndex.push(startStack.length)
  // console.log("backTrackingIndex:", backTrackingIndex)

  startStack.push(...unVisitedAdjacentNodes)
}

function exist(board: Board, word: string): boolean {
  // console.log("board:", board)
  const graph = makeGraph(board);

  for (const [key, value] of graph.entries()) {
    const startStack: NodeKey[] = [key]

    const visitedNode: NodeKey[] = [];

    const backTrackingIndex: number[] = [];

    while (startStack.length > 0 && visitedNode.length < word.length) {
      // console.log("startStack:", startStack)
      // console.log("visitedNode:", visitedNode)

      search(graph, startStack, visitedNode, word, backTrackingIndex)
    }

    // console.log("final visitedNode:", visitedNode)
    // console.log()
    // console.log()

    if (visitedNode.length === word.length) {
      return true;
    }
  }

  return false;
}

const testCases: Input[] = [
  // {
  //   board: [
  //     ['A', 'B', 'C', 'E'],
  //     ['S', 'F', 'C', 'S'],
  //     ['A', 'D', 'E', 'E'],
  //   ],
  //   word: 'ABCCED',
  // },
  // {
  //   board: [
  //     ['A', 'B', 'C', 'E'],
  //     ['S', 'F', 'C', 'S'],
  //     ['A', 'D', 'E', 'E'],
  //   ],
  //   word: 'SEE',
  // },
  // {
  //   board: [
  //     ['A', 'B', 'C', 'E'],
  //     ['S', 'F', 'C', 'S'],
  //     ['A', 'D', 'E', 'E'],
  //   ],
  //   word: 'ABCB',
  // },
  // {
  //   board: [["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]],
  //   word: "AAB",
  // },
  // {
  //   board: [["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]],
  //   word: "ABCESEEEFS"
  // },
  // {
  //   board: [["a", "a", "a", "a"], ["a", "a", "a", "a"], ["a", "a", "a", "a"]],
  //   word: "aaaaaaaaaaaaa"
  // },
  // {
  //   board: [["A", "A"], ["A", "a"], ["A", "a"], ["a", "a"], ["a", "A"]],
  //   word: "AaaaaAaAA"
  // },
  {
    board: [["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "B", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"]],
    word: "AB"
  }
];

testCases.forEach((testCase) => {
  console.log('result', exist(testCase.board, testCase.word))
})


