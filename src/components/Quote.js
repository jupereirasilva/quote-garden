import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className="quote">
        <p className="text">{this.props.text}</p>
        <p className="author">By: {this.props.author}</p>
        <button className="thumbsUp">
          <i class="fas fa-thumbs-up"></i>
        </button>
        <button className="thumbsDown" onClick={this.increment}>
          <i class="fas fa-thumbs-down"></i>
        </button>
      </div>
    );
  }
}

export default Quote;
