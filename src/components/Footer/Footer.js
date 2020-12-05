import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/icons/github-icon.svg';
import facebookIcon from '../../images/icons/facebook-icon.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>© 2020 Supersite, Powered by News API</p>
      <nav className='footer__nav'>
        <Link className='footer__link clickable' to='/'>
          Home
        </Link>
        <a className='footer__link clickable' href='https://practicum.yandex.com/'>
          Practicum by Yandex
        </a>
        <a className='footer__link clickable' href='https://github.com/kvnloughead/'>
          <img class='footer__icon clickable' src={githubIcon} alt=''/>
        </a>
        <a className='footer__link clickable' href='https://www.facebook.com/'>
          <img class='footer__icon clickable' src={facebookIcon} alt=''/>
        </a>
      </nav>
    </footer>
  );
}

export default Footer;