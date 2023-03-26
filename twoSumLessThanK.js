var twoSumLessThanK = function(A,K){

  let max = -1

  for(let i=0;i<A.length-1;i++){
    for(let j=i+1;j<A.length;j++){
      const sum = A[i] + A[j]
      if(sum < K){
        max = Math.max(max, sum)
      }
    }
  }

  return max;
}

const test1 = [[34,23,1,24,75,33,54,8],60]
const test2 = [[10,20,30],15]
console.log(twoSumLessThanK(test2[0], test2[1]))