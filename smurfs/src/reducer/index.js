export const initialState = {
    name: '',
    age: '',
    height: '',
    id: '',
    apiData: [],
}
export const mainReducer = (state = initialState, action) => {

    switch(action.type){

        case 'FETCH_COMPLETE':
            return {
               apiData: action.payload
            }
        case 'POST_DATA':
            return {
                apiData: action.payload
            }
        case 'DEL_SMURF':
            return {
                apiData: action.payload
            }

        default:
            return state
    }
}