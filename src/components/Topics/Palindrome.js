import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  changeHandle(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    let forwards = userInput;
    let backwards = userInput;

    backwards = backwards.split("");
    backwards = backwards.reverse();
    backwards = backwards.join("");

    if (forwards === backwards) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          type="text"
          className="inputLine"
          onChange={e => this.changeHandle(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          {" "}
          Check
        </button>
        <span className="resultsBox">
          {" "}
          Palindrome: {this.state.palindrome}{" "}
        </span>
      </div>
    );
  }
}

export default Palindrome;
