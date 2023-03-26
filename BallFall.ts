function findBall(grid: number[][]): number[] {
  const result = []

  for (let i = 0; i < grid[0].length; i++) {
    let finalX = i

    let j = 0

    for (j = 0; j < grid.length; j++) {
      const xIndex = finalX + grid[j][finalX]

      if (xIndex < 0 || xIndex >= grid[0].length) {
        result.push(-1)
        break;
      }

      const target = grid[j][xIndex]

      if (target * grid[j][finalX] === -1) {
        result.push(-1)
        break;
      }
      
      finalX = xIndex
    }

    if (j === grid.length) {
      result.push(finalX)
    }
  }

  return result
};

const grid = [[1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1], [1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1]]

console.log(findBall(grid))