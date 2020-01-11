import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import axios from 'axios';

import { enterVillage } from '../actions';



const Village = (props) => {



    
    return (
        <div>
            <button onClick={() =>props.enterVillage()}>Enter Village!</button>
            {
                props.smurfs.map(smurf => {
                    return (
                        <Smurf
                        
                        id={smurf.id}
                        name={smurf.name}
                        age={smurf.age}
                        height={smurf.height}
                         />
                    )
                })
            }


            
        </div>

        
    );
}

const mapStateToProps= state => {
    return {smurfs: state.smurfs}
}

export default connect(mapStateToProps,{enterVillage})(Village);
