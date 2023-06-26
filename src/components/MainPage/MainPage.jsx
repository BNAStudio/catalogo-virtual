import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useApiCall from '../../hooks/useApiCall'
import Card from '../Cards/Card'
import GridCard from '../Cards/GridCard'

import css from './MainPage.module.css';


const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { loading, data, error } = useApiCall('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15');

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error.message}</h2>;

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h2>MainPage</h2>
            <div className={css["tools-container"]}>
                <Link to="/cart">
                    <AiOutlineShoppingCart className={css.icon} />
                </Link>
                <input
                    className={css["search-bar"]}
                    type="text"
                    placeholder="Search title articles..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />

            </div>
            <GridCard>
                {filteredData.map(item => (
                    <Card key={item.id} data={item} />
                ))}
            </GridCard>
        </>
    );
};

export default MainPage

