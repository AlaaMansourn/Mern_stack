import react, { useState } from 'react';

const SquareDisplay = (props) => {

    
    return (
        <>

        <div style={{display:"flex"}}>
        {props.color.map((item,i)=>
            <div style={{backgroundColor:item, width:"50px",height:"50px"}}>

        

            
            </div>
        )} 
</div>
        </>
    );
};

export default SquareDisplay
