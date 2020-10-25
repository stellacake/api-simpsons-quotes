import React from 'react';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';


const defaultQuote = {
  image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
  quote:'Shoplifting is a victimless crime, like punching someone in the dark.',
  character:'Nelson Muntz',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteCard: defaultQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quoteCard: data[0],
          // et non data.result, ça dépend de ce qui ce passe dans la console hehehe
        });
      });
  }
  render() {
    return (
      <div className="App">
        <DisplayQuote quoteCard={this.state.quoteCard} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
