import React, { useReducer } from 'react';
// We must define initial state: what our state will look like on initial render
const initialState = {
    email: '',
    password: ''
};

// REMEMBER the action will look like: {type: "DO_SOMETHING", payload: "some_value"}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload
            }
        case "SET_PASSWORD":
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }
}

export default () => {
//  We call the useReducer function. and feed it the reducer function and initialState.
    //  This function will return an array with a state variable ("state") which will hold 
    //  the CURRENT value of our app's state, and the dispatch function ("dispatch") which
    //  will dispatch our action to our reducer.
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleEmailChange = (e) => {
        dispatch({
            type: "SET_EMAIL", 
            payload: e.target.value 
        });
    }
    const handlePasswordChange = (e) => {
        dispatch({
            type: "SET_PASSWORD",
            payload: e.target.value
        })
    }

    return (
        <div>
            <h1>{JSON.stringify(state)}</h1> {/* display current value of state */}
            <div>
                <label>
                    <span>Email</span>
                    <input
                        id="name"
                        value={state.email}
                        onChange={(e) => handleEmailChange(e)}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Password</span>
                    <input
                        id="password"
                        value={state.password}
                        onChange={(e) => handlePasswordChange} 
                    />
                </label>
            </div>
        </div>
    );
}

// const UserForm = (props) => {
//     const [firstname, setFirstname] = useState("");
//     const [lastname, setLastname] = useState("");
//     const [email, setEmail] = useState("");
    
//     const createUser = (e) => {
//         e.preventDefault();
//         const newUser = { 
//             firstname: firstname, 
//             lastname: lastname,
//             email: email, 
//         };
//         console.log("Welcome", newUser);
//     };
    
//     return(
//         <div>
//             <form onSubmit={ createUser }>
//                 <div>
//                     <label>First Name: </label> 
//                     <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
//                 </div>
//                 <div>
//                     <label>Last Name: </label> 
//                     <input type="text" onChange={ (e) => setLastname(e.target.value) } />
//                 </div>
//                 <div>
//                     <label>Email Address: </label> 
//                     <input type="text" onChange={ (e) => setEmail(e.target.value) } />
//                 </div>
//                 <input type="submit" value="Create User" />
//             </form>
//             <div>
//                 <p>First Name: { firstname }</p>
//                 <p>Last Name: { lastname }</p>
//                 <p>Email Address: { email }</p>
//             </div>
//         </div>
//     );
// };
    
