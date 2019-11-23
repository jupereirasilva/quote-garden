import React, { Component } from "react";

class DislikeCounter extends Component {
  render() {
    return (
      <div
        style={{
          margin: "0 10px"
        }}
      >
        <p>
          Disliked: <b>{this.props.dislikeCounter}</b>
        </p>
      </div>
    );
  }
}

export default DislikeCounter;
