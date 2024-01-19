import React from "react";
import ItemCount from "./ItemCount";

function ProductData({ product }) {
    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'symbol'})}
            </td>
            <td><ItemCount /></td>
        </tr>
    );
}

export default ProductData;