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
        <section className='mb-20'>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                    {data.map((series, index) => {
                        return (
                            <Series series={series} key={index} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home