import React, {Component} from 'react';

import '../assets/styles/Footer.scss';

import Facebook from '../assets/static/facebook.svg';
import Github from '../assets/static/github.svg';
import Gitlab from '../assets/static/gitlab.svg';
import Instagram from '../assets/static/instagram.svg';




class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <a target="_blank" href="mailto:arenaspierre@protonmail.com" >arenaspierre@protonmail.com</a>
                <ul className="socialList">
                    <a target="_blank" href="https://www.facebook.com/JePiGi">
                        <img src={Facebook} alt="facebook" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/jean_pierre_giovanni/">
                        <img src={Instagram} alt="instagram"/>
                    </a>
                    <a target="_blank" href="https://github.com/Jeanpigi">
                        <img src={Github} alt="github"/>
                    </a>
                    <a target="_blank" href="https://gitlab.com/JeanPiBot">
                        <img src={Gitlab} alt="gitlab"/>
                    </a>
                </ul>
            </footer>
        )
    }
}
export default Footer;
