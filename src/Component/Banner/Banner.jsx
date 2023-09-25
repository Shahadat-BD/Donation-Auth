import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-added'>
            <div className='flex justify-center items-center lg:h-[500px] h-[400px]'>
                <div>
                    <h1 className='lg:text-5xl text-xl mb-8 font-bold'>I Grow By Helping People In Need</h1>
                    <div className="flex justify-center join">
                        <input className="input input-bordered join-item w-[65%]" placeholder="Search Here"/>
                        <button className="px-5 join-item rounded-r-md bg-red-500 text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;