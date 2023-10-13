function solution(input) {
    var _a;
    const lines = input.split('\n');
    const startPoint = +((_a = lines.shift()) === null || _a === void 0 ? void 0 : _a.split(' ')[2]);
    const graph = [];
    lines.forEach(line => {
        const connection = line.split(' ');
        let index = +connection[0] - 1;
        if (!graph[index]) {
            graph[index] = [+connection[1]];
        }
        else {
            graph[index].push(+connection[1]);
        }
        index = +connection[1] - 1;
        if (!graph[index]) {
            graph[index] = [+connection[0]];
        }
        else {
            graph[index].push(+connection[0]);
        }
    });
    graph.forEach(point => {
        point.sort((a, b) => a - b);
    });
    const visitedPoint = [];
    dfs(graph, startPoint, visitedPoint);
    console.log(visitedPoint.join(' '));
    const result = bfs(graph, startPoint);
    console.log(result.join(' '));
}
const bfs = (graph, startPoint) => {
    if (!graph[startPoint - 1]) {
        return [startPoint];
    }
    const visitedPoint = [startPoint];
    const queue = [...graph[startPoint - 1]];
    while (true) {
        if (queue.length === 0) {
            break;
        }
        const newVisit = queue.shift();
        if (!visitedPoint.includes(newVisit)) {
            visitedPoint.push(newVisit);
        }
        graph[newVisit - 1].forEach(point => {
            if (visitedPoint.includes(point)) {
                return;
            }
            queue.push(point);
        });
    }
    return visitedPoint;
};
const dfs = (graph, startPoint, visitedPoint) => {
    if (!graph[startPoint - 1]) {
        visitedPoint.push(startPoint);
        return;
    }
    if (visitedPoint.includes(startPoint)) {
        return;
    }
    visitedPoint.push(startPoint);
    graph[startPoint - 1].forEach(connectedPoint => {
        dfs(graph, connectedPoint, visitedPoint);
    });
    return;
};
const input1 = `
4 5 1
1 2
1 3
1 4
2 4
3 4
`;
const input2 = `
5 5 3
5 4
5 2
1 2
3 4
3 1`;
const input3 = `
1000 1 1000
999 1000
`;
const tempInput = `
5 10 5
1 2
1 3
1 4
1 5
2 3
2 4
2 5
3 4
3 5
4 5
`;
const tempInput2 = `
1 0 1
`;
const tempInput3 = `
1000 1 1000
999 1
`;
solution(tempInput3.trim());
//# sourceMappingURL=BfsDfs.js.map