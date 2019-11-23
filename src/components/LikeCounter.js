import React, { Component } from "react";

class LikeCounter extends Component {
  render() {
    return (
      <div
        style={{
          margin: "0 10px"
        }}
      >
        <p>
          Liked: <b>{this.props.likeCounter}</b>
        </p>
      </div>
    );
  }
}

export default LikeCounter;
