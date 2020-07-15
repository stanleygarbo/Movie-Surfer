import {FETCH_MOVIE_DETAILS} from '../actions/types'

const initState={
    item:{}
}

export default (state=initState,action) => {
    switch(action.type){
        case FETCH_MOVIE_DETAILS:
            return {
                item: action.payload
            }
        default:
            return state
    }
}