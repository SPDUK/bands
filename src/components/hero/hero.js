import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './hero.scss';

const imageRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;

const Hero = ({ background }) => {
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
          id={background}
        >
          <source src={background} type="video/mp4" />
        </video>
      )}
      <div className="hero-body">
        <div className="container">
          {/* <h1 className="title">Fullheight title</h1> */}
          {/* <h2 className="subtitle">Fullheight subtitle</h2> */}
        </div>
      </div>
    </section>
  );
};
Hero.propTypes = {
  background: PropTypes.string,
};

export default Hero;
