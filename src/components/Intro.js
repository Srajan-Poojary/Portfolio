import React from 'react';
import { ReactComponent as IntroHero } from '../assests/introHero.svg';
import "./Intro.css"

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-left">
        <h1 className="intro-title">
          Hello!
          <br />
          I'm Srajan Poojary
        </h1>
        <h2 className="intro-subtitle">An enthusiastic software developer</h2>
      </div>
      <div className="intro-right">
        <IntroHero />
      </div>
    </section>
  );
}