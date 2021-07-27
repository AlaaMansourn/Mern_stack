import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import TaskDisplay from './components/TaskDisplay';
import React,{useState} from 'react';

function App() {


  const[tasks,setTasks]= useState([{}]);

  const newtask = (tsk)=>{

    setTasks([...tasks,tsk]);
    
  };

const detletByIndex = (index)=>{
   
  tasks.splice(index,1)

//console.log(index)


setTasks([...tasks]);

}
  
  return (
    <div className="App">
     <AddTask newTask={newtask}/>
     <TaskDisplay tasks={tasks} deleteTask={detletByIndex} />
    </div>
  );
}

export default App;
