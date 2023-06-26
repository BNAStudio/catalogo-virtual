/* eslint-disable react/prop-types */

import css from './Card.module.css'
const GridCard = ({ children }) => {
    return (
        <div className={css["grid-container"]}>{children}</div>
    )
}

export default GridCard