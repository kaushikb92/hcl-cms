import React from 'react';
import BootStrapModal from '../../components/Modal/BootStrapModal';
import classNames from 'classnames';
import validator from 'validator';
import { browserHistory } from 'react-router';
import * as LoginActions from '../../actions/LoginActions';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    this.props.OpenModal();
  }

  login(event) {
    event.preventDefault();
    this.props.CloseModal();
  }

  handleClose() {
    this.props.CloseModal();
    browserHistory.push('/about');
  }

  onChange = (keyName, e) => {
    let object = {
      value: e.target.value,
      isValid: true,
    };
    this.props.UpdateObject(keyName, object);
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.formIsValid()) {
      let user = {
        email: this.props.LoginReducer.email.value,
        password: this.props.LoginReducer.password.value,
      };

      //run the validation, and if it's good move on.
      //form processing here....
      this.props.CheckUser(user);
      if (this.props.LoginReducer.isValiduser) {
        this.props.ResetInput(); //reset states before the validation procedure is run.
        browserHistory.push('/dashbaord');
      }
    }
  };

  formIsValid = () => {
    if (this.props.LoginReducer.email.value == undefined ||
      !validator.isEmail(this.props.LoginReducer.email.value)) {
      let object = {
        isValid: false,
        message: 'Not a valid email address',
      };

      this.props.UpdateObject('email', object);
      return false;
    }

    if (this.props.LoginReducer.password.value == undefined ||
      validator.isEmpty(this.props.LoginReducer.password.value)) {
      let object = {
        isValid: false,
        message: 'Please enter password',
      };

      this.props.UpdateObject('password', object);
      return false;
    }

    return true;
  };

  render() {
    var { email, password } = this.props.LoginReducer;
    /*
    Each of the group classes below will include the 'form-group' class, and will only
    include the 'has-error' class if the isValid value is false.
    */
    var emailGroupClass = classNames('form-group', { 'has-error': !email.isValid });
    var passwordGroupClass = classNames('form-group', { 'has-error': !password.isValid });

    let loginForm = (
      <div className="container col-md-12">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Login</h2>

          <div className={emailGroupClass}>
            <input type="text" name="emailInput" className="form-control"
              placeholder="Email address"
              value={this.props.LoginReducer.emailInput}
              onChange={(e) => this.onChange('email', e)} autoFocus />
            <span className="help-block">{email.message}</span>
          </div>

          <div className={passwordGroupClass}>
            <input type="password" name="passwordInput" className="form-control"
              placeholder="Password"
              value={this.props.LoginReducer.passwordInput}
              onChange={(e) => this.onChange('password', e)} />
            <span className="help-block">{password.message}</span>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        <br />
        </form>
      </div>
    );

    return (
      <div>
        <BootStrapModal
          handleClose={this.handleClose} heading="Login Form"
          body={loginForm}
          show={this.props.LoginReducer.show} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  return {
    LoginReducer: state.LoginReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  UpdateInput: (event) => {
    dispatch(LoginActions.UpdateInput(event));
  },

  ResetInput: () => {
    dispatch(LoginActions.ResetInput());
  },

  CheckUser: (user) => {
    dispatch(LoginActions.CheckUser(user));
  },

  CloseModal: () => {
    dispatch(LoginActions.CloseModal());
  },

  OpenModal: () => {
    dispatch(LoginActions.OpenModal());
  },

  UpdateObject: (key, object) => {
    dispatch(LoginActions.UpdateObject(key, object));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

