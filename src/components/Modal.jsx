import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { header, text, onClick, actions } = this.props;

    return (
      <div className="modal">
        <header>
          {header}
          <button className="modal--close-btn" onClick={onClick}>
            X
          </button>
        </header>
        <main>{text}</main>
        <footer>
          <button className="modal-btn">{actions[0].btn1Text}</button>
          <button className="modal-btn">{actions[0].btn2Text}</button>
        </footer>
      </div>
    );
  }
}

export default Modal;
