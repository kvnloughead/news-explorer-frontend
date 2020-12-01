import React from "react";

import authorImage from '../../images/kevin.png'

function About() {
  return (
    <section className='about'>
      <img className='about__image' src={authorImage} alt='Author of the website' />
      <div className='about__text-container'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__text'>The author of this page currently does not feel like talking about himself. Please check back later. </p>
        <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </section>
  );
}

export default About;