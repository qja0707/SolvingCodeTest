namespace PerfectSquares_279 {
  const makeSquares = (n: number) => {
    const arr: number[] = []

    for (let i = 1; i * i <= n; i++) {
      arr.push(i * i)
    }

    return arr
  }

  function getOutput(n: number, cacheMap: Map<number, number>): number {
    let output = Number.MAX_VALUE

    //1.make squares
    const squareArr = makeSquares(n).reverse()

    // console.log("squareArr:", squareArr)

    while (squareArr.length > 0) {
      // console.log("==========new start")

      let target = n;
      let acc = 0;

      squareArr.forEach(value => {
        if (value > target) {
          // console.log(`value(${value}) is bigger than target(${target})`)
          return;
        }

        acc += Math.floor(target / value)

        target = target % value

        // console.log("value:", value, "acc:", acc, "target:", target)

        if (cacheMap.has(target)) {
          acc += cacheMap.get(target)

          target = 0;
        }
      })

      output = Math.min(output, acc)
      squareArr.shift();
    }

    cacheMap.set(n, output)

    return output
  };

  function numSquares(n: number): number {
    const cacheMap: Map<number, number> = new Map();

    let r = 0;

    for (let i = 1; i <= n; i++) {
      r = getOutput(i, cacheMap)
      // console.log("target:", i, "r:", r)
    }

    return r
  }


  const testCases: number[] = [43]

  testCases.forEach(tc => {
    console.log("=======END")
    console.log("result:", numSquares(tc))
    console.log("=======END")
  })
}