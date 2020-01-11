import React from 'react';

const Smurf = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
            
        </div>
    );
}

export default Smurf;
