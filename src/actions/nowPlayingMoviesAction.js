import {FETCH_NOW_PLAYING_MOVIES} from './types'
import axios from 'axios'

const fetchNowPlayingMovies = () => async dispatch => {
    const result = await axios(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
    )
    dispatch({
        type: FETCH_NOW_PLAYING_MOVIES,
        payload: result.data
    })
}

export default fetchNowPlayingMovies