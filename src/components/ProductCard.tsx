import React from 'react'
import './ProductCard.css'


interface MehsullarProps {
    shekilProps:string;
    mehsulBasliq:string;
    setOfProps:string;
    priceProps:string;
    descProps:string;
    klassAdi:string
}


const ProductCard:React.FC<MehsullarProps> = (props) => {
  return (
 <div className="product-card px-md-4 col-12 col-md-6 col-lg-3">
    <div className="bg-krem mx-auto">
<img src={props.shekilProps} alt="" className={props.klassAdi} />
    </div>
    <h4 className='text-center'>{props.mehsulBasliq}</h4>
  <p className='text-center'>  <span id='set'>{props.setOfProps}</span> - <span id='price'>{props.priceProps}</span> </p>
 <p className="desc text-center">{props.descProps}</p>
 
 
 </div>
  )
}

export default ProductCard