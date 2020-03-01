import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faTablet,
  faTags
} from "@fortawesome/free-solid-svg-icons";

import { DARKCOLOR, PRIMARYCOLOR } from "../../components/CssConstant";

const TabsWrapper = styled.section`
  background: ${DARKCOLOR};
  padding-top: 1rem;
  border-bottom: 3px solid #3d3d3d;
  border-right: none;
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 70%;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    div {
      padding: 1.5rem 0;
    }
  }
  p {
    font-size: 1.2rem;
    padding-top: 0.5rem;
  }
  .container > div:hover {
    color: #fff;
    cursor: pointer;
  }
  .tab-border {
    border-bottom: ${PRIMARYCOLOR} 4px solid;
  }
  .tab-item {
  }
  .btn-icon {
    margin-left: 1rem;
  }
  .hide-sm {
    display: none;
  }
`;

const Tabs = ({ setTabsRender, whichTabsRender }) => {
  
  const classNameTab1 = whichTabsRender === "TabsItem1" ? "tab-border" : null;
  const classNameTab2 = whichTabsRender === "TabsItem2" ? "tab-border" : null;
  const classNameTab3 = whichTabsRender === "TabsItem3" ? "tab-border" : null;

  return (
    <TabsWrapper>
      <div className="container">
        <div
          className={`tab-item ${classNameTab1}`}
          onClick={() => setTabsRender("TabsItem1")}
        >
          <FontAwesomeIcon
            icon={faDoorOpen}
            className="btn-icon"
            style={{ height: 50, width: 50 }}
          />
          <p className="hide-smA">Cancel at any time</p>
        </div>
        <div
          className={`tab-item ${classNameTab2}`}
          onClick={() => setTabsRender("TabsItem2")}
        >
          <FontAwesomeIcon
            icon={faTablet}
            className="btn-icon"
            style={{ height: 50, width: 50 }}
          />
          <p className="hide-smA">Watch anywhere</p>
        </div>
        <div
          className={`tab-item ${classNameTab3}`}
          onClick={() => setTabsRender("TabsItem3")}
        >
          <FontAwesomeIcon
            icon={faTags}
            className="btn-icon"
            style={{ height: 50, width: 50 }}
          />
          <p className="hide-smA">Pick your price</p>
        </div>
      </div>
    </TabsWrapper>
  );
};

export default Tabs;
