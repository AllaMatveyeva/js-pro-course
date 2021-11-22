import { sum } from "./src/calc.js";
import { User } from "./src/user/User.js";
import "./styles/styles.scss";

const bob = new User("Bob");
bob.sayhello();
console.log(sum(4)(10));
