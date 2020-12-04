import React from 'react';

import getContent from "./functions/getContents";

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      path: "root/home/myname"
    }
  }

  render () {
    return (
      <div className="App">
        {getContent(this.state.path)}
      </div>
    );
  }
}

export default App;
