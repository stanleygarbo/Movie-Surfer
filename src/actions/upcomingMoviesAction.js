import { FETCH_UPCOMING_MOVIES } from './types';
import axios from 'axios'

const fetchUpcomingMovies = () => async dispatch => {
    const result = await axios(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`,
    );
    dispatch({
        type:FETCH_UPCOMING_MOVIES,
        payload:result.data
    });
}

export default fetchUpcomingMovies