import { isValidDateValue } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Technology = () =>{
    return(
        <div className='card' id='tech'>
            <h2>Technology</h2>
            <div className='projects-container'>
                <h4 className='project-item'>JavaScript</h4>
                <h4 className='project-item'>React.js</h4>
                <h4 className='project-item'>Node.js</h4>
                <h4 className='project-item'>Express.js</h4>
                <h4 className='project-item'>Flutter</h4>
                <h4 className='project-item'>Java</h4>
                <h4 className='project-item'>MySql</h4>
                <h4 className='project-item'>Firebase</h4>
                <h4 className='project-item'>Git</h4>
            </div>
        </div>
    )
}

export default Technology