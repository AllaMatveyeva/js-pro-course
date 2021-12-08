import { Kliker } from "../kliker/kliker";
import "./user.scss";

function UserCard(props) {
  console.log(props);
  const { user } = props;
  const { name, age, status, tel } = user;
  return (
    <div
      className="user"
      onClick={(e) => {
        if (!e.target.classList.contains("kliker__button")) {
          document.querySelector(".modal").style = "display:block";
        }
      }}
    >
      <Kliker />
      <p className="name">
        <span className="title_name">name: </span> {name}
      </p>
      <p className="age">
        <span className="title_name">age: </span>
        {age}
      </p>
      <p className="statys">
        <span className="title_name">statys: </span> {status}
      </p>
      <p className="tel">
        <span className="title_name">tel: </span> {tel}
      </p>
    </div>
  );
}
export default UserCard;
