import {FETCH_TRENDING} from './types'
import axios from 'axios'


const fetchTrending = () => async dispatch => {
    const result = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    )
    dispatch({
        type:FETCH_TRENDING,
        payload:result.data
    })
}

export default fetchTrending