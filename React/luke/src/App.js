import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import SearchComponent from './components/SearchComponent';
import DisplayComponent from './components/DisplayComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <SearchComponent path="/" />
      <DisplayComponent path="/:cat/:id"/>
      </Router>
    </div>
  );
}

export default App;
