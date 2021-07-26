import './App.css';
import Home from './components/Home'
import { Router } from '@reach/router';
import Page1 from './components/Page1';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Page1 path="/:id" />
        <Page1 path="/:id/:textcolor/:backcolor" />
      </Router>
    </div>
  );
}

export default App;