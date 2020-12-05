import React from 'react';

import getContent from "./functions/getContents";

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
        <p>{this.state.obj.name}</p>
        <p>{this.state.obj.type}</p>
        <p>{this.state.obj.files}</p>
        <p>{this.state.obj.subdirectories}</p>
      </div>
    );
  }
}

export default App;
