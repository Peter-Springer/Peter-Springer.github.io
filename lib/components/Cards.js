import React from 'react';

class Cards extends React.Component {
  render() {
    return (
      <section id="code">
        <h1 className="code-header">Code</h1>
        <section className="code-sample">
          <a target="_blank" href="https://shoot-the-breeze-aa5d9.firebaseapp.com/">
          <img className="cards" src="../img/notes.gif"/>
          </a>
          <article className="code-sample-info-chat">
            <a target="_blank" href="https://github.com/Peter-Springer/Shoot-The-Breeze">
              <h1 className="card-headers">ELECTRON NOTES</h1>
            </a>
            <p>Tech Stack</p>
            <ul>
              <li>Electron</li>
              <li>Vue</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Spectron</li>
              <li>Webpack</li>
            </ul>
          </article>
        </section>
        <section className="code-sample">
          <article className="code-sample-info">
            <a target="_blank" href="https://github.com/Peter-Springer/game-time">
              <h1 className="card-headers">GAME TIME</h1>
            </a>
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
          <a target="_blank" href="https://peter-springer.github.io/game-time/">
          <img className="cards" src="../img/breakout.gif"/>
          </a>
        </section>
        <section className="code-sample">
          <a target="_blank" href="https://shoot-the-breeze-aa5d9.firebaseapp.com/">
          <img className="cards" src="../img/chatapp.gif"/>
          </a>
          <article className="code-sample-info-chat">
            <a target="_blank" href="https://github.com/Peter-Springer/Shoot-The-Breeze">
              <h1 className="card-headers">SHOOT THE BREEZE</h1>
            </a>
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
            <a target="_blank" href="https://github.com/Peter-Springer/pomodoro-app">
              <h1 className="card-headers" >PALMODORO</h1>
            </a>
            <p>Tech Stack</p>
            <ul>
              <li>jQuery</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Selenium</li>
              <li>Webpack</li>
            </ul>
          </article>
          <a target="_blank" href="https://peter-springer.github.io/pomodoro-app/">
          <img className="cards gif3" src="../img/pomodoro.gif"/>
          </a>
        </section>
      </section>
    )
  }
}

export default Cards;
