import {FETCH_TV_SHOW_DETAILS} from '../actions/types'

const initState = {
    item:{}
}

export default (state=initState,action)=>{
    switch(action.type){
        case FETCH_TV_SHOW_DETAILS:
            return {
                item:action.payload
            }
        default:
            return state
    }
}