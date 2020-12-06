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
      this.setState({
        obj: {},
        error: true
      })
      console.log(err)
    })
  }

  updatePath = (newPath) => {
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
