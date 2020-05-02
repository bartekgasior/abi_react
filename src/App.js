import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { Nav } from './components/navigation/Nav';
import { Footer } from './components/footer';

import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import messages from './translations';
import allThemes from './themes';

import { HomeComponent } from './pages/Home/HomeComponent';

const App = (props) => {
  return (
    <IntlProvider locale={props.currentLanguage} messages={messages[props.currentLanguage]}>
      <ThemeProvider theme={allThemes[props.currentTheme]}>
        <Nav />
        <div style={{
          paddingTop: '10vh', background: '#379683', width: '100%', minHeight: '100vh', position: 'relative'
        }}
        >
          <HomeComponent />
          <Footer />
        </div>
      </ThemeProvider>
    </IntlProvider>
  );
}

const mapStateToProps = state => ({
  currentTheme: state.themes.currentTheme,
  currentLanguage: state.languages.currentLanguage
})

export default connect(mapStateToProps, {})(App);