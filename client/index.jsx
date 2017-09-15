import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputBox from './InputBox.jsx';
import OutputBox from './OutputBox.jsx';
//import leetify from './leetify.js';

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
    console.log('React Component Mounted.')
  }

  render () {
    return (
      <div>
        <h1>Hello World!  </h1>
        <InputBox text={this.state}/>
        <br></br>
        <OutputBox text={this.state} />
      </div>
    )
  }

  translate () {
    console.log('translate', this.state.plain)
    //leetify(this.state.plain)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));