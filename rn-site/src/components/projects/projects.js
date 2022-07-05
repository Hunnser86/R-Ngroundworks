import React from 'react';
import { projectData } from '../../data/pjroject_data';
import '../../components/projects/projects.css'
import { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'


function Projects({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {projectData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key=
                        {index}>
                        {index === current && (<img src={slide.image} alt="images of projects"
                            className='image' />)}
                    </div>
                )
            })}
        </section>
    );
}

export default Projects;