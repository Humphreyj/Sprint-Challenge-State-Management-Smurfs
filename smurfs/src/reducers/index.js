import axios from 'axios';

let arrayData;

axios.get('http://localhost:3333/smurfs')
.then(res=> {
    console.log(res.data)
    arrayData = res.data
    return arrayData
})
.catch(err=> {
    console.log(err);
})



const initialState = {
    smurfs: [
        
      ]
}

export const smurfReducer = (state = initialState, action) => {
 switch(action.type) {

    case 'ENTER_VILLAGE' : 
        return {...state,smurfs: [...action.payload]};
    case 'ADD_SMURF' :
        return{...state,smurfs: [state.smurfs, action.payload]};
    case 'UPDATE_VILLAGE' : 
        return {...state,smurfs: [state.smurfs,action.payload]};
    case 'REMOVE_SMURF' :
        console.log(action.payload)
        return {...state,smurfs: state.smurfs.filter(item => item.id !== action.payload)};
    
     default: 
        return state;
 }

}


