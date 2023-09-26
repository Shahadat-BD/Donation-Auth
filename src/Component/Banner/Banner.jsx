import React, { useEffect, useState } from 'react';
import './Banner.css'
import AllCard from '../AllCard/AllCard';
const Banner = () => {
   const [search,setSearch] = useState([])
    useEffect(()=>{
          fetch('donation.json')
          .then(res=> res.json())
          .then(data => setSearch(data))
    },[])
    
     const handleSearchCategory = e => {
             e.preventDefault()
             
        const category = e.target.category.value
        console.log(search);
                const filterCategory = search.filter(searchCat => searchCat.category === category)
                       console.log(filterCategory);
                setSearch(filterCategory)
                 e.target.category.value = ''

     }
     

    return (
      <div>
          <div className='banner-added'>
            <div className='flex justify-center items-center lg:h-[500px] h-[400px]'>
                <div>
                    <h1 className='lg:text-5xl text-xl mb-8 font-bold'>I Grow By Helping People In Need</h1>
                    <div className="">
                        <form className='flex justify-center join' onSubmit={handleSearchCategory} >
                        <input  name='category' className="input input-bordered join-item w-[65%]" placeholder="Search Here"/>
                        <input type='submit'  className="px-5 join-item rounded-r-md bg-red-500 text-white" value={'Search'}></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>

<AllCard  search ={search} ></AllCard>
      </div>
    );
};

export default Banner;