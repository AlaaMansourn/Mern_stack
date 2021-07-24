import React from 'react'
import { Button } from '@material-ui/core';
const TabsBar = (props) => {

const tabs = ["tab1","tab2","tab3"];
const handelclick=(e,value,i)=>{
e.preventDefault();

props.data(value+" is tabed");




}

    return (
        <div>
            {
           tabs.map((value,i)=>{
            
            return <Button variant="contained" color="primary" key={i} onClick={(e)=>handelclick(e,value,i)}>  {value}  </Button>




           }




           )


            }
        </div>
    )
}

export default TabsBar
