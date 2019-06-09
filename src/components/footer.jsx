import React from 'react';
// styles
import './styles/footer.css';
// images
import LogoBlanco from '../images/logo.png';
import LogoNegro from '../images/logo-negro.png'
import githubLogoBlanco from '../images/github-logo.png';
import githubLogoNegro from '../images/logo-negro-github.png';

const Footer = props => {
    let { isNightMode } = props; 
    let backgroundArriba = isNightMode ? 'black' : '#f1f1f2';
    let backgroundAbajo = isNightMode ? '#b024ef' : '#17c7eb';
    let fontColor = isNightMode ? '#ffffff' : '#000000'; 
    return(
        <div className="footer-container">
            {/************* parte de arriba en el footer*************/}
            <div className="arriba-footer" style={{ background: backgroundArriba, color: fontColor}}>
                {/************* arriba y a la izquierda en el footer*************/}
                <div className="arriba-footer-izquierda">
                    <div className="logo-footer">
                        <img src={isNightMode ? LogoBlanco : LogoNegro} alt="img2save"/>
                    </div>
                    <div className="website-name">
                        <p className="font-small family-verdana">img2save &#169; {new Date().getFullYear()}</p>
                    </div>
                </div>
                {/************* arriba y a la derecha en el footer*************/}
                <div className="arriba-footer-derecha">
                    <p className="font-small">acerca de este sito</p>
                    <p className="font-small">Logo made with <a href="https://www.designevo.com/en/" target="_blank" rel="noopener noreferrer" title="Free Online Logo Maker">DesignEvo</a></p>
                    <p className="font-small">Icons made by <a href="https://www.flaticon.com/" title="Flaticon">flaticon</a></p>
                </div>
            </div>
            {/************* parte de abajo en el footer*************/}
            <div className="abajo-footer" style={{ background: backgroundAbajo}}>
                <div className="personal-links-footer">
                    <p className="family-courier color-white font-small">Carlos Martínez</p>
                    <img src={isNightMode ? githubLogoBlanco : githubLogoNegro} alt="github img2save"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;