import React, { useState } from 'react';

const Person = (props) => {
    const [ theAge, setTheAge ] = useState(props.age);

    return (
        <div>
            <h1> { props.lastName }, { props.firstName }</h1>
            <p> Hair Color: { props.hair } </p>
            <p>Age: { theAge }</p>
            <button onClick={ (event) => setTheAge(theAge + 1)}>Birthday Button for {props.firstName} {props.lastName}!</button>
        </div>
    )
}

export default Person;