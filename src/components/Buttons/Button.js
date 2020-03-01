import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
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
  &:hover {
    opacity: 0.9;
  }
  border-radius: ${props => props.borderRadios || "0px"};
  .Button-lg {
    font-size: 1rem;
    padding: 0.8rem 1.3rem;
    text-transform: uppercase;
  }
`;

const ButtonLargeWrapper = styled.div`
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
  &:hover {
    opacity: 0.9;
  }
  border-radius: ${props => props.borderRadios || "0px"};
  font-size: 1rem;
  padding: 0.8rem 1.3rem;
  text-transform: uppercase;
`;

export const Button = ({
  children,
  onClick,
  styles,
  borderRadios,
  onSubmit
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      style={styles}
      borderRadios={borderRadios}
      onSubmit={onSubmit}
    >
      {children}
    </ButtonWrapper>
  );
};

export const LargeButton = ({ children, onclick, styles, borderRadios }) => {
  return (
    <ButtonLargeWrapper
      onClick={onclick}
      style={styles}
      borderRadios={borderRadios}
    >
      {children}
    </ButtonLargeWrapper>
  );
};
