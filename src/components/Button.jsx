import React, { Component } from "react";

class Button extends Component {
  render() {
    const { backgroundColor, text, onClick } = this.props;
    const buttonStyle = { backgroundColor: backgroundColor };

    return (
      <button style={buttonStyle} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
