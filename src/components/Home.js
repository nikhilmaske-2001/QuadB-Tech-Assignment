import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Series from './Series';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.tvmaze.com/search/shows?q=all";
            const response = await fetch(url).then((res) => res.json());
            setData(response);
        }
        fetchData();
    }, []);

    return (
        <div>
            {data.map((series, index) => {
                return (
                    <Series series={series} key={index} />
                )
            })}
        </div>
    )
}

export default Home