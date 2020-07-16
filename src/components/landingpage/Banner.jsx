import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import fetchNetflixOriginals from '../../actions/netflixOriginalsAction'
import {useHistory} from 'react-router-dom' 
import {truncateString} from '../../scripts/usefulFunctions'

const Trending = ({fetchNetflixOriginals,netflixOriginals}) => {
    const history=useHistory()
    const [banner,setBanner] = useState()
    
    useEffect(()=>{
        fetchNetflixOriginals()
        setBanner(Math.floor(Math.random()* 19))
    },[fetchNetflixOriginals])

    return (
        <div className='banner-container'
        style={{
            backgroundImage:netflixOriginals.results && `url(https://image.tmdb.org/t/p/w1280/${netflixOriginals.results[banner]?.backdrop_path})`,
        }} 
        >
            <div className='banner'>
                {netflixOriginals.results && 
                    <div className='banner-info'>
                        <h1>{netflixOriginals.results[banner]?.name || netflixOriginals.results[banner]?.title}</h1>
                        <button onClick={()=>history.push(`preview/${netflixOriginals.results[banner].id}/tv`)}>View</button>
                        <h2>{truncateString(netflixOriginals.results[banner]?.overview,160)}</h2>
                        <pre>{netflixOriginals.results[banner]?.first_air_date}</pre>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    netflixOriginals:state.netflixOriginals.items
})
export default connect(mapStateToProps,{fetchNetflixOriginals})(Trending)
