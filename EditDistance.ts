function minDistance(word1: string, word2: string): number {

  // word1 lenght same as word2 length

  let longWord = ''
  let shortWord = ''

  if (word1.length >= word2.length) {
    longWord = word1
    shortWord = word2
  } else {
    longWord = word2
    shortWord = word1
  }

  const longArray = longWord.split('')
  const shortArray = shortWord.split('')

  // let maxSimilar = 0
  // let diffIndexOfShortArray = shortArray.length-1
  let startIndexOfSamePatern = 0
  

  for (let i = 0; i < shortArray.length; i++) {
    let shortWordIndex = i

    for (let j = 0; j < longArray.length; j++) {
      if (!shortArray[shortWordIndex]) {
        break;
      }

      if (longArray[j] === shortArray[shortWordIndex]) {
        shortWordIndex++
      }
    }

    // if(shortWordIndex -i > maxSimilar){
    //   diffIndexOfShortArray = shortWordIndex
    // }
    // maxSimilar = Math.max(shortWordIndex - i, maxSimilar)
  }

  return longWord.length 
};

const numOfSameSpell = (word1:Array<string>, word2:Array<string>):number =>{
  const minLength = Math.min(word1.length, word2.length)

  let result = 0

  for (let i = 0; i < minLength; i++){
    if(word1[i] === word2[i]){
      result++
    }
  }

  return result
}

console.log(numOfSameSpell('horse'.split(''), 'ros'.split('')))


/*

abcdefg
bcxyz
efkli

*/