const _ = require("lodash");
let myAnimal = {
  kind: "cat",
  name: "Alice",
};
let arr = [];
_.each(myAnimal, function (item) {
  arr.push(item);
});
console.log(arr);
