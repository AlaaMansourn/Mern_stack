import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     
    
    return(
        <form >
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                
            </div>
            

            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>

                
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            
            <div>
            <table>

            <tr>first Name<td>{firstname}</td></tr>
            <tr>Last Name<td>{lastname}</td></tr>
            <tr>Email:<td>{Email}</td></tr>
            <tr>Password:<td>{password}</td></tr>
            <tr>confirmPassword:<td>{confirmPassword}</td></tr>
            

            </table>
            </div>
        </form>
        
    );
};
    
export default UserForm;