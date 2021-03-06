import React, { Component } from "react";
import ProductRow from "../ProductRow";
import "./styles.css";

export default class ProductTable extends Component {
  render() {
    const { products, filter, stock} = this.props;
    console.log(products,stock)
    return (
        <div className="productTable"> 
            <div className="line">
                    <div className="item itemS"> Name </div>
                    <div className="item itemS"> Price </div>
            </div>
            
            {products.data.filter((product) => product.stocked === stock ? product.stocked : product)
            .filter((product) => product.name.includes(filter))
                .map((product,index) => {
                    return <ProductRow key={index} product={product} />
                })
            }
        </div>
    );
  }
}