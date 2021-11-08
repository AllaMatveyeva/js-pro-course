function getVowels(string) {
  const mySet = new Set();
  const stringArr = string.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u", "y"];

  for (let str of stringArr) {
    if (vowels.includes(str)) {
      mySet.add(str);
    }
  }
  return [...mySet];
}
const string = "AaBaaaai";
console.log(getVowels(string));

//////////////////////////////////////

function searchAnnagr(arr) {
  let obj = {};
  let input = [];

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    if (sorted in obj) {
      obj[sorted].push(word);
    } else {
      obj[sorted] = [word];
    }
  }
  for (let annagr in obj) {
    input.push(obj[annagr]);
  }
  console.log(input);
  return input;
}
let arr = ["tom", "xyz", "mot", "xel", "zXy", "yxz"];
searchAnnagr(arr);
///////////////////////////////////////

const messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let messagesDate = new Map();

function addMessage(message) {
  let date = new Date();
  messagesDate.set(message, date);
  return messagesDate;
}

function getTimeOfMessage(message) {
  for (let message of messagesDate.keys()) {
    if (!messages.includes(message)) {
      messagesDate.delete(message);
    }
  }

  return messagesDate.get(message);
}

addMessage(messages[0]);
setTimeout(() => addMessage(messages[1]), 1000);
setTimeout(() => addMessage(messages[2]), 2000);

setTimeout(() => {
  messages.splice(1, 1);
  messages.forEach((message) => console.log(getTimeOfMessage(message)));
}, 2100);
setTimeout(() => console.log(messagesDate), 3000);
