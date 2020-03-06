import React, { Component } from 'react';

import Deca from '../assets/static/Deca.png';
import Derivada from '../assets/static/Derivada.png';
import Moon from '../assets/static/Moon.png';
import Novillo from '../assets/static/Novillo.png';

import '../assets/styles/MyWork.scss';

class Mywork extends Component {
    render() {
        return (
            <div>
                <section className="my-work" id="my-work">
                    <h2 className="section__title">My Work</h2>
                    <div className="section__portafolios">
                        <div className="section__portafolio" >
                            <a target="_blank" href="http://jeanpibot.gitlab.io/novillo/index.html" className="portafolio__item">
                                <img src={Novillo} alt="Novillo" className="portafolio__img"/>
                            </a>
                            <p>Proyecto sobre una empresa comercializadora de carnes 100% Caqueteña</p>
                        </div>
                        <div className="section__portafolio">
                            <a target="_blank" href="https://jeanpibot.gitlab.io/Deca/" className="portafolio__item">
                                <img src={Deca} alt="Deca" className="portafolio__img"/>
                            </a>
                            <p>Proyecto sobre un sitio web en Educación y Cultura Ambiental de la Universidad de la Amazonia de Florencia Caquetá</p>
                        </div>
                        <div className="section__portafolio">
                            <a target="_blank"  href="https://derivada-1xa823ldf.now.sh/Derivada.html" className="portafolio__item">
                                <img src={Derivada} alt="Derivada" className="portafolio__img"/>
                            </a>
                            <p>Proyecto busca enseñar los conceptos básicos de la derivada a los ingenieros de sistemas del primer semestre de la Universidad de la Amazonia</p>
                        </div>
                        <div className="section__portafolio">
                            <a target="_blank"  href="https://project-dpv32g81p.now.sh/" className="portafolio__item">
                                <img src={Moon} alt="Moon" className="portafolio__img"/>
                            </a>
                            <p>Proyecto se realizo con el objetivo de practicar conocimientos básicos web.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Mywork