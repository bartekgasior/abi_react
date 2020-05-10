import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { Nav } from './components/navigation/Nav';
import { Footer } from './components/footer';
import { FooterNav } from './components/footerNav';

import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import messages from './translations';
import allThemes from './themes';

import { HomeComponent } from './pages/Home/HomeComponent';

const BodyContainer = styled.div`
  padding-top: 10vh;
  padding-bottom: 17em;
  background: #379683; 
  width: 100%;
  min-height: 100vh;
  position: relative;
  
  @media(max-width: ${({ theme }) => theme.mediaQueries.md}){
      padding-bottom: 29em;
  }
`

const App = (props) => {
  return (
    <IntlProvider locale={props.currentLanguage} messages={messages[props.currentLanguage]}>
      <ThemeProvider theme={allThemes[props.currentTheme]}>
        <Router>
          <Nav />
          <BodyContainer>

            <Switch>
              <Route path='/' exact component={null} />
              <Route path='/about' component={HomeComponent} />
            </Switch>

            <FooterNav />
            <Footer />
          </BodyContainer>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
}

const mapStateToProps = state => ({
  currentTheme: state.themes.currentTheme,
  currentLanguage: state.languages.currentLanguage
})

export default connect(mapStateToProps, {})(App);