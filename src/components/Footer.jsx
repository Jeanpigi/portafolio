import React, {Component} from 'react';

import '../assets/styles/App.scss';

import Facebook from '../assets/static/facebook.svg';
import Github from '../assets/static/github.svg';
import Gitlab from '../assets/static/gitlab.svg';
import Instagram from '../assets/static/instagram.svg';

const styleFooter = {
    display:'grid',
    gridTemplateColumns: '1rf',
    gap: '1em',
    background: 'var(--clr-light)',
    padding: '2.5em 0',
    fontSize: 'var(--fs-h3)',
}

const styleCorreo = {
    gridColumn: '1/4',
    fontWeight: 'var(--fw-bold)',
    justifySelf: 'center',
    color: 'var(--clr-dark)'
}

const styleSocialList = {
    gridColumn: '1/4',
    gridAutoRows: 'minmax(10%, auto)',
    justifySelf: 'center'
}


const styleBrands = {
    width: '50px',
    height: '50px',
    margin: '10px'
}

class Footer extends Component {
    render() {
        return (
            <footer style={styleFooter}>
                <a style={styleCorreo} target="_blank" href="mailto:arenaspierre@protonmail.com" >arenaspierre@protonmail.com</a>
                <ul style= {styleSocialList}>
                    <a target="_blank" href="https://www.facebook.com/JePiGi">
                        <img src={Facebook} style={styleBrands} alt="facebook" />
                    </a>
                    <a target="_blank" href="">
                        <img src={Instagram} style={styleBrands} alt="instagram"/>
                    </a>
                    <a target="_blank" href="https://github.com/Jeanpigi">
                        <img src={Github} style={styleBrands} alt="github"/>
                    </a>
                    <a target="_blank" href="https://gitlab.com/JeanPiBot">
                        <img src={Gitlab} style={styleBrands} alt="gitlab"/>
                    </a>
                </ul>
            </footer>
        )
    }
}
export default Footer;
