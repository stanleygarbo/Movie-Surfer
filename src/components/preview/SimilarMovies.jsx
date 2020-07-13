import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {useHistory} from 'react-router-dom'

const SimilarMovies = ({similarMovies}) => {

    const history = useHistory()

    return (
        <div className='preview__similar__movies__container'>
            <h1 className='preview__similar__movies__container__name'>Similar Movies</h1>
            <Swiper className='preview__similar__movies' 
            spaceBetween={20}
            freeMode= {true}
            slidesPerView={'auto'}
            direction={'horizontal'}
            >
                {similarMovies?.map(similarMovie=>
                    <SwiperSlide className='preview__similar__movie' key={similarMovie.id}
                    onClick={()=>history.push(`/preview/${similarMovie.id}`)} 
                    >
                        <div className='preview__similar__movie__image' 
                        style={{
                            backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${similarMovie.backdrop_path || similarMovie.poster_path})`
                        }}
                        ></div>
                        <h2 className='preview__similar__movie__title'>
                            {similarMovie.title || similarMovie.original_title || similarMovie.name}
                        </h2>
                    </SwiperSlide>
                )}      
            </Swiper>
        </div>
    )
}

export default SimilarMovies
