import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

const Genres = ({genres}) => {
    return (
        <Swiper className='genres'
            freeMode={true}
            slidesPerView={'auto'}
            direction={'horizontal'}
        >
            {genres?.map(genre=>
                <SwiperSlide key={genre.id} className='genre'>
                    <h3 className='genre__name'>{genre.name}</h3>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default Genres
