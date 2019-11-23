import React, { Component } from "react";
import Quote from "./Quote";
import LikeCounter from "./LikeCounter";
import DislikeCounter from "./DislikeCounter";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: false,
    dislikeCounter: 0,
    likeCounter: 0
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(res => res.json())
      // .then(data => console.log("This data?", data))
      .then(json => this.setState({ quotes: json.results, fetching: true }))
      .catch(console.error);
  }

  increaseLikes(type) {
    if (type === "like") {
      this.setState({
        likeCounter: this.state.likeCounter + 1
      });
    } else {
      this.setState({
        dislikeCounter: this.state.dislikeCounter + 1
      });
    }
  }

  decreaseLikes(type) {
    if (type === "dislike") {
      this.setState({
        dislikeCounter:
          this.state.dislikeCounter === 0 ? 0 : this.state.dislikeCounter - 1
      });
    } else {
      this.setState({
        likeCounter:
          this.state.likeCounter === 0 ? 0 : this.state.likeCounter - 1
      });
    }
  }

  render() {
    return (
      <div className="quote-searcher">
        <h1>Quotes</h1>
        {this.state.fetching === false ? (
          "Loading..."
        ) : (
          <div
            style={{
              display: "inline-flex",
              width: 300,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <LikeCounter likeCounter={this.state.likeCounter} /> /
            <DislikeCounter dislikeCounter={this.state.dislikeCounter} />
          </div>
        )}
        {this.state.quotes.map(quote => (
          <Quote
            text={quote.quoteText}
            author={quote.quoteAuthor}
            key={quote._id}
            increaseHandler={this.increaseLikes.bind(this)}
            decreaseHandler={this.increaseLikes.bind(this)}
            decreaseLikes={this.decreaseLikes.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default QuoteSearcher;
