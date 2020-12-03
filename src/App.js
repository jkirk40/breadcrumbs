import getContent from "./functions/getContents";

import './App.css';

function App() {
  return (
    <div className="App">
      {getContent()}
    </div>
  );
}

export default App;
