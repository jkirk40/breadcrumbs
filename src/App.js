import React from 'react';

import getContent from "./functions/getContents";

import Breadcrumb from './components/Breadcrumb';
import InfoDisplay from './components/infoDisplay';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      path: "root",
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
      //I added this for situations where an invalid path is set
      //Of course this is not possible when the interface is only buttons
      //But it could happen if users were typing addresses
      //To see this work, change this.state.path to: "root/home/mynam"
      this.setState({
        obj: {},
        error: true
      })
      console.log(err)
    })
  }

  updatePath = (newPath) => {
    //Update the path stored in state and then immediately load the info for that path
    this.setState({path: newPath}, () => {
      this.loadObj();
    })
  }

  render () {
    return (
      <div className="App">
        <div>
          <Breadcrumb
            depth={0}
            path={this.state.path}
            updatePath={this.updatePath}
          />
        </div>
        {this.state.error ? 'error thrown, please see console' : ''}
        <InfoDisplay 
          obj={this.state.obj}
          path={this.state.path}
          updatePath={this.updatePath}
        />
      </div>
    );
  }
}

export default App;
