import React from "react";
import { UserCard } from "./userCard";
import "./users.scss";
import { Kliker } from "../kliker/kliker";

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://the-one-api.dev/v2//character ", {
      method: "GET",
      headers: {
        Authorization: "Bearer VE3TQswW4reG5Luwm85f",
      },
    })
      .then((res) => res.json())
      .then((res) => Object.entries(res)[0][1].slice(0, 6))
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Download...</div>;
    } else {
      return (
        <>
          <div className="user">
            <div className="users-block">
              {items.map((item, index) => (
                <UserCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </>
      );
    }
  }
}
