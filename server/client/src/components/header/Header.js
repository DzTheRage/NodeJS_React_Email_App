import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StripeWrapper from '../stripeWrapper';

class Header extends Component {
  renderContent() {
    switch (this.props.user) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return (
          // easy but refresh sucks
          [
            <li key={1}>
              <StripeWrapper />
            </li>,
            <li key={2} style={{ margin: '0 1em' }}>{`Credits: ${
              this.props.user.credits
            }`}</li>,
            <li key={3}>
              <a href="/api/logout">Logout</a>
            </li>
          ]
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.user ? '/surveys' : '/'} className="brand-logo">
            NodeJS_React_Email_App
          </Link>
          <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
