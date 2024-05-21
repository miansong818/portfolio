import React from 'react'
import './about.css'
import AboutImg from '../../assets/avatar-2.svg'

const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className='section__title'>About Me</h2>

            <div className="about__container grid">
                <img src={AboutImg} className="about__img"></img>
            </div>
        </section>
    )
}

export default About