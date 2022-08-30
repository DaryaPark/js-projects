let n = -3;
let m = -10;


let maxNumber = Math.max(n,m)
let minNumber = Math.min(n,m)
let range  = Math.abs(maxNumber - minNumber); 
let numberInRange = Math.round(Math.random() * range);


if (numberInRange % 2 === 0) {
    console.log(minNumber+1 + numberInRange);
  } else {
    console.log(minNumber + numberInRange);
  }