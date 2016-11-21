import React from 'react';


class Cards extends React.Component {
  render() {
    return (
      <section id="code">
        <video className="cards" height="300" width="400" autoPlay loop>
          <source src="../img/breakout.mp4" type="video/mp4"/>
        </video>
        <video className="cards" autoPlay loop>
          <source src="../img/chatapp.mp4" type="video/mp4"/>
        </video>
        <video className="cards" autoPlay loop>
          <source src="../img/chatapp.mp4" type="video/mp4"/>
        </video>
      </section>
    )
 }

}

export default Cards;
