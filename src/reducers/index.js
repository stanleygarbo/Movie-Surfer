import {combineReducers} from 'redux';
import netflixOriginalsReducer from './netflixOriginalsReducer'
import popularMoviesReducer from './popularMoviesReducer';
import upcomingMoviesReducer from './upcomingMoviesReducer';
import topRatedMoviesReducer from './topRatedMoviesReducer'
import nowPlayingMoviesReducer from './nowPlayingMoviesReducer'
import trendingReducer from './trendingReducer';
import searchReducer from './searchReducer'
import detailsReducer from './detailsReducer'
import similarReducer from './similarReducer'

export default combineReducers({
    netflixOriginals: netflixOriginalsReducer,
    popular: popularMoviesReducer,
    upcoming: upcomingMoviesReducer,
    topRated: topRatedMoviesReducer,
    nowPlaying: nowPlayingMoviesReducer,
    trending: trendingReducer,
    searchResults : searchReducer,
    details: detailsReducer,
    similar:similarReducer
});