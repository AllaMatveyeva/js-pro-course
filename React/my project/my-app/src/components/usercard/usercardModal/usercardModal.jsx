import React from "react";
import "./usercardModal.scss";
import { ModalWindow } from "../../modalWindow/modal";
import female1 from "../../../img/female1.jpg";
import female2 from "../../../img/female2.jpg";
import female3 from "../../../img/female3.jpg";
import male1 from "../../../img/male1.jpg";
import male2 from "../../../img/male2.jpg";
import male3 from "../../../img/male3.jpg";

function GetImg(props) {
  const arrImg = [];
  arrImg.push(female1, male1, male2, male3, female2, female3);
  console.log(arrImg[props.index]);
  return <img className="image" src={arrImg[props.index]} alt="Avatar"></img>;
}

export class UsercardModal extends React.Component {
  render() {
    const user = this.props.item;
    const index = this.props.index;
    console.log(user);
    console.log(index);
    return (
      <ModalWindow title={`${user.name} `} onClose={this.props.onClose}>
        <a className="link" href={user.wikiUrl}>
          User profile
        </a>
        <div className="users-page-modal">
          <GetImg index={index} />
        </div>
      </ModalWindow>
    );
  }
}
