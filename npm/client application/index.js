import isAuth from "./isAuth.js";

function getObj(module, name) {
  let obj = import(module);
  obj.then((res) => {
    let Name = res.default;
    let user = new Name(name);
    console.log(user);
  });
}

isAuth() ? getObj("./user.js", "Alla") : getObj("./guest.js", "Anonim");
