const React = require('react');
const ReactDOM = require('react-dom');
const reset = require('../reset.css')
const styles = require('../styles.scss')
const parallax = require('./parallax.js')
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('application'))
