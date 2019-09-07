import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './hero.scss';

const imageRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;

const Hero = ({ background, heroTitle, heroLink }) => {
  const [videoLoaded, setVideoloaded] = useState(false);
  return (
    <section className="hero is-dark is-fullheight">
      {background.match(imageRegex) ? (
        <img src={background} alt="hero background" />
      ) : (
        <video
          onCanPlay={() => setVideoloaded(true)}
          style={{ display: videoLoaded ? 'block' : 'none' }}
          autoPlay
          muted
          loop
        >
          <source src={background} type="video/mp4" />
        </video>
      )}
      <div className="hero-body">
        <div className="container">
          <h1 className="title alt-font">{heroTitle}</h1>
          <a href={heroLink.url} className="button is-primary">
            {heroLink.text}
          </a>
        </div>
      </div>
    </section>
  );
};
Hero.propTypes = {
  background: PropTypes.string,
  heroTitle: PropTypes.string,
  heroLink: PropTypes.object,
};

export default Hero;
