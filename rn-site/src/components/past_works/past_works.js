import React from 'react'
import Nav2 from '../Navbar2/navbar2'
import '../jobCards/jobCard.css'
import '../past_works/past_works.css'

const PastWorks = () => {
  return (

    <div className='works'>
      <Nav2 />
      <h1>Past Works</h1>
      <h3>Here are just a few of the jobs we have already worked on</h3>
      <div className="card-box">
        <div className="job-card left-box">
          <img className='card-pic' src="img/bespoke-fencing-after.jpg" alt="" />
          <h2>Bespoke Fencing</h2>
          <div className="details">
            <p className='job-type'>
              <strong>Job Type: </strong>
              <br />
              Landscaping/Fencing
            </p>
            <hr />
            <p>We created this bespoke fencing, using scaffold boards and concrete fence posts</p>
          </div>
        </div>
        <div className="job-card left-box">
          <img className='card-pic' src="img/concrete-pad-cropped.jpg" alt="" />
          <h2>Concrete Pad</h2>
          <div className="details">
            <p className='job-type'>
              <strong>Job Type: </strong>
              <br />
              Groundworks/Utilities
            </p>
            <hr />
            <p>
              This is a concrete pad we made for a farm, ready to build on,
              complete, with a cold water supply running beneath it.  We also added drainage to the septic tank 
              which we also fitted.
            </p>
          </div>
        </div>
        <div className="job-card right-box">
          <img className='card-pic' src="img/disabled-access-2.jpg" alt="" />
          <h2>Mobility Scooter Parking</h2>
          <div className="details">
            <p className='job-type'>
              <strong>Job Type: </strong>
              <br />
              Landscaping
            </p>
            <hr />
            <p>
              A customer needed a place to park their mobility
              scooter, so we cleared, levelled and resurfaced the area.
            </p>
          </div>
        </div>
        <div className="job-card right-box">
          <img className='card-pic' src="img/driveway-2-after.jpg" alt="" />
          <h2>Patio Makeover</h2>
          <div className="details">
            <p className='job-type'>
              <strong>Job Type: </strong>
              <br />
              Landscaping/Fencing
            </p>
            <hr />
            <p>We replaced this customer's block paving, from a dull faded orange, 
              to a sleek black slabs, renewed the fencing and created a raised garden area.
            </p>
          </div>
        </div>
        <div className="job-card left-box">
          <img className='card-pic' src="img/garden-repair-after2.jpg" alt="" />
          <h2>Garden Rescue</h2>
          <div className="details">
            <p className='job-type'>
              <strong>Job Type: </strong>
              <br />
              Landscaping
            </p>
            <hr />
            <p>
              A customer had some issues with the work that had been
              left by another firm, so we came to the rescue and re-made and 
              finished the work for them.  We levelled and topsoiled the area 
              to give them the biggest space possible.
            </p>
          </div>
        </div>
        <div className="job-card left-box">
          <img className='card-pic' src="img/re-enforced-grass-4.jpg" alt="" />
          <h2>Re-enforced Grass</h2>
          <div className="details">
            <p className='job-type'>
              <strong>Job Type: </strong>
              <br />
              Landscaping
            </p>
            <hr />
            <p>
              A school needed an area of land re-enforced, ready for grass, but 
              also allows access for vehicles.
            </p>
          </div>
        </div>
        <div className="job-card right-box">
          <img className='card-pic' src="img/trenchless-dig-2.jpg" alt="" />
          <h2>Trenchless Dig</h2>
          <div className="details">
            <p className='job-type'>
              <strong>Job Type: </strong>
              <br />
              Groundworks
            </p>
            <hr />
            <p>
              A customer required a electric supply
              going from the house, to the far end of the garden.
              We not only laid the pipe, but we did it without having to 
              dig a trench the entire length of the garden. We use this 
              technique for any utility.
            </p>
          </div>
        </div>
        <div className="job-card right-box">
          <img className='card-pic' src="img/tv-3.jpg" alt="" />
          <h2>Built in TV Unit</h2>
          <div className="details">
            <p className='job-type'>
              <strong>Job Type: </strong>
              <br />
              Building
            </p>
            <hr />
            <p>
              A customer wanted a built in TV unit, 
              with a firepace beneath, complete with some funky purple LED 
              lights.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PastWorks