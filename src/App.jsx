import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (plant) => {
        const existingItem = cart.find((item) => item.id === plant.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...plant, quantity: 1 }]);
        }
    };

    const increaseQuantity = (plant) => {
        setCart(
            cart.map((item) =>
                item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (plant) => {
        setCart(
            cart.map((item) =>
                item.id === plant.id
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            )
        );
    };

    const removeItem = (plant) => {
        setCart(cart.filter((item) => item.id !== plant.id));
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/products" element={<ProductListingPage addToCart={addToCart} />} />
                <Route
                    path="/cart"
                    element={
                        <ShoppingCartPage
                            cart={cart}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            removeItem={removeItem}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
