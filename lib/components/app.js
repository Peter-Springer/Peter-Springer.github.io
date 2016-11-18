import React from 'react';
import Header from './Header';
import Cards from './HeroCards';
import Footer from './Footer';
import About from './About';

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
      <About/>
      <Cards/>
      <Footer/>
      </div>
    )
  }

}

export default App;
