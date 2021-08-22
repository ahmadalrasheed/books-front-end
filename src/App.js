import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import { withAuth0 } from "@auth0/auth0-react";
import Footer from './Footer';
import MyFavoriteBooks from './BestBooks';
import Login from './Login';
import Profile from './profile'

// import LoginButton  from './loginbutton'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <MyFavoriteBooks/>:<Login/>}
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
                <Profile/>
              </Route>
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
