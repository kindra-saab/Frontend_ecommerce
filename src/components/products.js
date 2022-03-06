import React from 'react';
import Product from './Product';

import './Products.css'

let productsList = [
    {
        description:"Smartwatch",
        image:"https://m.media-amazon.com/images/I/616bFs167NL._AC_UL320_.jpg",
        price:"300",
        brand:"Noise",
        delivery:"Thursday, 10th March"

    },

    {
        description:"Smartwatch",
        image:"https://m.media-amazon.com/images/I/616bFs167NL._AC_UL320_.jpg",
        price:"300",
        brand:"Fastrack",
        delivery:"Thursday, 10th March"

    },

    {
        description:"Smartwatch",
        image:"https://m.media-amazon.com/images/I/616bFs167NL._AC_UL320_.jpg",
        price:"300",
        brand:"Boat",
        delivery:"Thursday, 10th March"
        

    }
    ,

    {
        description:"Smartwatch",
        image:"https://m.media-amazon.com/images/I/616bFs167NL._AC_UL320_.jpg",
        price:"300",
        brand:"Fire-Boltt",
        delivery:"Thursday, 10th March"

    },

    {
        description:"Smartwatch",
        image:"https://m.media-amazon.com/images/I/616bFs167NL._AC_UL320_.jpg",
        price:"300",
        brand:"Casio",
        delivery:"Thursday, 10th March"

    },

    {
        description:"Smartwatch",
        image:"https://m.media-amazon.com/images/I/616bFs167NL._AC_UL320_.jpg",
        price:"300",
        brand:"Rado",
        delivery:"Thursday, 10th March"

    },

    {
        description:"Smartwatch",
        image:"https://m.media-amazon.com/images/I/616bFs167NL._AC_UL320_.jpg",
        price:"300",
        brand:"Fossil",
        delivery:"Thursday, 10th March"

    }
]

function products(props) {
    return (
        <div>
            
            <div className='parentProduct'>
            {
                productsList.map((index)=>{
                    return <Product delivery={index.delivery} image={index.image} description={index.description} price={index.price} brand={index.brand}></Product>
                })
            }
            </div>
        </div>
    );
}

export default products;