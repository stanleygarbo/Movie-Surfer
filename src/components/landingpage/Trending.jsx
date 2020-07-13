import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import fetchTrending from '../../actions/trendingAction'
import {useHistory} from 'react-router-dom' 

const Trending = ({fetchTrending,trending}) => {
    const history=useHistory()
    const [banner,setBanner] = useState()
    
    useEffect(()=>{
        fetchTrending()
        setBanner(Math.floor(Math.random()* 19))
    },[fetchTrending])

    return (
        <div className='trending-container'
        style={{
            backgroundImage:trending.results && `url(https://image.tmdb.org/t/p/w1280/${trending.results[banner]?.backdrop_path})`,
        }} 
        >
            <div className='trending'>
                {trending.results && 
                    <div className='trending-info'>
                        <h1>{trending.results[banner]?.name || trending.results[banner]?.title}</h1>
                        <h2>{trending.results[banner]?.overview}</h2>
                        <pre>{trending.results[banner]?.first_air_date}</pre>
                        <button onClick={()=>history.push(`preview/${trending.results[banner].id}`)}>View</button>
                    </div>
                }
            </div>
            <div className='other-trending-wrapper'>
                <h1>Trending</h1>
                <div className="other-trending-container" id='trend'>
                    {trending.results && trending.results.map(show=>
                        <div className='other-trending' key={show.id} onClick={()=>history.push(`preview/${show.id}`)}
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${show.poster_path})`,
                            }}
                        >
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    trending:state.trending.items
})
export default connect(mapStateToProps,{fetchTrending})(Trending)
