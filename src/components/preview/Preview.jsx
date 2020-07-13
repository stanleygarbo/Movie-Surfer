import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import fetchDetails from '../../actions/detailsAction'
import fetchSimilarMovies from '../../actions/similarMoviesAction'
import {useRouteMatch} from 'react-router-dom'
import {motion} from 'framer-motion'
import './previewStyle.css'
import SimilarMovies from './SimilarMovies'
import Genres from './Genres'
import Ratings from './Ratings'


const previewVariants={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1
    },
    exit:{
        opacity:0
    }
}

const Preview = ({movie,fetchDetails,fetchSimilarMovies}) => {
    const match=useRouteMatch()

    useEffect(() => {
        window.scrollTo(0,0)
        console.log(window.scrollY)
        fetchDetails(match.params.id)
        fetchSimilarMovies(match.params.id)
    }, [fetchDetails,fetchSimilarMovies,match.params.id])


    return (
        <motion.div className='preview'
        variants={previewVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        >   
        {console.log(movie.details)}
            <div className='preview-banner'
                style={{
                    backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${movie?.details.backdrop_path || movie?.details.poster_path})`
                }}
            >
                {
                    movie.similar.results?.length && <SimilarMovies similarMovies={movie.similar?.results} />
                }
            </div>
            <h1 className='preview-title'>{movie?.details.original_title || movie?.details.title || movie?.details.name}</h1>
            <Genres genres={movie.details.genres} />
            <Ratings ratings={movie.details.vote_average} />
            <h1 className='preview-description'>{movie?.details.overview}</h1>
        </motion.div>
    )
}

const mapStateToProps=(state)=>{
    return {
        movie:{
            details:state.details.item,
            similar:state.similar.items
        }
    }
}

export default connect(mapStateToProps,{fetchDetails,fetchSimilarMovies})(Preview)
