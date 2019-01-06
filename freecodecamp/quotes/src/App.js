import React, { Component } from 'react';
import twitter from './twitter-color.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {quote: 'It is during our darkest moments that we must focus to see the light.',
        author: 'Aristotle'},
        {quote: 'One of the most beautiful qualities of true friendship is to understand and to be understood.',
        author: 'Lucius Annaeus Seneca'},
        {quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        author: 'Winston Churchill'},
        {quote: 'Optimism is lack of information.',
        author: 'Faina Ranevskaya'},
        {quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: 'George Bernard Shaw'},
        {quote: 'All our dreams can come true, if we have the courage to pursue them.',
        author: 'Walt Disney'},
        {quote: 'The secret of getting ahead is getting started.',
        author: 'Mark Twain'},
        {quote: 'Learning never exhausts the mind.',
        author: 'Leonardo da Vinci'}
      ],
      index: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      index: Math.floor(Math.random()*(this.state.quotes.length-1))
    })
  }
  render() {
    const text = this.state.quotes[this.state.index].quote;
    const author = this.state.quotes[this.state.index].author;
    const tweetedText = encodeURIComponent('"' + text + '" ' + author);


    return (
      <div id="container">
        <div id="quote-box">
          <q id="text">{text}</q>
          <div id="author">{author}</div>
          <div id="buttons">
            <button id="new-quote" onClick={this.handleClick}>Next quote</button>
            <a id="tweet-quote" class="twitter-share-button" href={"https://twitter.com/intent/tweet?hashtags=quotemachine&text="+tweetedText} title="Tweet this quote!" target="_blank" rel="noopener noreferrer"><img id="tweet-quote-img" src={twitter} alt="Twitter icon" /></a>
            </div>
        </div>
      </div>
    );
  }
}

export default App;