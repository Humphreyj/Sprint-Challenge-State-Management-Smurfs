import React from 'react';
import { connect } from 'react-redux';
import { removeSmurf } from '../actions';

const Smurf = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
            <button onClick={()=>props.removeSmurf(props.id)}>Evict</button>
            
        </div>
    );
}

export default connect((state)=>{
    return{smurfs: state.smurfs}
},{removeSmurf})(Smurf);
