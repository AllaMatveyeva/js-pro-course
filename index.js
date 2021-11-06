function getVowels(string) {
  const mySet = new Set();
  const stringArr = string.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const arr = [];
  for (let str of stringArr) {
    if (vowels.includes(str)) {
      mySet.add(str);
    } else {
      continue;
    }
  }
  mySet.forEach((value) => {
    arr.push(value);
  });
  return arr;
}
const string = "AaBaaaai";
console.log(getVowels(string));

//////////////////////////////////////

function searchAnnagr(arr) {
  let arrSort = [];
  let Annagr = [];
  let arrInput = [];
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    arrSort.push(sorted);
  }

  for (let i = 0; i < arrSort.length; i++) {
    if (Annagr.length > 0) {
      arrInput.push(Annagr);
      Annagr = [];
    }
    for (let j = i; j < arrSort.length; j++) {
      if (arrSort[i] === arrSort[j]) {
        if (arr[j] !== 0) {
          Annagr.push(arr[j]);
        }
        arr[j] = 0;
      } else {
        continue;
      }
    }
  }
  console.log(arrInput);
  return arrInput;
}
let arr = ["tom", "xyz", "mot", "xel", "zXy", "yxz"];
searchAnnagr(arr);

///////////////////////////////////////

const messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

function addMessage(message) {
  let map = new Map();
  let date = new Date();
  map.set(message, date);
  let mesInd = messages.indexOf(message);
  messages[mesInd] = map;
  return messages[mesInd];
}

function getTimeOfMessage(message) {
  let dateArr = [];
  for (let mess of message.values()) {
    dateArr.push(mess);
  }
  return dateArr;
}

addMessage(messages[0]);
setTimeout(() => addMessage(messages[1]), 1000);
setTimeout(() => addMessage(messages[2]), 2000);

setTimeout(() => {
  messages.splice(1, 1);
  messages.forEach((message) => console.log(getTimeOfMessage(message)));
}, 2100);
