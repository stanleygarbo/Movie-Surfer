import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {useHistory} from 'react-router-dom'

const MoviesRow = ({category,movies,type}) => {
    const history=useHistory()

    return (
        <div className='movies-container'>
            <h1>{category && category}</h1>
            <Swiper className='movies' 
            spaceBetween={20}
            freeMode= {true}
            slidesPerView={'auto'}
            direction={'horizontal'}
            >
                {movies.length !== 0 && movies.results.map(movie=>
                    <SwiperSlide key={movie.id} className='movie' onClick={()=>history.push(`preview/${movie.id}/${type}`)}
                        style={{
                            backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                            backgroundSize: '100% 100%'
                        }} 
                    >
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default MoviesRow
