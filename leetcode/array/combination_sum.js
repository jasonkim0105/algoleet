var combinationSum = function(candidates, target) {

  let output = [];
  let ind = 0;
  subs=[]
  let n = candidates.length;

  let inner = (candidates,ind,output,target)=>{
      if(target<0){
          return;
      }
      if(target===0){
          subs.push(output);
          return;
      }
      for(let i=ind;i<n;i++){
          output.push(candidates[i]);
          inner(candidates,i,[...output],target-candidates[i]);
          output.pop()
      }
  }
  inner(candidates,ind,output,target);
  return subs;
};