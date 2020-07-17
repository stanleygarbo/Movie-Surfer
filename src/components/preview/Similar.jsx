import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {useHistory} from 'react-router-dom'
import {truncateString} from '../../scripts/usefulFunctions'

const Similar = ({similars,type}) => {
    const history = useHistory()

    return (
        <div className='preview__similar__container'>
            <h1 className='preview__similar__container__name'>Similar</h1>
            <Swiper className='preview__similar__wrapper' 
            spaceBetween={20}
            freeMode= {true}
            slidesPerView={'auto'}
            direction={'horizontal'}
            >
                {similars?.map(similar=>
                    <SwiperSlide className='preview__similar' key={similar.id}
                    onClick={()=>history.push(`/preview/${similar.id}/${type}`)} 
                    >
                        <div className='preview__similar__image' 
                        style={{
                            backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${similar.backdrop_path || similar.poster_path})`
                        }}
                        ></div>
                        <h2 className='preview__similar__title'>
                            {truncateString(similar.title || similar.original_title || similar.name,9)}
                        </h2>
                    </SwiperSlide>
                )}      
            </Swiper>
        </div>
    )
}

export default Similar
