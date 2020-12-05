import React from 'react';

import getContent from "./functions/getContents";

import InfoDisplay from './components/infoDisplay';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      path: "root/home/myname",
      objLoaded: false,
      obj: {}
    }
  }

  componentDidMount () {
    this.loadObj();
  }

  loadObj = () => {
    this.setState({objLoaded: false})
    getContent(this.state.path).then((res) => {
      console.log(res)
      this.setState({obj: res})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className="App">
        <InfoDisplay obj={this.state.obj}></InfoDisplay>
      </div>
    );
  }
}

export default App;
