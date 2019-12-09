import React from "react";
import styled from "styled-components";
import { ProductCard } from "./ProductCard";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  .cards {
    display: flex;
    flex-direction: column;
  }
`;

const ProductList = ({ playedSeconds }) => {
  return (
    <Wrapper>
      <div className="cards">
        {playedSeconds > 5 && playedSeconds < 10 ? (
          <ProductCard title="2" />
        ) : null}
        {playedSeconds > 1 && playedSeconds < 6 ? (
          <ProductCard title="1" />
        ) : null}
      </div>
    </Wrapper>
  );
};
export default ProductList;
