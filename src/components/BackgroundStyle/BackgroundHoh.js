import React from "react";
import { BackgroundWrapper } from "./BackgroundStyle.style";

const BackgroundHoh = ({ children, logoStyle }) => {
  return (
    <BackgroundWrapper>
      <div className="background-dark">
        <div className="ntflx-logo" style={logoStyle}>
          <img src="/image/logo.png" alt="Netflix" />
        </div>
        {children}
      </div>
    </BackgroundWrapper>
  );
};

export default BackgroundHoh;
