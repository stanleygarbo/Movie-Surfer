import {FETCH_NOW_PLAYING_MOVIES} from '../actions/types'

const initState={
    items:[]
}

export default (state=initState,action) => {
    switch(action.type){
        case FETCH_NOW_PLAYING_MOVIES:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}