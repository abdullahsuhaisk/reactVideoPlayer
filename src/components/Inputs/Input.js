import React from "react";
import { Wrapper } from "./InputWrapper.style";

// var result = `this is just a ${sample}`;

export default function Input(props) {
  const { handleChange, value, placeholder, type, id } = props;
  return (
    <Wrapper>
      <div className="input">
        <input
          type={type ? `${type}` : "text"}
          id={id}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </Wrapper>
  );
}
