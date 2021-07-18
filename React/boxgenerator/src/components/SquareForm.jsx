import react, { useState } from 'react';

const SquareForm = (props) => {
        const [color, setColor] = useState("");
        
        const handleSubmit = (e) => {
        
            e.preventDefault();
             props.onNewSquare( color);
            
        };
        
        return (
            <form onSubmit={ handleSubmit }>
                
                    <input type="text"
                    placeholder="Enter your message here"
                    onChange={ (e) => setColor(e.target.value)}
                    value={ color }/>
                
                <input type="submit" value="Add" />
            </form>
        );
    };
        
    export default SquareForm;