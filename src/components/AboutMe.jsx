import React, { Component } from 'react';

import FotoProfesional from '../assets/static/profesional.jpg';

import '../assets/styles/AboutMe.scss';

class AboutMe extends Component {
    render(){
        return (
            <div>
                <section className="section" id="about-me">
                    <h2 className="section__title"> Who I am</h2>
                    <p className="section__subtitle">Ingeniero de Sistemas</p>
                    <div className="about-me__body">
                        <p>I am a Web Developer with two years of experiences in education. I am Looking to collaborate in any position about creating web sites due my reaches and goals got. Beside I have certificates of Platzi which is a platform Education online. It has Many courses as programming, design, marketing, web development, Frontend, Backend, Mobile dev, UX, etc.</p>
                        <p>I like to learn about Technology. My interests are Nature, Sports, Technology, Books, Psychology, Music, Movies and travel. At the moment, I pursue new opportunities that can improve as person and professional. Whether you need to reach me either through this profile or by phone at +57 3185274636.</p>
                    </div>
                    <figure className="about-me-image">
                        <img  src={FotoProfesional} alt="Jean Pierre"/>
                    </figure>
                </section>
            </div>
        )
    }
}

export default AboutMe