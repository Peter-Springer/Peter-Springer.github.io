import React from 'react';

class Cards extends React.Component {
  render() {
    return (
      <section id="code">
      <h1 className="code-header">CODE</h1>
        <section className="code-sample">
          <article className="code-sample-info">
            <h1 className="card-headers">GAME TIME</h1>
            <p>Tech Stack</p>
            <ul>
              <li>JavaScript</li>
              <li>HTML5 Canvas</li>
              <li>CSS</li>
              <li>Webpack</li>
              <li>Chai</li>
              <li>Mocha</li>
            </ul>
          </article>
          <a href="https://github.com/Peter-Springer/game-time">
          <img className="cards" src="../img/breakout.gif"/>
          </a>
        </section>
        <section className="code-sample">
          <a href="https://github.com/Peter-Springer/Shoot-The-Breeze">
          <img className="cards" src="../img/chatapp.gif"/>
          </a>
          <article className="code-sample-info-chat">
            <h1 className="card-headers">SHOOT THE BREEZE</h1>
            <p>Tech Stack</p>
            <ul>
              <li>React</li>
              <li>Firebase</li>
              <li>SASS</li>
              <li>Webpack</li>
            </ul>
          </article>
        </section>
        <section className="code-sample">
          <article className="code-sample-info">
            <h1 className="card-headers" >PALMODORO</h1>
            <p>Tech Stack</p>
            <ul>
              <li>jQuery</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Selenium</li>
              <li>Webpack</li>
            </ul>
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
