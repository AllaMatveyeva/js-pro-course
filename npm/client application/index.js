import Guest from "./guest.js";
import User from "./user.js";
import isAuth from "./isAuth.js";

const user = isAuth() ? new User("Alla") : new Guest("Anonim");
/*eslint-disable*/
console.log(user);
/* eslint-enable */
