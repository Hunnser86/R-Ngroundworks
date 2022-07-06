import React from 'react'
import {cardData} from '../../data/cardData'
import { Link } from 'react-router-dom';
import './about.css'


function About() {
  
  return (
    <div className='section' id='about'>
      <h1>About Us</h1>
      <h5>R & N started in 2021.  With 40 years combined experience,
        Nick and Jake provide high quality services from everything below 
         ground, above and beyond!        
     </h5>
      <div>
        <div className='card-wrapper'>
        {cardData.map((card) => {
          return (
            
            <div className="card">
              <h1>{card.title}</h1>
              <img src={card.image} alt="" />
              <p>{card.paragraph}</p>
              <Link to="/pastworks">
                <button className='card-btn'>Find out More</button>
              </Link>             
            </div>

          )

        })}
        </div>
      </div>
    </div>
  );
}

export default About