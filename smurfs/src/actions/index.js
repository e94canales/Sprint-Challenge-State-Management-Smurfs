import axios from 'axios'

export const fetchSmurfData = () => {

    return dispatch => {

        axios.get(`http://localhost:3333/smurfs`)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: 'FETCH_COMPLETE',
                    payload: response.data
                })
            })
    }

}
export const postNewData = newData => {
    return dispatch => {
        dispatch({
            type: 'POST_DATA',
            payload: newData
        })
    }
}
export const delSmurf = smurfId => {
    return dispatch => {
        axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
            .then( response => {
                dispatch({
                    type: 'DEL_SMURF',
                    payload: response.data
                })
            })
    }
}