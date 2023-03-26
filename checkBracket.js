var isValid = function(s){
  const closing = ")]}"
  const bracketArray = s.split('')

  const bracketStack = []

  let j =-1;
  for(let i=0;i<bracketArray.length;i++){
    if (i == 0 && closing.includes(bracketArray[i])){
      return false
    }

    bracketStack.push(bracketArray[i]);
    j++

    if(closing.includes(bracketStack[j])){
      if (bracketStack[j] == ")") {
        if (bracketStack[j - 1] != "(") {
          return false;
        }
      } else if (bracketStack[j] == "}") {
        if (bracketStack[j - 1] != "{") {
          return false;
        }
      } else if (bracketStack[j] == "]") {
        if (bracketStack[j - 1] != "[") {
          return false;
        }
      }
      bracketStack.pop();
      bracketStack.pop();
      j = j-2
    }
  }

  return true
}

console.log("isValid:", isValid("((({}[])))"))