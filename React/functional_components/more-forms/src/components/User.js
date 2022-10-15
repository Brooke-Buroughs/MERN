import React, { useState, useSyncExternalStore } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    
    const fname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstnameError("First name must be at least two characters")
        } else if(e.target.value.length < 1) {
            setFirstnameError("First name is required")
        } else {
            setFirstnameError("");
        }
        
        // e.preventDefault();
        // const newUser = { 
        //     firstname: firstname, 
        //     lastname: lastname,
        //     email: email, 
        //     password: password, 
        //     confirm: confirm
        // };
        // console.log("Welcome", newUser);
    };

    const lname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastnameError("Last name must be at least two characters")
        } else if(e.target.value.length < 1) {
            setLastnameError("Last name is required")
        } else {
            setLastnameError("");
        }
    }
    
    const bemail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least five characters")
        } else if(e.target.value.length < 1) {
            setEmailError("Email is required")
        } else {
            setEmailError("");
        }
    }

    const pword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least eight characters")
        } else if(e.target.value.length <1) {
            setPasswordError("Password is required")
        } else {
            setPasswordError("");
        }
    }

    const confirmp = (e) => {
        setConfirm(e.target.value);
        if(e.target.value != password) {
            setConfirmError("Passwords must match")
        } else if(e.target.value.length < 1) {
            setConfirmError("You must confirm password")
        } else {
            setConfirmError("");
        }
    }
    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ fname } />
                    {
                        firstnameError ?
                        <p>{ firstnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ lname } />
                    {
                        lastnameError ?
                        <p>{ lastnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ bemail } />
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ pword } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ confirmp } />
                    {
                        confirmError ?
                        <p>{ confirmError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};
    
export default UserForm;