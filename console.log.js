
let a = 13.123456789;
let b = 2.123;
let precision = 5;

// округляем

let aInteger = Math.floor(
    a 
);

let bInteger = Math.floor(
    b
);

// 2) возвродим в степень
let aExponentiation = 
    a * Math.pow(10, precision);

let bExponentiation= 
    b  * Math.pow(10, precision);


//  3) округленное возводим в степень


let aNorm =
    aInteger * Math.pow(10, precision);

 
 let bNorm = 
    bInteger * Math.pow(10, precision);


//  4) вычитаем из результата №2  результат №3
let aResult= 
    aExponentiation - aNorm;
 
 let bResult=
    bExponentiation  - bNorm;


let aFinal = Math.floor(
    aResult
    );

let bFinal = Math.floor(
        bResult
    );

console.log(aFinal);
console.log(bFinal);



