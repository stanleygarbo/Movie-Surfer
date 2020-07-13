import { FETCH_SEARCH } from './types';
import axios from 'axios'

const fetchSearch = (query) => async dispatch => {
    const result = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`,
    );
    dispatch({
        type:FETCH_SEARCH,
        payload:result.data
    });
}

export default fetchSearch