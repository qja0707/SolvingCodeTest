function isHappy(n: number): boolean {
  while (!table[n]) {
    const addedNumber = addSquareDigit(n)

    if (addedNumber === 1) {
      return true
    }
    table[n] = addedNumber
    n = addedNumber
  }

  return false
};

const table = {}

const addSquareDigit = (n: number): number => {
  const strN = n + ""

  const arrN = strN.split('')

  let result = 0

  arrN.forEach(v => {
    result += Math.pow(Number(v), 2)
  })


  return result
}

console.log(isHappy(23))
