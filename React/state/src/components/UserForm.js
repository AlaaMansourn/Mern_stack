import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstnameError, setFirstNameError] = useState("");
    const [lastnameError, setLastNameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const handleFirstName = (e)=>{
        setFirstname(e.target.value);
        if(e.target.value.length<2){
            setFirstNameError("First Name must be greater than 2 charecters ")
        }
        else{

            setFirstNameError("")
        }
    
    };

    const handleLastName = (e)=>{
        setLastname(e.target.value);
        if(e.target.value.length<2){
            setLastNameError("Last Name must be greater than 2 charecters ")
        }
        else{

            setLastNameError("")
        }
    };

    const handleEmail = (e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<2){
            setEmailError("Email must be greater than 5 charecters ")
        }
        else{

            setEmailError("")
        }
        
    };

    const handlePassword = (e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordError("password must be at least 8 charecters ")
        }

        else{

            setPasswordError("")
        }
    };

    const handleConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value);
        if(e.target.value.length<8){
            setConfirmPasswordError("confirm password must be at least 8 charecters ")
        }
        else if (e.target.value!=password){
            setConfirmPasswordError("confirm password must match ")

        }
        else{

            setConfirmPasswordError("")
        }
    };


    

     
    
    return(
        <form  onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ handleFirstName } />
                
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            

            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ handleLastName } />

                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>

                
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                    EmailError ?
                    <p style={{color:'red'}}>{ EmailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>


                <input type="password" onChange={ handlePassword } />

                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirmPassword} />
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
                <input type="submit" value="Create User" />
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