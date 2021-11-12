let lowerCase = (str) => str.toLowerCase();
let split = (str) => str.split("");
let isVowels = (str) => ["a", "e", "i", "o", "u", "y"].includes(str);

let filt = (str) => str.filter((str) => isVowels(str));

let set = (arr) => [...new Set(arr)];

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const getVowels = pipe(lowerCase, split, filt, set);

const res = getVowels("AaBaaaai");

console.log(res);

/////////////////////////////////////////////////////

function getFibonacciFactory() {
  let cache = new Map();
  cache.set(1, 0n).set(2, 1n).set(3, 1n);
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let a = cache.get(cache.size - 2);
    let b = cache.get(cache.size - 1);
    for (let i = cache.size; i <= x; i++) {
      let c = a + b;
      a = b;
      b = c;
      cache.set(i, c);
    }
    return b;
  };
}
let fibonacci = getFibonacciFactory();
console.log(fibonacci(9000));

//////////////////////////////////////////////////////////

function sum(a) {
  let currentSum = a;
  return function f(b) {
    if (b) {
      currentSum += b;
      return f;
    } else {
      return currentSum;
    }
  };
}
console.log(sum(1)(2)(4)(5)());

//////////////////////////////////////////////////////////

function mul(a) {
  let currentMul = a;
  return function f(b) {
    if (b) {
      currentMul *= b;
      return f;
    } else {
      return currentMul;
    }
  };
}
console.log(mul(1)(2)(4)(5)());
