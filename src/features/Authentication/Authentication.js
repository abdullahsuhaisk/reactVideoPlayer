import React from "react";
import { connect } from "react-redux";
import { AuthWrapper } from "./Authentication.style";
import fr from "../../config/firebase";
import { fbLogin, fbSignUp } from "../../store/Auth/authOperations";

class Authentication extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onLogin = () => {
    console.log(fbLogin);
    //   fr.auth()
    //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    //
    this.props.fbLogin(this.state.email, this.state.password);
  };
  render() {
    console.log(this.props, this.state);
    return (
      <AuthWrapper>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="email" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <button onClick={() => this.onLogin()}>Login</button>
        </div>
      </AuthWrapper>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    fbLogin: (email, pass) => dispatch(fbLogin(email, pass)),
    fbSignUp: (email, pass) => dispatch(fbSignUp(email, pass))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
