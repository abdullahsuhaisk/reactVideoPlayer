import React from "react";
import styled from "styled-components";

import { Input } from "../index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function InOutTime(props) {
  // props.state.videoInfo.header
  // e => props.handleChange(e, "header")
  return (
    <Wrapper className="Hotspot-inouttime">
      <Input placeholder={"0.00"} id={"videoInfo"} />
      Product Selecting
      <Input placeholder={"01.00"} id={"videoInfo"} />
      <div onClick={() => props.deleteHotSpots(props.deleteKey)}>X</div>
    </Wrapper>
  );
}
