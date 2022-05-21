import React from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import { products } from "../../dummyData";
import "./market.css";

function Market() {
  return (
    <div>
      <Topbar />
      <div className="productListWrapper">
        <div className="pl_left">
          <Leftbar />
        </div>

        <div className="productListContainer">
          <h1>Trending Products</h1>
          <div className="productList">
            {products.map((product) => (
              <div className="plItem" key={product.id}>
                <div className="pl_img_container">
                  <img src={product.image} alt="product" className="pl_img" />
                </div>
                <div className="pl_info_container">
                  <h3>{product.name}</h3>
                  <p>$ {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
