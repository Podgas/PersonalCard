import React from 'react'
import profile from '../assets/profile_photo.png'

export default function Main(){
    return(
        <div className='info-container'>
            <div className='profile-container'>
                <img src={profile}></img>
            </div>
            <h1 className='info-name'>Josue Huelmo</h1>
            <h2 className='info-position'>Frontend Developer</h2>
            <h3 className='info-web'>josuhuelmo.website</h3>
            <div className='button-container'>
                <a className='btn btn-mail' href='mailto:josu.huelmo@gmail.com'>
                    <i class="fa-solid fa-envelope"></i>Email
                </a>
                <a className='btn btn-linkedin' href='https://www.linkedin.com/in/josue-huelmo/'>
                    <i class="fa-brands fa-linkedin"></i>Linkedin
                </a>
            </div>
            
            <div className='info-section'>
                <h1 className='info-section--title'>About</h1>
                <p className='info-section--text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className='info-section'>
                <h1 className='info-section--title'>Interests</h1>
                <p className='info-section--text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}