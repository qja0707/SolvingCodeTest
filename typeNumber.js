var solution = function(digits, num){
  const numArray = num.split('')
  const digitsArray = digits.split('')

  let startIndex = 0;
  let time = 0;
  for (let i = 0; i < numArray.length; i++) {
    const newIndex = digitsArray.findIndex((e) => e == numArray[i]);
    time += Math.abs(newIndex-startIndex)
    startIndex = newIndex
  }
  return time;
}

console.log(solution("8459761203", "5439"))