import {FETCH_DETAILS} from './types'
import axios from 'axios'

function fetchDetails (type,id){
    return async function(dispatch){
        const res = await axios(
            `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        ) 
        dispatch({
            type: FETCH_DETAILS,
            payload: res.data
        })
    }
}

export default fetchDetails