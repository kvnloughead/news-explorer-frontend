import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/icons/github-icon.svg';
import facebookIcon from '../../images/icons/facebook-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2021 Kevin Loughead, Powered by News API</p>
      <nav className="footer__nav">
        <Link className="footer__link clickable" to="/">
          Home
        </Link>
        <a className="footer__link clickable" href="https://practicum.yandex.com/">
          Practicum by Yandex
        </a>
        <a className="footer__link footer__link_icon-container clickable" href="https://github.com/kvnloughead/">
          <img className="footer__icon clickable" src={githubIcon} alt="Github icon" />
        </a>
        <a className="footer__link footer__link_icon-container clickable" href="https://www.facebook.com/">
          <img className="footer__icon clickable" src={facebookIcon} alt="Facebook icon" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
