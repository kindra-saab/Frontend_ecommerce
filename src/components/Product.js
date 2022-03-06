import React, { useEffect } from 'react';
import './Product.css'

function Product(props) {

    // const [toggle, setToggle] = useState("Add")

    const { image, price, brand, description, delivery} = props;

    return (
        <div>
            <div className='productCard'>
            <div className='imageDiv'>
            <img src={image}></img>
            </div>

            <hr></hr>
            <div className='lower_section'>
            <h2 className='brand'><i><b>{brand}</b></i></h2>
            <div className='priceDiv'>
            <h2 className='price mrp'><b>MRP :</b>  Rs.{price}</h2>
            <h3 className='price'><b>Our Price:</b> Rs.{price-price*10/100}</h3>
            </div>
            {/* <h4 className='delivery'>Free Delivery by, {delivery}</h4> */}
            <div className='addToCartDiv'>
            <button className='addToCart'><b>Add to Cart</b></button>
            {/* <button className='buyNow'><b>Buy Now</b></button> */}
            </div>
            </div>
            </div>
        </div>
    );
}

export default Product;