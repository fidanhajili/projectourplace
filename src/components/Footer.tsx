import React from 'react'
import './Footer.css'



const Footer:React.FC = () => {
  return (
<footer className="footer">
<div className="container">
    <div className="row">
  <div className="col-12 col-md-6 col-lg-7">
  <h5 className='py-md-2'>Keep in touch ☺</h5>
        <h6 className='py-md-3'>Be the first to know about new collections, special events, and what’s going on at Our Place.</h6>
   <div className="newsletter">
    <input type="email" placeholder='email'/>
    <button>Submit</button>
   </div>
    </div>

  <div className="col-12 col-md-6 col-lg-5">
   <div className="row">
    <div className="col-4">
        <h6>SHOP</h6>
        <a href="">Main Plates</a>
        <a href="">Side Bowls</a>
        <a href="">Drinking Glasses</a>
        <a href="">Family Dinner</a>
        <a href="">Bundle</a>
    </div>

    <div className="col-4">
        <h6>COMPANY</h6>
        <a href="">Mission</a>
        <a href="">FAQs</a>
        <a href="">Contact Us</a>
        <a href="">Returns</a>
        <a href="">Bulk Orders</a>
        <a href="">Bundle</a>
    </div>

    <div className="col-4">
        <h6>SOCIAL</h6>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
      
    </div>

    <div className="you-are-in">

        <img src="/images/footer/usa.svg" alt="" />
        <img src="/images/footer/canada.svg" alt="" />
    </div>
   </div>
   
    </div>
     </div>
</div>
</footer>
  )
}

export default Footer 