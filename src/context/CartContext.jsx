/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    return (
        <DataContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContextProvider };