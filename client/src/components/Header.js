import React, { Component } from 'react';
// hook up to the redux store
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }
  render(){
    return(
      <div className = "container">
      <nav className="nav-extended teal lighten-2">
        <div className="nav-wrapper">
          <Link to={ this.props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
