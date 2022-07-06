import React from 'react';
import '../projects_section/projects_section.css'
import Projects from '../projects/projects'
import { Link } from "react-router-dom"; 
import { projectData } from '../../data/pjroject_data';

function ProjectsSection() {
    return (
        <div className='proj-container' id='projects'>
            <h1>Recent Projects</h1>
            <h3>Click through the images below to view some of our recent work.</h3>
            <div className='carousel'>
                <Projects slides={projectData} />
            </div>
            <Link to="/pastworks" className='p-works'>
                <button className='proj-btn'>
                    View More Work
                </button>
            </Link>

        </div>
    );
}

export default ProjectsSection;