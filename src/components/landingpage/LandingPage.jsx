import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import Trending from './Trending'
import {motion} from 'framer-motion'
import MoviesRow from './MoviesRow'
import fetchUpcomingMovies from '../../actions/upcomingMoviesAction'
import fetchPopularMovies from '../../actions/popularMoviesAction'
import fetchNowPlayingMovies from '../../actions/nowPlayingMoviesAction'
import fetchTopRatedMovies from '../../actions/topRatedMoviesAction'

const landingPageVariants={
    hidden:{
        x:'-100vw'
    },
    visible:{
        x:0,
        transition:{
            type:'tween',
            duration:.4
        }
    },
    exit:{
        x:'-100vw',
    }

}

const LandingPage = ({fetchUpcomingMovies,fetchPopularMovies,fetchNowPlayingMovies,fetchTopRatedMovies,movies}) => {

    useEffect(() => {
        fetchUpcomingMovies()
        fetchPopularMovies()
        fetchNowPlayingMovies()
        fetchTopRatedMovies()
    }, [fetchUpcomingMovies,fetchPopularMovies,fetchNowPlayingMovies,fetchTopRatedMovies]);

    return (
            <motion.div className='landing-page'
                variants={landingPageVariants}
                initial='hidden'
                animate='visible'
                exit={{x:'-100%'}}
            >
                <Trending />
                <MoviesRow movies={movies?.upcoming} category='Upcoming' />
                <MoviesRow movies={movies?.popular} category='Popular' />
                <MoviesRow movies={movies?.nowPlaying} category='Now Playing' />
                <MoviesRow movies={movies?.topRated} category='Top Rated' />
            </motion.div>
    )
}

const mapStateToProps=(state)=>{
    return {
        movies: {
            upcoming: state.upcoming.items,
            popular: state.popular.items,
            nowPlaying: state.nowPlaying.items,
            topRated: state.topRated.items
        }
    }
}

export default connect(mapStateToProps,{fetchUpcomingMovies,fetchPopularMovies,fetchNowPlayingMovies,fetchTopRatedMovies})(LandingPage)
