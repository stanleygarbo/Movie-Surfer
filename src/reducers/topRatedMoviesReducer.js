import {FETCH_TOP_RATED_MOVIES} from '../actions/types'

const initState = {
    items:[]
}

export default (state=initState,action)=>{
    switch(action.type){
        case FETCH_TOP_RATED_MOVIES:
            return {
                ...state,
                items:action.payload
            }
        default:
            return state
    }
}