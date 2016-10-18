import React from 'react';
import Header from './Header';
import Cards from './HeroCards'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <Header/>
      <Cards/>
      </div>
    )
  }

}

export default App;
