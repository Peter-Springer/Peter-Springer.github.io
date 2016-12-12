import React from 'react';
import Header from './Header';
import Cards from './Cards';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

class App extends React.Component {

  render() {
    return (
      <section>
        <Header/>
        <About/>
        <Cards/>
        <Contact/>
        <Footer/>
      </section>
    )
  }
}

export default App;
