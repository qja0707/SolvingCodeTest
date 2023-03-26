const makeRandString = () => {
  let result = "";

  const length = Math.floor(Math.random() * 2500);

  const characters = "abcdefghijklmnopqrstuvwxyz";

  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const isSameFirstEnd = (str, startIndex, endIndex) => {
  if (startIndex >= endIndex) {
    return { startIndex, endIndex };
  }

  if (str.charAt(startIndex) === str.charAt(endIndex)) {
    return isSameFirstEnd(str, startIndex + 1, endIndex - 1);
  }

  return;
};

const findPelindrome = (str) => {
  let longestLength = 1;

  for (let initialIndex = 0; initialIndex < str.length; initialIndex++) {
    // console.log("str length:", str.length)
    if (str.length - initialIndex <= longestLength) {
      return longestLength;
    }

    let findingResult = undefined;

    for (let endIndex = str.length - 1; endIndex > 0; endIndex--) {
      // console.log("findingResult:", findingResult);
      if (findingResult) {
        break;
      }

      // console.log("start:", initialIndex, "end", endIndex);

      findingResult = isSameFirstEnd(str, initialIndex, endIndex);
    }

    if (!findingResult) {
      continue
    }

    let inLoopLong = 0
    
    if (findingResult.startIndex === findingResult.endIndex) {
      longestLength = Math.max((findingResult.startIndex - initialIndex) * 2 + 1, longestLength);
    } else {
      longestLength = Math.max((findingResult.startIndex - initialIndex) * 2, longestLength);
    }
  }
};

//TEST

const rendomStr = makeRandString();

const testStr =
  "aaaaaaaaabbbbbbbbbb";

console.log("rendomStr:", testStr);

const longestLength = findPelindrome(testStr);

console.log("longest length:", longestLength);
