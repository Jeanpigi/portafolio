import React, {Component} from 'react';

import '../assets/styles/Header.scss';

import logo from '../assets/static/logo.png';
import Jp from '../assets/static/jp.jpg';

class Header extends Component {
  formatName (admin){
    return admin.name + ' ' + admin.lastName;
  }
  render() {
    const admin = {
      name: 'Jean Pierre Giovanni',
      lastName: 'Arenas Ortiz'
    }
    
    return (
      <div>
          <i className="icon-menu burger-button" id="burger-menu"></i>
          <header className="header">
              <div className="logo">
                <img className="logo__image" src={logo} alt="logo" height={50} />
              </div>
              <nav className="menu">
                  <ul className="menu__list">
                    <li className="menu__item">
                      <a className="menu__link" href="/">Home</a>
                    </li>
                    <li className="menu__item">
                      <a className="menu__link" href="#my-services">My services</a>
                    </li>
                    <li className="menu__item">
                      <a className="menu__link" href="#about-me">About me</a>
                    </li>
                    <li className="menu__item">
                      <a className="menu__link" href="#my-work">My work</a>
                    </li>
                  </ul>
              </nav>
          </header>
          <section className="intro">
              <h1 className="title item">
                Hi, I am <strong>{this.formatName(admin)}</strong>
              </h1>
              <p className="subtitle item">Frontend Developer</p>
              <figure className="intro__img">
                <img src={Jp} alt="a picture of Jean Pierre"/>
              </figure>
              
        </section>
      </div>
    )
  }
}


export default Header;
