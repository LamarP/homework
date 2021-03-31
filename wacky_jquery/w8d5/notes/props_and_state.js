import Dog from "./dog";

const App = () => <Dog name="Fido" breed="Greyhound"></Dog>;
//props are properties of a component that are passed in at the time of initialization
//this.props are then accessible in a component's instance methods
class Dog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Name: {this.props.name}, Breed: {this.props.breed}
      </div>
      //dog has name and breed properties which can be read inside the component as this.props.breed and this.props.name
    );
  }
}

export default Dog;
//this is what it renders to html
//<div>Name: Fido, Breed: Greyhound</div>


//STATE
//this.state represents the properties of a component that can be altered by the component itself
//State should be used whenever a component must keep track of mutable, internal data.
//Every time this.setState() is called, the component calls render() again with the new state.



//WordInput has an initial state of {word: ''}
class WordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    };
    this.updateWord = this.updateWord.bind(this);
  }

  updateWord(event) {
    this.setState({ word: event.currentTarget.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.updateWord} value={this.state.word} />
        <span>The word is: {this.state.word}</span>
      </div>
      //registers an event listener on the input via its onChange prop
    );
  }
}

//when ever the input changes its value(via user input)