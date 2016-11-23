import React from 'react';

class Cards extends React.Component {
  render() {
    return (
      <section id="code">
        <p className="code-section-description">
          These are a few GIFs displaying some of the projects I've worked on.
          Please proceed to my
           <a className="body-links" href="https://github.com/Peter-Springer"> github </a>
          to view additional projects.
        </p>
        <a href="https://github.com/Peter-Springer/game-time">
          <img className="cards" src="../img/breakout.gif"/>
        </a>
        <a href="https://github.com/Peter-Springer/Shoot-The-Breeze">
          <img className="cards" src="../img/chatapp.gif"/>
        </a>
        <a href="https://github.com/Peter-Springer/pomodoro-app">
          <img className="cards gif3" src="../img/pomodoro.gif"/>
        </a>
      </section>
    )
  }
}

export default Cards;
