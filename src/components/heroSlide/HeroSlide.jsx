import React from 'react'
import { useParams } from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

import { useMoviesList } from '../../app/hooks/useMoviesList'
import "swiper/css"
import './HeroSlide.scss'


const HeroSlide = () => {
	const {isLoading, movies} = useMoviesList()
	SwiperCore.use([Autoplay])

	console.log(movies)
	
	return (
			<>
				<Swiper 
					className="mySwiper"
					modules={[Autoplay]}
					grabCursor={true}
					spaceBetween={0}
					slidesPerView={1}
					autoplay={{delay: 2000}}
					loop={true}
				>
					{movies?.map((movie, index) => (
						<SwiperSlide key={index}>
							<img className='swiper-img' src={movie?.primaryImage?.url} alt="banner" />
						</SwiperSlide>
					))}
				</Swiper>
			</>
	)
}

export default HeroSlide
