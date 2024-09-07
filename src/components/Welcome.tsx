import React from 'react'
import './Welcome.css'



const Welcome: React.FC = () => {
    return (
        <div className="welcome py-3">
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 col-md-6 text-center"  data-aos="fade-up-right">
                        <h1 className="welcome-h1">
                        Welcome To Our <br /> Place
                        </h1>
                    </div>
                    <div className="col-12 col-md-6 text2"  data-aos="fade-up-left">
                       <article className="welcome-text">
                       At Our Place, we believe in the power of home-cooking to bring people together. Our collections are new heirlooms from the cultures and places that make up the fabric of the modern multi-ethnic kitchen. We design thoughtfully, source ethically, and produce sustainably because what we make is connected to one another and the earth we share.
                       </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome