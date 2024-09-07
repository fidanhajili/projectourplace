import React from 'react'
import './Pans.css'


const Pans:React.FC = () => {
  return (
  <>
  <h1 className='text-center panstext py-lg-4'>Designed for Everything and Always</h1>
  <div className="colors py-md-4">
    <h4 className="pan1">1</h4>
    <h4 className="pan2">2</h4>
    <h4 className="pan3">3</h4>
    <h4 className="pan4">4</h4>
    <h4 className="pan5">5</h4>
    <h4 className="pan6">6</h4>
    <h4 className="pan7">7</h4>
    <h4 className="pan8">8</h4>
  </div>
  <div className="pans-img py-lg-4">
    <img className='img-fluid' src="/images/pans/pan.svg" alt="" />
  <article className="text1" data-aos="fade-right">Modular lid to <br /> release & trap steam</article>
  <article className="text2" data-aos="fade-right">2 easy-pour <br /> spouts</article>
  <article className="text3" data-aos="fade-right">Exclusive, ceramic <br /> nonstick made without <br /> PFOAs & PTFEs</article>
  <article className="text4" data-aos="fade-left">Beechwood spatula & <br /> built-in spoon rest</article>
  <article className="text5" data-aos="fade-left">Nesting Steamer Basket & <br /> Colander</article>
  <article className="text6" data-aos="fade-left">Stay Cool Handle</article>
  
  
  </div>
  </>
  )
}

export default Pans