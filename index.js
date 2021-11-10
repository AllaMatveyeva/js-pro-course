let stringArr = (str) => str.toLowerCase().split("");

let filt = (str) =>
  str.filter((str) => ["a", "e", "i", "o", "u", "y"].includes(str));

let set = (arr) => [...new Set(arr)];

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const getVowels = pipe(stringArr, filt, set);

const res = getVowels("AaBaaaai");

console.log(res);
