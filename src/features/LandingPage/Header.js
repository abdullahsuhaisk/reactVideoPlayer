import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/Buttons/Button";

const ShowCaseStyle = styled.header`
  width: 100%;
  height: 93vh;
  position: relative;
  background: url("../image/background.jpg") no-repeat center center/cover;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 120px 100px 250px #000000,
      inset -120px -100px 250px #000000;
  }
  .showcase-top {
    position: relative;
    height: 90px;
    z-index: 2;
  }
  .showcase-top img {
    width: 170px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .showcase-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }
  .showcase-content {
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
  }
  .showcase-content h1 {
    font-weight: 700;
    font-size: 5.2rem;
    line-height: 1.1;
    margin: 0 0 2rem;
  }
  .showcase-content p {
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 1.25;
    margin: 0 0 2rem;
  }
  .btn {
    display: inline-block;
    background: #e50914;
    color: #fff;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    margin-right: 0.5rem;
    outline: none;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    border-radius: 2px;
  }
  btn::hover {
    opacity: 0.9;
  }
  .btn-xl {
    font-size: 2rem;
    padding: 1.5rem 2.1rem;
    text-transfrom: uppercase;
  }
  .btn-icon {
    padding-left:3px;
  }
`;

const Header = () => {
  return (
    <ShowCaseStyle>
      <div className="showcase-top">
        <img src="/image/logo.png" alt="Netflix" />
        {/* <a href="/" className="btn btn-rounded">
            Sign in
          </a> */}
        <div className="showcase-btn">
          <Button onclick={() => console.log("clicked")} borderRadios={"8px"}>
            <Link to="/login">Sign in</Link>
          </Button>
        </div>
      </div>
      <div className="showcase-content">
        <h1>See what's next</h1>
        <p>Watch anywhere. Cancel anytime</p>
        <div className="btn btn-xl" onClick={() => console.log("clicked")}>
          Watch Free For 30 Days 
          <FontAwesomeIcon icon={faChevronRight} className="btn-icon" />
        </div>
      </div>
    </ShowCaseStyle>
  );
};

export default Header;
