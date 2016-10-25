import React from 'react';
import Header from './Header';
import Cards from './HeroCards'
import Footer from './Footer'

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
      <Footer/>
      </div>
    )
  }

}

export default App;
