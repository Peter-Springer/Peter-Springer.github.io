import React from 'react';

class Cards extends React.Component {
  render() {
    return (
      <section id="code">
      <h1>CODE</h1>
        <section className="code-sample">
          <article className="code-sample-info">
            <p>title</p>
            <p>description</p>
            <p>built using</p>
          </article>
          <a href="https://github.com/Peter-Springer/game-time">
          <img className="cards" src="../img/breakout.gif"/>
          </a>
        </section>
        <section className="code-sample">
          <a href="https://github.com/Peter-Springer/Shoot-The-Breeze">
          <img className="cards" src="../img/chatapp.gif"/>
          </a>
          <article className="code-sample-info">
            <p>title</p>
            <p>description</p>
            <p>built using</p>
          </article>
        </section>
        <section className="code-sample">
          <article className="code-sample-info">
            <p>title</p>
            <p>description</p>
            <p>built using</p>
          </article>
          <a href="https://github.com/Peter-Springer/pomodoro-app">
          <img className="cards gif3" src="../img/pomodoro.gif"/>
          </a>
        </section>
      </section>
    )
  }
}

export default Cards;
