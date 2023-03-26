// class queue {
//   queue(n){
//     this.arr = []
//     this.length = n
//   }

//   push(n){
//     this.arr.push(n)

//     if(this.arr.length > this.length){
//       this.arr.shift()
//     }
//   }
// }

const makeChange = (limit) => {
  return Math.ceil(Math.random() * limit);
};

const makeTypeOfMoney = (limit) => {
  const typeOfMoney = [];

  let previous = 1;

  for (let i = 0; i < limit; i++) {
    previous = previous + Math.ceil(Math.random() * 10);

    typeOfMoney.push(previous);
  }

  return typeOfMoney;
};

/*
  n 까지 돌리는데
  최종 거스름돈 biggistMoney 받아서
  1. biggistMoney 이전까지는 prevWays[i]
  2. biggistMoney 는 prevWays[i] + 1
  3. 이후부터는 prevWays[i] + currentWays[i-biggistMoney]
*/

const makeWaysArr = (n, biggistMoney, prevWays) => {
  const currentWays = [];

  for (let i = 0; i < n; i++) {
    const prevNumber = prevWays[i] || 0;
    if (i < biggistMoney - 1) {
      currentWays.push(prevNumber);
    } else if (i === biggistMoney - 1) {
      currentWays.push(prevNumber + 1);
    } else {
      currentWays.push(prevNumber + currentWays[i - biggistMoney]);
    }
  }

  return currentWays;
};

const soluction = (n, money) => {
  let prevWays = [];
  // const currentWays = [];

  //1. money 오름차순 정렬
  money.sort((a, b) => a - b);

  // console.log("money:", money);

  //2.
  while (money.length > 0) {
    const biggistMoney = money.shift();

    prevWays = makeWaysArr(n, biggistMoney, prevWays);
  }

  return prevWays.pop() % 1000000007;
};

console.log(soluction(18, [2, 8, 7]));

// console.log(makeWaysArr(10, 4, []));

// const change = makeChange(10);

// console.log("change:", change);

// const typeOfMoney = makeTypeOfMoney(5);

// console.log("typeOfMoney:", typeOfMoney);
