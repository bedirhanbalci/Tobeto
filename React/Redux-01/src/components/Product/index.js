import React from "react";
import ProductDetail from "./ProductDetail";

export default function Product({ val, setVal }) {
  return (
    <div>
      <h1>Product Component</h1>
      <hr />

      <div>val : {val} </div>
      <div>
        <ProductDetail val={val} setVal={setVal} />
      </div>
    </div>
  );
}
