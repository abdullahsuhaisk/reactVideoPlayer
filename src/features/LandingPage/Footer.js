import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Wrapper = styled.footer`
  max-width: 70%;
  margin: 1rem auto;
  overflow: auto;
  a {
    color: #999;
    font-size: 0.9rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  .footer-cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }

  li {
    line-height: 1.9;
  }

  .lang-select {
    margin-top: 2rem;
    color: #999;
    background-color: #000;
    background-image: none;
    border: 1px solid #333;
    padding: 1rem 1.2rem;
    border-radius: 5px;
  }
`;

const Footer = () => {
  return (
    <Wrapper class="footer">
      <p>Questions? Call 1-866-579-7172</p>
      <div class="footer-cols">
        <ul>
          <li>
            <Link to="/">FAQ </Link>
          </li>
          <li>
            <Link to="/">Investor Relations </Link>
          </li>
          <li>
            <Link to="/">Ways To Watch </Link>
          </li>
          <li>
            <Link to="/">Corporate Information </Link>
          </li>
          <li>
            <Link to="/">Netflix Originals </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Help Center </Link>
          </li>
          <li>
            <Link to="/">Jobs </Link>
          </li>
          <li>
            <Link to="/">Terms Of Use </Link>
          </li>
          <li>
            <Link to="/">Contact Us </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Account </Link>
          </li>
          <li>
            <Link to="/">Redeem Gift Cards </Link>
          </li>
          <li>
            <Link to="/">Privacy </Link>
          </li>
          <li>
            <Link to="/">Speed Test </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Media Center </Link>
          </li>
          <li>
            <Link to="/">Buy Gift Cards </Link>
          </li>
          <li>
            <Link to="/">Cookie Preferences </Link>
          </li>
          <li>
            <Link to="/">Legal Notices </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Footer;
