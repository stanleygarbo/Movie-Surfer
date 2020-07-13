import {FETCH_UPCOMING_MOVIES} from '../actions/types';

const initialState = {
    items:[],
    item:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_UPCOMING_MOVIES:
            return{
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}