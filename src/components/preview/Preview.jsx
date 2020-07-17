import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchSimilar from '../../actions/similarAction'
import fetchDetails from '../../actions/detailsAction'
import {useRouteMatch} from 'react-router-dom'
import {motion} from 'framer-motion'
import './previewStyle.css'
import Genres from './Genres'
import Ratings from './Ratings'
import Similar from './Similar'


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

const Preview = ({toBePreviewed,actions}) => {
    const match=useRouteMatch()

    useEffect(() => {
        window.scrollTo(0,0)
            actions.fetchDetails(match.params.type,match.params.id)
            actions.fetchSimilar(match.params.type,match.params.id)
    }, [actions,match.params.id,match.params.type])

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
                    toBePreviewed?.similar?.results?.length !==0 && 
                    <Similar 
                        similars={toBePreviewed?.similar?.results} 
                        type={match.params.type}
                    />
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
        toBePreviewed:{
            details:state.details.item,
            similar:state.similar.items
        }
    }
}

const mapDispatchToProps=(dispatch)=>{
    const actions = {
        ...bindActionCreators({
            fetchDetails,
            fetchSimilar
        },dispatch)
    }
    return{
        actions
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Preview)
