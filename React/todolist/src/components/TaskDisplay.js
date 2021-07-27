import React,{useState} from 'react'

const TaskDisplay = (props) => {
const[isChecked1,setIsChecked1]=useState("")



    const handelcheck = (e,value)=>{

      value.isChecked==false?value.isChecked=true:value.isChecked=false;
        console.log(value.isChecked);
    //setIsChecked1(false)
        



    }

    const handeldelete = (e,value,index)=>{
       
        props.deleteTask(index)
        
        
    }
    

    
    return (
        <div>
           

             


                 
             {  
             
            props.tasks.map((value,i)=>{
                
                
                    return <><input type="checkbox" id = {i} onClick={(e)=>handelcheck(e,value)} onChange={setIsChecked1} />
                        <label for={i} value={value.nam} >  {value.isChecked==false? value.nam: <strike>{value.nam}</strike>} </label>
                <button onClick={(e)=>handeldelete(e,value,i) }>delete</button><br/></>
                
            }
            )}
                              
            
        </div>
    )
}

export default TaskDisplay
