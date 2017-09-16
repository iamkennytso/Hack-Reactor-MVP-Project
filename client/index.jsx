import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputBox from './InputBox.jsx';
import OutputBox from './OutputBox.jsx';
import leetify from './leetify.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      plain:'',
      translated:''
    }
  }

  componentDidMount() {
    this.setState(
      {
        plain:'leet',
        translated:'1337'
      }
    )
//console.log('React Component Mounted.')
  }

  render () {
    return (
      <div>
        <h1>W3lC0M3 n00B</h1>
        <InputBox text={this.state} translate = {this.translate.bind(this)}/>
        <br></br>
        <OutputBox text={this.state} />
      </div>
    )
  }

  translate (input) {
    var leeted = leetify(input)
    leeted.then( (leeted) => {
//console.log('promise', leeted)
      this.setState({
        plain: input,
        translated: leeted
      })
    })
  }
}

ReactDOM.render(<App />, document.getElementById('app'));