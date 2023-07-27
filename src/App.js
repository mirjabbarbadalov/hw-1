import React, { Component } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
    };
  }

  handleFirstModal = () => {
    const { showModal2 } = this.state;
    if (showModal2) {
      this.setState({ showModal2: false });
    }
    this.setState((prevState) => ({ showModal1: !prevState.showModal1 }));
  };

  handleSecondModal = () => {
    const { showModal1 } = this.state;
    if (showModal1) {
      this.setState({ showModal1: false });
    }
    this.setState((prevState) => ({ showModal2: !prevState.showModal2 }));
  };

  handleCloseModalsOutsideClick = (event) => {
    const { showModal1, showModal2 } = this.state;
    if (showModal1 || showModal2) {
      if (!event.target.closest(".modal")) {
        this.setState({ showModal1: false, showModal2: false });
      }
    }
  };

  render() {
    const { showModal1, showModal2 } = this.state;

    return (
      <>
        <div
          className={
            showModal1 || showModal2 ? "container dark-bg" : "container"
          }
          onClick={this.handleCloseModalsOutsideClick}
        >
          <header className="container--header">
            <Button
              backgroundColor={"green"}
              text={!showModal1 ? "Open first modal" : "Close first modal"}
              onClick={this.handleFirstModal}
            />
            <Button
              backgroundColor={"orange"}
              text={!showModal2 ? "Open second modal" : "Close second modal"}
              onClick={this.handleSecondModal}
            />
          </header>
          <div className="modal--section">
            {showModal1 && (
              <Modal
                header={"Dou you want to delete this file?"}
                text={
                  "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
                }
                onClick={this.handleFirstModal}
                actions={[
                  {
                    btn1Text: "Ok",
                    btn2Text: "Cancel",
                  },
                ]}
              />
            )}

            {showModal2 && (
              <Modal
                header={"Lorem ipsum dolor sit amet."}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
                onClick={this.handleSecondModal}
                actions={[
                  {
                    btn1Text: "Buy",
                    btn2Text: "Sell",
                  },
                ]}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
