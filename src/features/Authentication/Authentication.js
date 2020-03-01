import React from "react";
import { connect } from "react-redux";
import { AuthWrapper } from "./Authentication.style";
import fr from "../../config/firebase";
import { fbLogin, fbSignUp } from "../../store/Auth/authOperations";
import { Redirect } from "react-router-dom";
import { isLogin } from "../../utils/authFunctions";
import BackgroundHoh from "../../components/Background/BackgroundHoh";

class Authentication extends React.Component {
  state = {
    email: "aisik@smartover.net",
    password: "123456"
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onLogin = () => {
    // console.log(fbLogin);
    //   fr.auth()
    //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    //
    this.props.fbLogin(this.state.email, this.state.password);
  };
  render() {
    // if (isLogin() === true) {
    //   return <Redirect to="/video" />;
    // }
    // console.log(this.props, this.state);
    return (
      <BackgroundHoh>
        <AuthWrapper>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <button onClick={() => this.onLogin()}>Login</button>
          </div>
        </AuthWrapper>
      </BackgroundHoh>
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
  // console.log(dispatch);
  return {
    fbLogin: (email, pass) => dispatch(fbLogin(email, pass)),
    fbSignUp: (email, pass) => dispatch(fbSignUp(email, pass))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
