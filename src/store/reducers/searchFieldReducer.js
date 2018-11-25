import { SEARCH_CHANGE } from "../actions/actionTypes";


const initialState = {
    searchField: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SEARCH_CHANGE :
            return {
                ...state,
                searchField : action.payload
            }
        default:
            return state
    }
}

export default reducer;