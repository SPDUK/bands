import React, { useState } from 'react';
import './hero.scss';

const Hero = ({ background }) => {
  const [videoLoaded, setVideoloaded] = useState(false);
  return (
    <section className="hero is-dark is-fullheight">
      <video
        onCanPlay={() => setVideoloaded(true)}
        style={{ display: videoLoaded ? 'block' : 'none' }}
        preload="none"
        autoPlay
        controls
        muted
        loop
        id={background}
      >
        <source src={background} type="video/mp4" />
      </video>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Fullheight title</h1>
          <h2 className="subtitle">Fullheight subtitle</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
