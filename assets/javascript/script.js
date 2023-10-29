// ? Task1

function ortalama(cb, ...params) {
  let sum = 0;
  let sum1 = 0;
  let i = 0;
  for (let i = 0; i < params.length; i++) {
    sum += params[i];
  }
  cb(sum1, params[i]);
  return sum1 = sum / params.length;
}
console.log(ortalama((sum1, x) => (sum1 += x), 1, 2, 3, 4));

// ? Task2


function toplamcut(cb, ...params) {
  let sum = 0;
  let i = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i]%2==0) {
        sum += params[i]; 
    }
  }
  cb(sum, params[i]);
  return sum
}
console.log(toplamcut((sum, x) =>(sum += x), 1, 2, 3, 4))

//? Task3

function toplamtek(cb, ...params) {
    let sum = 0;
    let i = 0;
    for (let i = 0; i < params.length; i++) {
      if (params[i]%2==1) {
          sum += params[i]; 
      }
    }
    cb(sum, params[i]);
    return sum
  }
  console.log(toplamtek((sum, x) =>(sum += x), 1, 2, 3, 4))

// ?Task 4
function task4(cb, ...params) {
    let sum = 0;
    let i = 0;
    let sum1=0
    let sum2=0
    for (let i = 0; i < params.length; i++) {
      if (params[i]%2==1) {
          sum1 += params[i]; 
      }
      else if(params[i]%2==0){
        sum2 += params[i]; 
      }
    }
    cb(sum, params[i]);
    return sum=sum1*sum2
  }
  console.log(task4((sum, x) =>(sum += x), 1, 2, 3, 4))
