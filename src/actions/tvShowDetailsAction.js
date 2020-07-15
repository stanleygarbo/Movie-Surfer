import {FETCH_TV_SHOW_DETAILS} from './types'
import axios from 'axios'

function fetchTvShowDetails (id){
    return async function(dispatch){
        const res = await axios(
            `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        ) 
        dispatch({
            type: FETCH_TV_SHOW_DETAILS,
            payload: res.data
        })
    }
}

export default fetchTvShowDetails