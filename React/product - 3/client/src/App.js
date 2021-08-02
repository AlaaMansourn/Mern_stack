import logo from './logo.svg';
import './App.css';
import React from 'react'
import Main from './Views/Main';
import Display from './Views/Display';
import{Router} from'@reach/router';




function App() {
  return (
    <div className="App">
    
<Router>
<Main path="/"/>
<Display path="/:id"/>
</Router>


    </div>
  );
}

export default App;
