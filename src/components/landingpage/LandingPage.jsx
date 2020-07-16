import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {motion} from 'framer-motion'
import MoviesRow from './MoviesRow'
import fetchNetflixOriginals from '../../actions/netflixOriginalsAction'
import fetchTrending from '../../actions/trendingAction'
import fetchUpcomingMovies from '../../actions/upcomingMoviesAction'
import fetchPopularMovies from '../../actions/popularMoviesAction'
import fetchNowPlayingMovies from '../../actions/nowPlayingMoviesAction'
import fetchTopRatedMovies from '../../actions/topRatedMoviesAction'
import Banner from './Banner'

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

const LandingPage = ({movies,actionCreators}) => {

    useEffect(() => {
        actionCreators.fetchNetflixOriginals()
        actionCreators.fetchTrending()
        actionCreators.fetchUpcomingMovies()
        actionCreators.fetchPopularMovies()
        actionCreators.fetchNowPlayingMovies()
        actionCreators.fetchTopRatedMovies()
    }, [actionCreators]);

    return (
            <motion.div className='landing-page'
                variants={landingPageVariants}
                initial='hidden'
                animate='visible'
                exit={{x:'-100%'}}
            >
                <Banner />
                <MoviesRow movies={movies?.netflixOriginals} category='Netflix Originals' type='tv' />
                <MoviesRow movies={movies?.trending} category='Trending' type='movie' />
                <MoviesRow movies={movies?.upcoming} category='Upcoming' type='movie' />
                <MoviesRow movies={movies?.popular} category='Popular' type='movie' />
                <MoviesRow movies={movies?.nowPlaying} category='Now Playing' type='movie' />
                <MoviesRow movies={movies?.topRated} category='Top Rated' type='movie' />
                <div className='contact__btn'><a href='https://stanleygarbo.netlify.app'>MADE BY STANLEY GARBO</a></div>
            </motion.div>
    )
}

const mapStateToProps=(state)=>{
    return {
        movies: {
            netflixOriginals: state.netflixOriginals.items,
            trending: state.trending.items,
            upcoming: state.upcoming.items,
            popular: state.popular.items,
            nowPlaying: state.nowPlaying.items,
            topRated: state.topRated.items
        }
    }
}

function mapDispatchToProps(dispatch) {
    const actionCreators={
        ...bindActionCreators({ 
            fetchNetflixOriginals,
            fetchTrending,
            fetchUpcomingMovies,
            fetchPopularMovies,
            fetchNowPlayingMovies,
            fetchTopRatedMovies 
        },dispatch)
    }
    return {
        actionCreators
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage)
