import {FETCH_SIMILAR} from '../actions/types'

const initState = {
    items:[]
}

export default (state=initState, action)=>{
    switch(action.type){
        case FETCH_SIMILAR:
            return {
                items: action.payload
            }
        default:
            return state
    }
}