import React from 'react';

import getContent from "./functions/getContents";

import InfoDisplay from './components/infoDisplay';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      path: "root/home/myname",
      obj: {},
      error: false
    }
  }

  componentDidMount () {
    this.loadObj();
  }

  loadObj = () => {
    getContent(this.state.path).then((res) => {
      this.setState({
        obj: res,
        error: false
      })
    })
    .catch((err) => {
      this.setState({
        obj: {},
        error: true
      })
      console.log(err)
    })
  }

  render () {
    return (
      <div className="App">
        {this.state.error ? 'error thrown, please see console' : ''}
        <InfoDisplay obj={this.state.obj}></InfoDisplay>
      </div>
    );
  }
}

export default App;
