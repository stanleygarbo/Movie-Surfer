import {FETCH_MOVIE_DETAILS} from './types'
import axios from 'axios'

const fetchMovieDetails = (id) => async dispatch =>{
    const result = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    )
    dispatch({
        type:FETCH_MOVIE_DETAILS,
        payload:result.data
    })
}

export default fetchMovieDetails