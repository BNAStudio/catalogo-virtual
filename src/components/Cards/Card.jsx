/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../../context/CartContext";
import css from "./Card.module.css";

const Card = ({ data }) => {
    const { addToCart } = useContext(DataContext);

    const handleAddToCart = () => {
        addToCart(data);
    };

    return (
        <>
            <div className={css.card}>
                <div className={css["image-container"]}></div>
                <img src={data.url} className={css["image"]} />
                <div className={css["info-container"]}>
                    <h2 className={css["article-title"]}>Article:</h2>
                    <h3>{data.title}</h3>

                    <h2 className={css["article-title"]}>Article COD:</h2>
                    <p className={css["info-article"]}>0000.{data.id}</p>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </>
    );
};

export default Card;