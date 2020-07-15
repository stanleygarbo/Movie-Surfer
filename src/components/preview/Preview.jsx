import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchMovieDetails from '../../actions/movieDetailsAction'
import fetchSimilarMovies from '../../actions/similarMoviesAction'
import fetchTvShowDetails from '../../actions/tvShowDetailsAction'
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

const Preview = ({movie,tvShow,actions}) => {
    const [toBePreviewed,setToBePreviewed] = useState()
    const match=useRouteMatch()

    useEffect(() => {
        window.scrollTo(0,0)
        if(match.params.type === 'movie'){
            actions.fetchMovieDetails(match.params.id)
            actions.fetchSimilarMovies(match.params.id)
        }
        else{
            actions.fetchTvShowDetails(match.params.id)
        }
    }, [actions,match.params])

    useEffect(()=>{
        console.log('mortf')
        setToBePreviewed(match.params.type === 'movie' ? movie : tvShow )
    },[movie,tvShow,match.params.type])

    return (
        <motion.div className='preview'
        variants={previewVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        >   
            <div className='preview-banner'
                style={{
                    backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${toBePreviewed?.details?.backdrop_path || toBePreviewed?.details?.poster_path})`
                }}
            >
                {
                    toBePreviewed?.similarMovies?.results?.length && <SimilarMovies similarMovies={toBePreviewed?.similarMovies?.results} />
                }
            </div>
            <h1 className='preview-title'>{toBePreviewed?.details?.original_title || toBePreviewed?.details?.title || toBePreviewed?.details?.name}</h1>
            <Genres genres={toBePreviewed?.details?.genres} />
            <Ratings ratings={toBePreviewed?.details?.vote_average} />
            <h1 className='preview-description'>{toBePreviewed?.details?.overview}</h1>
        </motion.div>
    )
}

const mapStateToProps=(state)=>{
    return {
        movie:{
            details:state.movieDetails.item,
            similar:state.similarMovies.items
        },
        tvShow:{
            details:state.tvShowDetails.item,
            // similarTvShow:state.similarMovies.items
        }
    }
}

const mapDispatchToProps=(dispatch)=>{
    const actions = {
        ...bindActionCreators({
            fetchMovieDetails,
            fetchSimilarMovies,
            fetchTvShowDetails
        },dispatch)
    }
    return{
        actions
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Preview)
