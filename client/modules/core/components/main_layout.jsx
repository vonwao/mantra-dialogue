import React from 'react';
import Navigation from './navigation.jsx';
import Header from './header.jsx';

const Layout = ({content = () => null }) => (
  <div>
      <Header/>
    <header>
    <h1>Mantra Voice</h1>
    <Navigation />
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.</small>
    </footer>
  </div>
);

export default Layout;
