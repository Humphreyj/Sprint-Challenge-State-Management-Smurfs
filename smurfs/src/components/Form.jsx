import React,  { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addSmurf } from '../actions';

const Form = (props) => {

    const [newMember, addNewMember] = useState({
        name:'',
        age: '',
        height: '',
        id: props.smurfs.length

    })


    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(newMember);
        
           
    }


    const handleChange = e => {
        addNewMember({
            ...newMember,
            [e.target.name]: e.target.value,
            
        })
        console.log(e.target.value)
        console.log(newMember)
    }
    return (
        <div>
            <form onSubmit={(e) =>handleSubmit(e)}>
                <h4>Welcome to the Village! Please Fill out this form!</h4>

                <input type="text" name='name' value={newMember.name} placeholder='Name' onChange={handleChange}/>
                <input type="text" name='age' value={newMember.age} placeholder='Age' onChange={handleChange}/>
                <input type="text" name='height' value={newMember.height} placeholder='Height' onChange={handleChange}/>

                <button type='submit'>Submit!</button>
            </form>
            
        </div>
    );
}

export default connect((state)=> {
    return{smurfs: state.smurfs}
},{addSmurf})(Form);
