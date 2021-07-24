import logo from './logo.svg';
import './App.css';
import TabsBar from './components/TabsBar';
import React,{useState} from 'react'
import TabsShow from './components/TabsShow';



function App() {

  const [data,setData] =useState("");

  const newContent = (content)=>{

    setData(content);


  }
  return (
    <div className="App">
      
      <TabsBar data={newContent}/>
      <TabsShow display={data}/>
    </div>
  );
}

export default App;
