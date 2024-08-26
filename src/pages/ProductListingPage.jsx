import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 30, image: '/path/to/image1.jpg' },
    { id: 2, name: 'Snake Plant', price: 25, image: '/path/to/image2.jpg' },
    // Add more plants here
];

const ProductListingPage = ({ addToCart }) => {
    return (
        <div className="product-listing-page">
            <Header />
            <div className="product-list">
                {products.map((plant) => (
                    <ProductCard key={plant.id} plant={plant} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
