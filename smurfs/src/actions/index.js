import axios from 'axios';


export const enterVillage = () => {
    return dispatch => {
        axios
        .get('http://localhost:3333/smurfs')
        .then(res=>{
            console.log('actions', res.data)
            dispatch({type: 'ENTER_VILLAGE',payload: res.data});
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const addSmurf = (newMember) => {
    return dispatch => {
        
           axios.post(`http://localhost:3333/smurfs`, newMember)
            .then(res => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })

            axios.get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({type: 'UPDATE_VILLAGE', payload: res.data})
            })
            .catch(err => {
                console.log(err);
            })
            
    }
}

export const removeSmurf = (smurfId) => {
    console.log(smurfId)
    return { type: 'REMOVE_SMURF', payload: smurfId};
}