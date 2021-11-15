import { Guest } from "./guest.js";
import { User } from "./user.js";
import { isAuth } from "./isAuth.js";
let user = isAuth() ? new User("Alla") : new Guest("Anonim");
console.log(user);
