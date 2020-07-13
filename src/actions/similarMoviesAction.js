import { FETCH_SIMILAR_MOVIES } from './types'
import axios from 'axios'

const fetchSimilarMovies = (id) => async dispatch =>{
    const result = await axios (
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
    )
    dispatch({
        type:FETCH_SIMILAR_MOVIES,
        payload:result.data
    })
}

export default fetchSimilarMovies