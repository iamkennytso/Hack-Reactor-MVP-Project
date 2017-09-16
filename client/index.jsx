import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputBox from './InputBox.jsx';
import OutputBox from './OutputBox.jsx';
import leetify from './leetify.jsx';
import RecentLeeteds from './recentLeeteds.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      plain:'',
      translated:'',
      recent5:[]
    }
  }

  componentDidMount() {
    this.setState(
      {
        plain:'leet',
        translated:'1337',
        recent5:[]
      }
    )
    this.getRecentLeeteds();
//console.log('React Component Mounted.')
  }

  render () {
    return (
      <div>
        <h1>\v/31C0M3 n00Bz</h1>
        <InputBox text = {this.state} translate = {this.translate.bind(this)}/>
        <br></br>
        <OutputBox text = {this.state} />
        <br></br>
        <RecentLeeteds text = {this.state} />
      </div>
    )
  }
  
  getRecentLeeteds() {
//console.log('getRecentlLeeteds')
    axios.get('/recent5leeted')
    .then( (response) => {
//console.log(response)
      var array = [];
      response.data.forEach( (obj) => {
        array.push(obj.leeted)
      })
//console.log(this)
      this.setState({
        recent5:array
      })
      // console.log('this.state', this.state)
      // console.log('this.state.recent5', this.state.recent5)
      // console.log('this.state.recent5[0]', this.state.recent5[0])
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  translate (input) {
    var leeted = leetify(input)
    leeted.then( (leeted) => {
//console.log('promise', leeted)
      this.setState({
        plain: input,
        translated: leeted
      })
    this.getRecentLeeteds();
    })
  }
}

ReactDOM.render(<App />, document.getElementById('app'));