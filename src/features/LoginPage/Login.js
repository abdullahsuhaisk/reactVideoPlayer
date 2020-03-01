import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Button } from "../../components/Buttons/Button";
import BackgroundHoh from "../../components/Background/BackgroundHoh";
import { Wrapper } from "./Login.style";
import Input from "../../components/Inputs/Input";
import { fbLogin, fbSignUp } from "../../store/Auth/authOperations";
import { isLogin } from "../../utils/authFunctions";

class Login extends React.Component {
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
    console.log("Login Button Pressed");
    return <Redirect to="/getStarted" />;
  };
  render() {
    if (isLogin()) return <Redirect to="/getstarted" />;
    return (
      <BackgroundHoh logoStyle={{ justifyContent: "start" }}>
        <Wrapper>
          <div className="login-container">
            <div className="login-header">
              <h1>Log On</h1>
            </div>
            <Input
              handleChange={this.handleChange}
              value={this.state.email}
              placeholder={"Email"}
              id={"email"}
              type={"email"}
            />
            <Input
              handleChange={this.handleChange}
              value={this.state.password}
              placeholder={"Password"}
              id={"password"}
              type={"password"}
            />
            <div className="login-button">
              <Button
                onClick={() => {
                  this.onLogin();
                  this.props.history.push("/getstarted");
                }}
              >
                Log On
              </Button>
            </div>

            <div className="login-remember">Remember me</div>
            <div className="login-bottom">
              <div className="login-facebook">Facebook ile oturum aç</div>
              <div className="login-info">
                Do you wanna join Netflix. Now register
              </div>
            </div>
          </div>
        </Wrapper>
      </BackgroundHoh>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
