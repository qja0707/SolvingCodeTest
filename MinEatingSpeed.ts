function minEatingSpeed(piles: number[], h: number): number {

  piles.sort((a, b) => b - a)

  if (h === piles.length) {
    return piles[0]
  }

  let minTime = 0
  let maxTime = piles[0]

  while (true) {
    let t = Math.floor((minTime + maxTime) / 2)

    if (t === minTime) {
      if (calEatting(piles, h, t)) {
        return minTime
      } else {
        return maxTime
      }
    }

    if (calEatting(piles, h, t)) {
      maxTime = t
    } else {
      minTime = t
    }
  }
};

const calEatting = (piles: number[], h: number, targetTime: number): boolean => {
  let trips = 0

  for (let i = 0; i < piles.length; i++) {
    if (piles[i] <= targetTime) {
      trips += piles.length - i
      break;
    }
    trips += Math.ceil(piles[i] / targetTime)
  }

  return trips <= h
}




console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))

