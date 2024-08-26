import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';


// Import images
import plant1 from '../assets/plant1.jpeg';
import plant2 from '../assets/plant2.jpeg';
import plant3 from '../assets/plant3.jpeg';
import plant4 from '../assets/plant4.jpeg';
import plant5 from '../assets/plant5.jpeg';
import plant6 from '../assets/plant6.jpeg';
// Add more imports as needed

const products = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 30, image: plant1 },
    { id: 2, name: 'Snake Plant', price: 25, image: plant2 },
    { id:3, name: 'Cactus',price:15,image:plant3},
    {id:4, name:'Corn',price:30,image:plant4},
    {id:5,name:'Golden Pothos',price:20,image:plant5},
    {id:6,name:'Swiss Cheese Plant',price:20,image:plant6}
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
