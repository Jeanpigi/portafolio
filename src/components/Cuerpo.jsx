import React, { Component} from 'react';

import '../assets/styles/App.scss';


import Deca from '../assets/static/Deca.png';
import Derivada from '../assets/static/Derivada.png';
import Moon from '../assets/static/Moon.png';
import Novillo from '../assets/static/Novillo.png';

import FotoProfesional from '../assets/static/profesional.jpg';

import Background from '../assets/static/services.jpg';

//Style of Service
const styleMyServices = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    display:'flex',
    flexDirection: 'column',
    opacity: '0.8',
    backgroundBlendMode: 'multiply',
    backgroundColor: 'var(--clr-dark)',
    color: 'var(--clr-light)',
    margin:'0',
    textAlign: 'center'
}

const styleServices = {
    marginBottom: '4em',
    marginTop: '4em'
}

const styleService = {
    flexDirection:'column'
}

const styleBtn = {
    padding: '.5em 3.5em',
    background: 'var(--clr-accent)',
    color: 'var(--clr-dark)',
    textDecoration: 'none',
    cursor:'pointer',
    fontSize: '.8rem',
    textTransform: 'uppercase',
    letterSpacing: 'var(--fw-bold)',
    transition: 'transform 200ms ease-in-out',
    alignSelf: 'center'

}

const styleAboutMe = {
    maxWidth: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column'
}



const styleTitle = {
    fontWeight: 'var(--fw-reg)',
    marginBottom: '0.25em',
    textAlign:'center',
}

const styleSubtitle = {
    background: 'var(--clr-accent)',
    height: '100%',
    width:'100%',
    margin: 'auto',
    textAlign: 'center',
    fontSize: 'var(--fs-h3)'
}

const styleFotoProfesional = {
    alignSelf: 'center',
    boxShadow: 'var(--bs)'
}

const styleMyWork = {
    backgroundColor: 'var(--clr-dark)',
    color: 'var(--clr-light)',
    display: 'grid',
    gridTemplateColumns: '1rf',
}

const stylePortafolios = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'minmax(50%, auto)',
    gap: '1em'
}

const stylePortafolio = {
    display: 'grid',
    gridTemplateColumns: '1rf',
}

class Cuerpo extends Component {
    render() {
        return (
            <div>
                <section className="my-services" style={styleMyServices}>
                    <h2 className="section__title section__title--services" style={styleTitle}>What I do</h2>
                    <div className="services" style={styleServices}>
                        <div className="service" style={styleService}>
                            <h3> Development </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="service" style={styleService}>
                            <h3> Design </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="service" style={styleService}>
                            <h3> Unity </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <a className="btn" style={styleBtn} href="https://gitlab.com/JeanPiBot">My Work</a>
                </section>
                <section style={styleAboutMe}>
                    <h2 style={styleTitle}> Who I am</h2>
                    <p style={styleSubtitle}>Ingeniero de Sistemas</p>
                    <div className="about-me__body">
                        <p>I am a Web Developer with two years of experiences in education. I am Looking to collaborate in any position about creating web sites due my reaches and goals got. Beside I have certificates of Platzi which is a platform Education online. It has Many courses as programming, design, marketing, web development, Frontend, Backend, Mobile dev, UX, etc.</p>
                        <p>I like to learn about Technology. My interests are Nature, Sports, Technology, Books, Psychology, Music, Movies and travel. At the moment, I pursue new opportunities that can improve as person and professional. Whether you need to reach me either through this profile or by phone at +57 3185274636.</p>
                    </div>

                    <img className="about-me-image" src={FotoProfesional} style={styleFotoProfesional} alt="Jean Pierre" height={400} width={300}/>
                </section>
                <section className="my-work" style={styleMyWork}>
                    <h2  style={styleTitle}>My Work</h2>
                    <div style={stylePortafolios}>
                        <div style={stylePortafolio}>
                            <a target="_blank" href="http://jeanpibot.gitlab.io/novillo/index.html" className="portafolio__item">
                                <img src={Novillo} alt="Novillo" className="portafolio__img"/>
                            </a>
                            <p>Proyecto sobre una empresa comercializadora de carnes 100% Caqueteña</p>
                        </div>
                        <div className="portafolio" style={stylePortafolio}>
                            <a target="_blank" href="https://jeanpibot.gitlab.io/Deca/" className="portafolio__item">
                                <img src={Deca} alt="Deca" className="portafolio__img"/>
                            </a>
                            <p>Proyecto sobre un sitio web en Educación y Cultura Ambiental de la Universidad de la Amazonia de Florencia Caquetá</p>
                        </div>
                        <div className="portafolio" style={stylePortafolio}>
                            <a target="_blank"  href="https://derivada-1xa823ldf.now.sh/Derivada.html" className="portafolio__item">
                                <img src={Derivada} alt="Derivada" className="portafolio__img"/>
                            </a>
                            <p>Proyecto busca enseñar los conceptos básicos de la derivada a los ingenieros de sistemas del primer semestre de la Universidad de la Amazonia</p>
                        </div>
                        <div className="portafolio" style={stylePortafolio}>
                            <a target="_blank"  href="https://project-dpv32g81p.now.sh/" className="portafolio__item">
                                <img className="" src={Moon} alt="Moon" className="portafolio__img"/>
                            </a>
                            <p>Proyecto se realizo con el objetivo de practicar conocimientos básicos web.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Cuerpo;
