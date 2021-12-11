import React from "react";
import "./modal.scss";

export class ModalWindow extends React.Component {
  handleClose = (e) => {
    this.props.onClose?.(e);
  };

  render() {
    return (
      <div className="modalWindow">
        <div className="window">
          <div className="title">
            <span>{this.props.title}</span>
            {!!this.props.onClose && (
              <button className="button" onClick={this.handleClose}>
                x
              </button>
            )}
          </div>
          <hr />
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
