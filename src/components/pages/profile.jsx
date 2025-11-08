import React from 'react'
import photo from'./assets/profile.jpg'
import './pages.css'

const Profile = () => {
    React.useEffect(()=>{
        document.title = "Emon Mahmud | Portfolio"
        document.icon={photo}
    })
    return(
        <div className='Profile'>
                <div className='Header'>
                    <img src= {photo} alt="profile" width = "150"/>
                    <div className='Info'>
                        <h2>Emon Mahmud</h2>
                        <p>Student, Department of Computer Science & Engineering, IUBAT</p>
                        <p>
                            <a href="mailto:emonmahmud.cse@gmail.com">emon mahmud dot cse </a> <span className='Line'></span> Phone: +8801949771731
                        </p>
                            <a href="https://github.com/emonmah">GitHub </a>
                            <span className='Line'></span>
                            <a href="https://linkedin.com/in/emon-mahmud/"> LinkedIn </a>
                            <span className='Line'></span>
                            <a href="https://codeforces.com/profile/Agantuk"> Codeforces</a>
                            <p className='Address'>Address: H#80, Road#02, Dhakkinkhan, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='NavBar'>
                    <nav className='Nav'>
                    <button className='Toggle'>☰</button>
                    <div>
                    <a href="#summary">Summary</a>
                    <a href="#education">Education</a>
                    <a href="#thesis">Thesis</a>
                    <a href="#projects">Projects</a>
                    <a href="#contacts">Contests</a>
                    <a href="#extra">Extra</a>
                    <a href="#reference">References</a>
                    </div>
                    
                </nav>
                </div>
                    
            </div>
    );
}

export default Profile;