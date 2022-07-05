import React from 'react';
import '../hero/hero.css'

function Hero(){
   return(
    <div className='hero' id='hero'>
        <div className="content">
            <h1>R&N Groundworks and Utilities</h1>
            <h2>
                Providing groundworks, coldwater plumbing, landscaping and more.
            </h2>
            <a href="#form"><button className="btn-hero">Contact Me</button></a>
        </div>
    </div>
   )
}

export default Hero;