import React from 'react'
import Partner from './Partner'
import partnersAbout from '../partners.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';



const Partners:React.FC = () => {
  return ( 
    <>
    <h4 className='text-uppercase text-center pt-5 pb-1'>"Doing the job of eight traditional cookware <br />pieces"</h4>
<div className='d-flex justify-content-between py-5 container'>

<Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }} 
          modules={[Autoplay]}
        breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
        }}
       
        className="mySwiper"
      >




{
    partnersAbout.map(birMelumat=> (
       <SwiperSlide> <Partner partnerImage={birMelumat.partner_logo} /> </SwiperSlide>
    ))
}
</Swiper>
</div>
</>
  )
}

const props = {
    partnerImage:'images/img.svg'
}
props.partnerImage

export default Partners