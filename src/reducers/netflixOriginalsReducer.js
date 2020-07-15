import {FETCH_NETFLIX_ORIGINALS} from '../actions/types'

const initState = {
    items: []
}

export default function(state=initState,action){
    switch(action.type){
        case FETCH_NETFLIX_ORIGINALS:
            return {
                items:action.payload
            }
        default:
            return state
    }
}