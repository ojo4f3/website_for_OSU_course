import React from "react";
import ProductData from "../components/ProductData";


function OrderPage({ items }) {
    return (
        <>
            <h2>Order Pet Supplies</h2>
            <article>
            <h3>Please select the number of each product you want to order (max 10 each).</h3>
            <table class="web-table">
                <caption>Table of products</caption>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {items.map((activeItem, n) =>
                        <ProductData product={activeItem} key={n} />)}

                </tbody>
            </table>
            </article>
        </>
    );
}

export default OrderPage;