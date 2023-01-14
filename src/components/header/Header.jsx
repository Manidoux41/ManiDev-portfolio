import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/avatar.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Manfred Parbatia</h1>
                <h5 className="text-light">FullStack Developper</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="mon avatar" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;