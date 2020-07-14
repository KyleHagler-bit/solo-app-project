import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  BrowserRouter
} from 'react-router-dom';

import { connect } from 'react-redux';

//CSS
import './App.css';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//npm install react-transition-group --save

//App components
import AboutPage from '../AboutPage/AboutPage';

import InfoPage from '../InfoPage/InfoPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import IconsPage from '../IconsPage/IconsPage';
import NotesPage from '../NotesPage/NotesPage';
import HomePage from '../HomePage/HomePage';
import PastEntryPage from '../PastEntryPage/PastEntryPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import EditEntryPage from '../EditEntryPage/EditEntryPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
    this.props.dispatch({ type: 'FETCH_ICONS' });
  }

  render() {
    return (
      <BrowserRouter>

        <div>
          <Nav />
          <Route render={({ location }) => (

            <TransitionGroup>
              <CSSTransition
                key={location.key} //unique identifier
                timeout={300}
                classNames="fade">

                <Switch location={location}> {/*render route at the right time */}
                  <Redirect exact from="/" to="/welcome" />

                  <Route exact path="/about" component={AboutPage} />

                  <ProtectedRoute exact path="/welcome" component={WelcomePage} />

                  <ProtectedRoute exact path="/info" component={InfoPage} />

                  <ProtectedRoute exact path="/icons" component={IconsPage} />

                  <ProtectedRoute exact path="/notes" component={NotesPage} />

                  <ProtectedRoute exact path="/home" component={HomePage} />

                  <ProtectedRoute exact path="/pastentry" component={PastEntryPage} />

                  <ProtectedRoute exact path="/profile" component={ProfilePage} />

                  <ProtectedRoute exact path="/edit" component={EditEntryPage} />

                  {/* If none of the other routes matched, we will show a 404. */}
                  <Route render={() => <h1>404</h1>} />
                </Switch>

              </CSSTransition>
            </TransitionGroup>

          )} />




          <Footer />
        </div>

      </BrowserRouter>
    )
  }
}

export default connect()(App);
