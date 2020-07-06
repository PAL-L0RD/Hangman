import React from 'react';
import './App.css';
import swal from 'sweetalert';
import hangman1 from './images/hangman1.png';
import hangman2 from './images/hangman2.png';
import hangman3 from './images/hangman3.png';
import hangman4 from './images/hangman4.png';
import hangman5 from './images/hangman5.png';
import hangman6 from './images/hangman6.png';
import hangman7 from './images/hangman7.png';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: ['_', '_', '_', '_'],
      word2: ['a', 'm', 'r', 'o'],
      guessedLetters: [],
      currentLetter: '',
      nump: 0,
      linl: 1,
      imaga: [
        <img src={hangman1} alt={'d'} />,
        <img src={hangman2} alt={'d'} />,
        <img src={hangman3} alt={'d'} />,
        <img src={hangman4} alt={'d'} />,
        <img src={hangman5} alt={'d'} />,
        <img src={hangman6} alt={'d'} />,
        <img src={hangman7} alt={'d'} />,
      ],
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTextChange(event) {
    this.setState({
      currentLetter: event.target.value.toString().toLowerCase(),
    });
  }
  handleSubmit(event) {
    console.log(this.state.imaga[this.state.nump]);
    if (this.state.guessedLetters.includes(this.state.currentLetter)) {
      swal('Already entered');
    } else if (!this.state.word2.includes(this.state.currentLetter)) {
      this.state.guessedLetters.push(this.state.currentLetter);
      this.state.guessedLetters.push(',');
      let x = this.state.nump;
      this.setState({ nump: x + 1 });
    }
    for (var i = 0; i < this.state.word2.length; i++) {
      if (this.state.word2[i] === this.state.currentLetter) {
        let a = this.state.word.slice();
        let b = this.state.currentLetter;
        a[i] = b;
        this.setState({ word: a });
      }
    }
    this.forceUpdate();
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        {/*Insert code to render a Hangman component here and pass it information to display the right image*/}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            maxlength="1"
            placeholder="ENTER A GUESS"
            onChange={this.handleTextChange}
          />
          <button> Submit </button>
        </form>
        <div>
          <h1 className="Title">Guessed letters</h1>
          <h1 className="Main">{this.state.guessedLetters}</h1>
          <h1 className="Title">Word</h1>
          <h1 className="Main">{this.state.word}</h1>
          {this.state.imaga[this.state.nump]}
        </div>
      </div>
    );
  }
}
export default App;
export default App
