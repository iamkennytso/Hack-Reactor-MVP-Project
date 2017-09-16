import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputBox from './InputBox.jsx';
import OutputBox from './OutputBox.jsx';
import leetify from './leetify.jsx';
import RecentLeeteds from './recentLeeteds.jsx'
import axios from 'axios';

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
    axois.get('/recent5leeted')
//console.log('React Component Mounted.')
  }

  render () {
    return (
      <div>
        <h1>\v/31C0M3 n00Bz</h1>
        <InputBox text={this.state} translate = {this.translate.bind(this)}/>
        <br></br>
        <OutputBox text={this.state} />
        <br></br>

      </div>
    )
  }
  
  // <RecentLeeteds list={this.getRecentLeeteds.bind(this)} />
  // getRecentLeeteds() {
  //   return axios.post('/leetify', {
  //     data: props
  //   })
  //   .then(function (response) {
  // //console.log('axios', response.data)
  //     return(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }


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