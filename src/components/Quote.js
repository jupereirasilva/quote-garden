import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className="quote">
        <p className="text">{this.props.text}</p>
        <p className="author">By: {this.props.author}</p>
      </div>
    );
  }
}

export default Quote;
