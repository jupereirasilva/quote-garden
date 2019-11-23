import React, { Component } from "react";
import Quote from "./Quote";
import LikeCounter from "./LikeCounter";
import DislikeCounter from "./DislikeCounter";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: false
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(res => res.json())
      // .then(data => console.log("This data?", data))
      .then(json => this.setState({ quotes: json.results, fetching: true }))
      .catch(console.error);
  }

  render() {
    return (
      <div className="quote-searcher">
        <h1>Quotes</h1>
        {this.state.fetching === false && "Loading..."}
        <LikeCounter /> / <DislikeCounter />
        {this.state.quotes.map(quote => (
          <Quote
            text={quote.quoteText}
            author={quote.quoteAuthor}
            key={quote._id}
          />
        ))}
      </div>
    );
  }
}

export default QuoteSearcher;
