import {FETCH_TOP_RATED_MOVIES} from './types'
import axios from 'axios'

const fetchTopRatedMovies = () => async dispatch =>{
    const result = await axios(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    )
    dispatch({
        type:FETCH_TOP_RATED_MOVIES,
        payload:result.data
    })
}

export default fetchTopRatedMovies
