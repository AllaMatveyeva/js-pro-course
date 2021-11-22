import "./User.scss";

class User {
  constructor(name) {
    this.name = name;
  }
  //sayhello function
  sayhello = () => {
    console.log(this.name);
  };
}
export { User };
