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
  return messagesDate.get(message);
}

addMessage(messages[0]);
setTimeout(() => addMessage(messages[1]), 1000);
setTimeout(() => addMessage(messages[2]), 2000);

setTimeout(() => {
  messages.splice(1, 1);
  messages.forEach((message) => console.log(getTimeOfMessage(message)));
}, 2100);
