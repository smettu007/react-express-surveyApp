import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
            <li><Payments/></li>,
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
             to={this.props.auth? '/surveys' : '/' }
            className="brand-logo">
                Emailey
            </Link>
            <ul className="right">
              <li>{this.renderContent()}</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps, null)(Header);
