namespace 아정당 {
  let longestPath = ''

  const direction = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ]

  const findPath = (x, y, visited, grid, prevValue, acc, chance) => {
    //방문할 수 없는 칸 리턴
    if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length || visited[y][x]) {
      return;
    }

    //찬스 사용
    if (!chance && prevValue >= grid[y][x]) {
      return;
    }

    if (prevValue >= grid[y][x]) {
      chance = false;
    }

    acc += grid[y][x]

    //제일 긴 길이 갱신
    if (acc.length > longestPath.length) {
      longestPath = acc
    }

    // console.log("visited:", x, y)
    visited[y][x] = true

    direction.forEach(d => {
      findPath(x + d[0], y + d[1], visited, grid, grid[y][x], acc, chance)
    })
    // console.log("un visited:", x, y)
    visited[y][x] = false
  }

  function findLongestPath(grid) {
    const visited = []

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (visited[i] === undefined) {
          visited.push([])
        }

        visited[i][j] = false
      }
    }

    console.log("visited:", visited)

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        findPath(j, i, visited, grid, '0', '', true)
      }
    }

    return longestPath
  }

  // 테스트 케이스
  const grid = [[
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
  ],
  [
    ['g', 'h', 'i'],
    ['f', 'a', 'b'],
    ['e', 'd', 'c']
  ],
  [
    ['a', 'b', 'c', 'd', 'e'],
    ['c', 'b', 'a', 'g', 'f'],
    ['d', 'p', 'q', 'r', 's'],
    ['e', 'f', 'g', 'h', 'i']
  ]
  ];


  console.log(findLongestPath(grid[1]));
}