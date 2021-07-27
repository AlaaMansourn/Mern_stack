import React,{useState} from 'react'


const AddTask = (props) => {

const[task,setTask]=useState({});

const handelsubmit = e => {

e.preventDefault();
props.newTask(task);


}

    return (
        <div>
        <form  onSubmit={handelsubmit}>
           <input type="text"
           placeholder="enter what to do tasks"
           onChange={e=>setTask({nam:e.target.value,isChecked:false})}
           value={task.nam}></input>   
              
          <input type="submit" value="Add"></input>   
        </form>  
        </div>
    )
}

export default AddTask
