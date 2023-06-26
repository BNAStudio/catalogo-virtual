import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/CartContext";
import { useContext } from "react";

import css from './Cart.module.css'

const ShoppingCart = () => {
    const navigation = useNavigate();
    const { cartItems } = useContext(DataContext);
    const handleNavigate = () => navigation("/main-page");

    return (
        <div>
            <h2>Shopping Cart</h2>
            <div>
                <h3>Cart Items:</h3>
                {cartItems.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    <ul className={css["list-container"]}>
                        {cartItems.map((item, index) => (
                            <li key={index} className={css["cart-product"]}>
                                <p> <b>Item:</b> <span>{item.title}</span></p>
                                <p> <b>Product ID:</b> <span>0000.{item.id}</span></p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <h3>Available Items:</h3>
                <button onClick={handleNavigate}>Back to main page</button>
            </div>
        </div>
    );
};

export default ShoppingCart;