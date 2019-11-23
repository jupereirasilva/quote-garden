import React, { Component } from "react";

class Quote extends Component {
  state = {
    liked: false,
    disliked: false,
    clicked: false
  };

  liked() {
    if (this.state.liked === false) {
      this.props.increaseHandler("like");
      this.setState({
        clicked: true,
        liked: true
      });
      if (this.state.disliked === true) {
        this.props.decreaseLikes("dislike");
        this.setState({
          disliked: false
        });
      }
    }
  }

  disliked() {
    if (this.state.disliked === false) {
      this.props.increaseHandler("dislike");
      this.setState({
        clicked: true,
        disliked: true
      });
      if (this.state.liked === true) {
        this.props.decreaseLikes("like");
        this.setState({
          liked: false
        });
      }
    }
  }

  render() {
    return (
      <div className="quote">
        <p
          style={{
            color: !this.state.clicked
              ? "black"
              : this.state.liked
              ? "green"
              : "red",
            textDecoration: this.state.disliked ? "line-through" : "none"
          }}
          className="text"
        >
          {this.props.text}
        </p>
        <p className="author">By: {this.props.author}</p>
        <button onClick={this.liked.bind(this)} className="thumbsUp">
          <i class="fas fa-thumbs-up"></i>
        </button>
        <button onClick={this.disliked.bind(this)} className="thumbsDown">
          <i class="fas fa-thumbs-down"></i>
        </button>
      </div>
    );
  }
}

export default Quote;
