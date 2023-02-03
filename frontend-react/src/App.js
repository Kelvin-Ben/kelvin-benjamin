import React from 'react';

import {
  About, Header, Footer, Skills, Testimonials, Work,
} from './container/index';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
