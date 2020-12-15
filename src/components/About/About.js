import React from 'react';

import authorImage from '../../images/kevin.png';

function About() {
  return (
    <section className="about">
      <img className="about__image" src={authorImage} alt="Author of the website" />
      <div className="about__text-container">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">Hi, my name is Kevin and this is my final project in the 10 month web development course at Practicum by Yandex, where I am a student and a member of the student support team.</p>
        <p className="about__text">The project has a frontend in React and a backend in Express, and allows users to search for news articles using a public News API service.</p>
      </div>
    </section>
  );
}

export default About;
