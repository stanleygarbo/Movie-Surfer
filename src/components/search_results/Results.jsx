import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import fetchSearch from '../../actions/searchAction'
import {motion} from 'framer-motion'
import { useRouteMatch,useHistory } from 'react-router-dom'

const searchResultsVariants={
    hidden:{
        x:'100vw'
    },
    visible:{
        x:'0',
        transition:{
            type:'tween',
            duration:.4,
        }
    },
    exit:{
        x:'100vw',
        transition:{
            type:'tween',
            duration:.4,
        }
    }
}

const Results = ({searchResults,fetchSearch}) => {
    const match=useRouteMatch()
    const history=useHistory()

    useEffect(() => {
        fetchSearch(match.params.query)
    }, [fetchSearch,match.params.query])

    return (
        <motion.div className='search-results'
            variants={searchResultsVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <p>Showing Results for {match.params.query}</p>
            <div className='results-container'>
                {searchResults.results && searchResults.results.map(result=>
                    <div className='result' key={result.id} onClick={()=>history.push(`/preview/${result.id}/movie`)}
                        style={{
                            backgroundImage:`url(https://image.tmdb.org/t/p/w500/${result.poster_path})`
                        }}
                    >
                        <pre>{result.poster_path ? null:'No Image' }</pre>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

const mapStateToProps = (state) => ({
    searchResults: state.searchResults.items
})

export default connect(mapStateToProps,{fetchSearch})(Results)
