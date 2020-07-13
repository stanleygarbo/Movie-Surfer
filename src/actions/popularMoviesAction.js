import { FETCH_POPULAR_MOVIES } from './types';
import axios from 'axios'

const fetchPopularMovies = () => async dispatch => {
    const result = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
    );
    dispatch({
        type:FETCH_POPULAR_MOVIES,
        payload:result.data
    });
}

export default fetchPopularMovies