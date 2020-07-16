import {FETCH_SIMILAR} from './types'
import axios from 'axios'

const fetchSimilar = (type,id) => async dispatch =>{
    const result = await axios(
        `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
    )
    dispatch({
        type: FETCH_SIMILAR,
        payload: result.data
    })
}

export default fetchSimilar