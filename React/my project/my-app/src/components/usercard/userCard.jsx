import React from "react";
import { Kliker } from "../kliker/kliker";
import "./userCard.scss";
import { UsercardModal } from "./usercardModal/usercardModal";

export class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleClick = (e) => {
    if (!e.target.classList.contains("kliker__button")) {
      this.setState({ showModal: true });
    }
  };

  handleCloseModal = (e) => {
    this.setState({ showModal: false });
  };

  render() {
    const item = this.props.item;
    const index = this.props.index;
    return (
      <div>
        <div className="userCard" onClick={this.handleClick}>
          <Kliker />
          <p className="userCard__title name">
            <span className="title_name">name: {item.name}</span>
          </p>
          <p className="userCard__title race">
            <span className="title_name">race: {item.race}</span>
          </p>
          <p className="userCard__title gender">
            <span className="title_name">gender: {item.gender}</span>
          </p>
          <p className="userCard__title spouse">
            <span className="title_name">
              spouse: {item.spouse.slice(0, 9)}
            </span>
          </p>
        </div>
        {this.state.showModal && (
          <UsercardModal
            item={item}
            index={index}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
