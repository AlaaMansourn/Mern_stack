import logo from './logo.svg';
import './App.css';
import './components/SquareForm';
import SquareForm from './components/SquareForm';
import react, { useState } from 'react';
import SquareDisplay from './components/SquareDisplay';

function App() {


  const[currentColor,setColor]=useState([]);

  const newSquare = (color)=>{
    setColor([...currentColor,color]);


  }

  
  return (
    <>

    <SquareForm onNewSquare={newSquare}
    ></SquareForm >
    <SquareDisplay color={currentColor} ></SquareDisplay>



    </>
  );
}

export default App;
