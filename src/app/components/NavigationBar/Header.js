import React from 'react';
import './Header.css';
import { Link } from 'react-router';

import PropTypes from 'prop-types';

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        errors: {},
    };

    this.hanldeLogin = this.hanldeLogin.bind(this);
    this.hanldeRegistration  = this.hanldeRegistration.bind(this);
  }

  hanldeLogin() {
    this.context.router.push('/Login');
  }

  hanldeRegistration () {
    this.context.router.push('/NewUser');
  }

  render() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                 <h3 className="panel-title pull-left">
                    Course Tracker to Identify the courses for loggedIn Students & New Users!
                </h3>

                <button className="btn btn-default pull-right spacing" onClick={this.hanldeLogin}>Login</button>&nbsp;&nbsp;
                <button className="btn btn-default pull-right" onClick={this.hanldeRegistration}>New User</button>
                
                <div className="clearfix"></div>
            </div>
        </div>
    );
  }
}

HeaderSection.contextTypes = {
  router: PropTypes.object.isRequired
}

export default HeaderSection;
