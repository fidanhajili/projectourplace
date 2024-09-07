import React from 'react'
import ProductCard from './ProductCard'
import './Curated.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Curated:React.FC = () => {
  return (
   <section className="curated-section container py-5">
    <h4 className='text-center py-lg-4'>From curated essentials to <br /> limited-run editions.</h4>
 <p className='text-center pb-md-4 text-muted'>We make products inspired by traditions – and we're <br /> starting with one you might be familiar with: Dinner.</p>
 <div className="row">

<Swiper
        slidesPerView={3}
        spaceBetween={30}

        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide> <ProductCard shekilProps="/images/curated/product1.png" mehsulBasliq="SIDE BOWLS" setOfProps="SET OF 4" priceProps="45$" descProps="Hand-painted porcelain stackable bowls, designed for plating, eating, and scooping." klassAdi="porcelain"/>
        </SwiperSlide>
        <SwiperSlide> <ProductCard shekilProps="/images/curated/product2.png" mehsulBasliq="DRINKING GLASSES" setOfProps="SET OF 4" priceProps="50$" descProps="Hand-made and stackable. Made from recycled glass and natural sand. Naturally colored, without dyes." klassAdi="glass"/>
        </SwiperSlide>
        <SwiperSlide> <ProductCard shekilProps="/images/curated/product3.png" mehsulBasliq="MAIN PLATES" setOfProps="SET OF 4" priceProps="50$" descProps="Hand-painted porcelain plates, stackable and designed for big appetites."  klassAdi="plate"/>
        </SwiperSlide>
        <SwiperSlide> <ProductCard shekilProps="/images/curated/product4.png" mehsulBasliq="ALWAYS PAN" setOfProps="SET OF 4" priceProps="145$" descProps="Thoughtfully designed to be the perfect size and shape to do the work of eight pieces of traditional cookware."  klassAdi="pan"/>
        </SwiperSlide>


 
 </Swiper>
 </div>
   </section>
  )
}

export default Curated