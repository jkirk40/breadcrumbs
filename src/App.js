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
    let obj = getContent(this.state.path);

    return (
      <div className="App">
        {obj.name}
      </div>
    );
  }
}

export default App;
