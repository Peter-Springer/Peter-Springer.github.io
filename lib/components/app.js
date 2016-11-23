import React from 'react';
import Header from './Header';
import Cards from './Cards';
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
      <section>
        <Header/>
        <About/>
        <Cards/>
        <Footer/>
      </section>
    )
  }
}

export default App;
