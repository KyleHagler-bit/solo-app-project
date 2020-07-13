import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

//CSS
import './App.css';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

//App components
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
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
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/welcome" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/welcome"
              component={WelcomePage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/icons"
              component={IconsPage}
            />
            <ProtectedRoute
              exact
              path="/notes"
              component={NotesPage}
            />

            <ProtectedRoute
              exact
              path="/home"
              component={HomePage}
            />
            <ProtectedRoute
              exact
              path="/pastentry"
              component={PastEntryPage}
            />
            <ProtectedRoute
              exact
              path="/profile"
              component={ProfilePage}
            />
             <ProtectedRoute
              exact
              path="/edit"
              component={EditEntryPage}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
