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

const ProductList = () => {
  return (
    <Wrapper>
      <div className="cards">
        <ProductCard />
        <ProductCard />
      </div>
    </Wrapper>
  );
};
export default ProductList;
