// Rendering layer control
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './header/Header';
import Landing from '../scenes/landing/landing';
import * as actions from '../services/auth/authActions';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const SurveyNew = () => (
  <div>
    <h2>SurveyNew</h2>
  </div>
);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
