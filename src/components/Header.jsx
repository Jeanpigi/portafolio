import React, {Component} from 'react';

import '../assets/styles/App.scss';

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
    //los estilos aplicados para este componente
    const styleTitle = {
      fontWeight: 'var(--fw-reg)',
      marginBottom: '0.25em',
      strong: {
        display: 'block'
      }
    }

    

    const styleIntro = {
      display: 'flex',
      flexDirection: 'column',
      height: '700px'
    }
    
    const styleSubtitle = {
      background: 'var(--clr-accent)',
      height: '100px',
      width:'100%',
      margin: 'auto',
      textAlign: 'center',
      alignItems: 'baseline',
      fontSize: 'var(--fs-h3)'
    }

    const styleImg = {
        alignSelf: 'center',
        paddingTop: '10px',
        boxShadow: 'var(--bs)'
    }

    return (
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" height={50}/>
          </div>
          <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
          </button>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="">Home</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="">My services</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="">About me</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="">My work</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="intro" style= {styleIntro}>
          <h1 style={styleTitle} >
            Hi, I am <strong>{this.formatName(admin)}</strong>
          </h1>
          <p style={styleSubtitle}>Frontend Developer</p>
          <img className="intro__img" src={Jp} alt="a picture of Jean Pierre" style={styleImg} height={400} width={400}/>
        </section>
      </div>
    )
  }
}


export default Header;
