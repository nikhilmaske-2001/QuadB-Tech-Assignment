import React from 'react'
import { Link } from 'react-router-dom';

const Series = ({ series }) => {
    const { show } = series;
    const { name, type, language, image, rating } = show;

    return (
        <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
            <img className='mb-8' src={image.medium} alt='' />
            <div className='text-lg font-semibold max-w-[260px]'>
                {name}
            </div>
            <div className='mb-4 flex gap-x-2 text-sm'>
                <div className='bg-green-500 rounded-full text-white px-3'>
                    {type}
                </div>
                <div className='bg-violet-500 rounded-full text-white px-3'>
                    {language}
                </div>
            </div >
            <div className='text-lg font-semibold max-w-[260px]'>
                <span className='text-violet-700 text-2xl'>{rating.average ? rating.average : "No"} Rating</span>
            </div>

            <Link to={`/series/${series.show.id}`} >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                </button>
            </Link>

        </div >
    )
}

export default Series