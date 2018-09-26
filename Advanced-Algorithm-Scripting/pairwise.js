function pairwise(arr, arg) {
  const res = [];
  if(arr.length === 0){
    return 0;
  }
  for(let i = 0; i < arr.length; i+=1){
    for(let j = 0; j < arr.length; j+=1){
      if(i !== j && arr[i] + arr[j] === arg){
         res.push(i,j);
         console.log(i, j)
         delete arr[i];
         delete arr[j];
         break;
      }
    }
  }
  return res.reduce((prev,next) => prev + next);
}


console.log(pairwise([1,1,1],2))

