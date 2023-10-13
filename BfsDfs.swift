import Foundation
class Node1260 {
    let value: Int
    var children: [Node1260] = []
    init(value: Int) {
        self.value = value
    }
    func connect(node: Node1260){
        self.children.append(node)
    }
}
func dfs(_ dic: [Int:Node1260], _ start: Int) {
    var visited = [Node1260]()
    var result = ""
    func dfs(_ node: Node1260) {
        if visited.contains(where: { $0.value == node.value }) {
            return
        }
        visited.append(node)
        result += (result == "" ? "" : " ") + "\(node.value)"
        for child in node.children {
            dfs(child)
        }
    }
    if let startNode = dic[start] {
        dfs(startNode)
    }
    print(result)
}
func bfs(_ dic: [Int:Node1260], _ start: Int) {
    guard let startNode = dic[start] else {
        return
    }
    var queue = [Node1260]()
    queue.append(startNode)
    var pointer = 0
    while pointer < queue.count {
        let node = queue[pointer]
        pointer += 1
        for child in node.children {
            if queue.contains(where: { $0.value == child.value }) {
                continue
            }
            queue.append(child)
        }
    }
    print(queue
        .map({ String($0.value) })
        .joined(separator: " ")
    )
}
func solve(_ input: [String]) {
    let firstLine = input[0]
    let first = firstLine.split(separator: " ").map({ Int($0) })
    var dic = [Int:Node1260]()
    let start = first[2]
    for i in 0..<(first[1] ?? 0) {
        let line = input[1+i].split(separator: " ").map({ Int($0) })
        guard let first = line[0], let second = line[1] else {
            return
        }
        if dic[first] == nil {
            dic[first] = Node1260(value: first)
        }
        if dic[second] == nil {
            dic[second] = Node1260(value: second)
        }
        if let firstNode = dic[first], let secondNode = dic[second] {
            firstNode.connect(node: secondNode)
            secondNode.connect(node: firstNode)
        }
    }
    for key in dic.keys {
        guard let value = dic[key] else {
            continue
        }
        value.children.sort {
            $0.value < $1.value
        }
    }
    dfs(dic, start ?? -1)
    bfs(dic, start ?? -1)
}
var input = [readLine()!]
let first = input[0].split(separator: " ").map({ Int($0) })
for _ in 0..<first[1]! {
    let next = readLine()!
    input.append(next)
}
solve(input)