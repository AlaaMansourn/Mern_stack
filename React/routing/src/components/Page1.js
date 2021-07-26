import React from 'react';

const Page1 = (props) => {
    return (
        <div style={{color:props.textcolor, backgroundColor:props.backcolor}}>
            {
                isNaN(props.id) ?    <p>the word: {props.id}</p> : <p>your number: {props.id}</p>
            }
        </div>
    )
}

export default Page1;