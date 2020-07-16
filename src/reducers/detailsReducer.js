import {FETCH_DETAILS} from '../actions/types'

const initState = {
    item:{}
}

export default (state=initState,action)=>{
    switch(action.type){
        case FETCH_DETAILS:
            return {
                item:action.payload
            }
        default:
            return state
    }
}