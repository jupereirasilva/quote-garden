import React, { Component } from "react";

class DislikeCounter extends Component {
  state = {
    numDislikes: 0
  };

  increment = () => {
    this.state({
      numDislikes: this.state.numDislikes + 1
    });
  };

  render() {
    return (
      <div>
        <p>
          Disliked: <b>{this.state.numDislikes}</b>
        </p>
      </div>
    );
  }
}

export default DislikeCounter;
