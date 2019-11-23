import React, { Component } from "react";

class LikeCounter extends Component {
  state = {
    numLikes: 0
  };

  increment = () => {
    this.state({
      numLikes: this.state.numLikes + 1
    });
  };

  render() {
    return (
      <div>
        <p>
          Liked: <b>{this.state.numLikes}</b>
        </p>
      </div>
    );
  }
}

export default LikeCounter;
