namespace test1 {
  const arr = [[1, 2], [3, 4], [5, 6], [7, 8]]

  const r = arr.reduce((acc, cur) => {
    acc[0] += cur[0]
    acc[1] += cur[1]

    return acc
  })

  console.log("r", r)
  console.log("arr:", arr)
}