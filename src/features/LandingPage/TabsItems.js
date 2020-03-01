import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import {Button, LargeButton} from "../../components/Buttons/Button";

const TabsItemWrapper = styled.div`
  max-width: 70%;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  .tab-1-content-inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    justify-content: center;
  }
  .text-lg {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #fff;
  }
  .button {
    font-size: 1rem;
    padding: 0.8rem 1.3rem;
    text-transform: uppercase;
  }
  .tab-2-content-top {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .tab-2-content-bottom {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
  }
  .table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  .table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }
  
  .table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  
  .table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }
  
  .table tbody tr td:first-child {
    text-align: left;
  }
  
  .table tbody tr:nth-child(odd) {
    background: #222;
  }
  .text-center {
    text-align: center;
  }
`;

export const TabsItem1 = () => {
  return (
    // tab-content-item show
    <TabsItemWrapper>
      <div className="tab-1-content-inner">
        <div>
          <p className="text-lg">
            If you decide Netflix isn't for you - no problem. No commitment.
            Cancel online anytime.
          </p>
          <LargeButton className="button">Watch Free For 30 days </LargeButton>
        </div>
        <img src="/image//tab-content-1.png" alt="acdsf" />
      </div>
    </TabsItemWrapper>
  );
};
export const TabsItem2 = () => {
  return (
    // tab-content-item show
    <TabsItemWrapper>
      <div class="tab-2-content-top">
        <p class="text-lg">
          Watch TV shows and movies anytime, anywhere — personalized for you.
        </p>
        <LargeButton className="button">Watch Free For 30 days </LargeButton>
      </div>
      <div class="tab-2-content-bottom">
        <div>
          <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
          <p class="text-md">Watch on your TV</p>
          <p class="text-dark">
            Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players
            and more.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
          <p class="text-md">Watch instantly or download for later</p>
          <p class="text-dark">
            Available on phone and tablet, wherever you go.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
          <p class="text-md">Use any computer</p>
          <p class="text-dark">Watch right on Netflix.com.</p>
        </div>
      </div>
    </TabsItemWrapper>
  );
};
export const TabsItem3 = () => {
  return (
    // tab-content-item show
    <TabsItemWrapper>
      <div class="tab-content-item">
        <div class="text-center">
          <p class="text-lg">
            Choose one plan and watch everything on Netflix.
          </p>
          <LargeButton className="button">Watch Free For 30 days </LargeButton>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th />
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly price after free month ends on 6/19/19</td>
              <td>$8.99</td>
              <td>$12.99</td>
              <td>$15.99</td>
            </tr>
            <tr>
              <td>HD Available</td>
              <td>
                <FontAwesomeIcon icon= {faTimes} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
            </tr>
            <tr>
              <td>Ultra HD Available</td>
              <td>
                <FontAwesomeIcon icon= {faTimes} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faTimes} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
            </tr>
            <tr>
              <td>Screens you can watch on at the same time</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Watch on your laptop, TV, phone and tablet</td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
            </tr>
            <tr>
              <td>Unlimited movies and TV shows</td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
            </tr>
            <tr>
              <td>Cancel anytime</td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
            </tr>
            <tr>
              <td>First month free</td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
              <td>
                <FontAwesomeIcon icon= {faCheck} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </TabsItemWrapper>
  );
};
