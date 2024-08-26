import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

// Import images
import plant1 from '../assets/plant1.jpeg';
import plant2 from '../assets/plant2.jpeg';
// Add more imports as needed

const products = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 30, image: plant1 },
    { id: 2, name: 'Snake Plant', price: 25, image: plant2 },
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
