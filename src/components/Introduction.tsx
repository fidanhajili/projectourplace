import React from 'react'
import './introduction.css'
import { ReactTyped } from "react-typed";

const Introduction:React.FC = () => {
  return (
    <div className='introduction d-flex position-relative'>
        <div className="introduction-text">
            <ReactTyped
      strings={[
        "Meet The Always Pan",
        "Meet The Always Pork",
        "Meet The Always Spoon",
      ]}
      className='h5'
      typeSpeed={40}
      backSpeed={50}
      loop
    >

    </ReactTyped>
            <h2>Your new <br /> <span className='text-decoration-underline'> skillet</span></h2>
     <button className="introduction-btn my-5">Shop the Always Pan</button>
     
     
        </div>
    </div>
  )
}

export default Introduction