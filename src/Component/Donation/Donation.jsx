import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../../Utility/LocalStorage';

const Donation = () => {
    const donation = useLoaderData()
    const [donated, setDonated] = useState([]);
    const [donateLength,setDonateLength] = useState(4)
  
    useEffect(() => {
      const storedDonation = getStoredDonation()
      if (donation.length > 0) {
        const donationSend = donation.filter(donate => storedDonation.includes(donate.id));
        setDonated(donationSend);
      }
    }, [donation]);
    return (
        <div className='lg:w-[80%] w-[90%] m-auto my-10'>
             <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
             {
                donated.slice(0,donateLength).map(donates => 
                    <div className='flex lg:flex-row flex-col gap-5 rounded-md' style={{backgroundColor:donates.card_bg}}>
                        <img className='lg:w-[220px] h-48 w-full' src={donates.picture}/>
                        <div className='lg:p-0 p-5'>
                            <button className='px-3 py-1 rounded-md my-3' style={{color:donates.text_button_bg, backgroundColor:donates.category_bg}}>{donates.category}</button>
                            <h1 className='text-2xl font-semibold mb-2'>{donates.title}</h1>
                            <p className='font-bold text-lg mb-2' style={{color:donates.text_button_bg}}>${donates.price}</p>
                             <button  className='px-5 text-white font-semibold py-2 rounded-md' style={{backgroundColor:donates.text_button_bg}}>View Details</button>
                        </div>
                        
                    </div>
                )
             }
             </div>
             <div className='text-center'>
            {
                donateLength === donated.length ?
               ''
               :
               <button onClick={()=> setDonateLength(donated.length)} className='text-white bg-[#009444] px-6 py-3 rounded-md my-8 font-semibold'>See All</button>
            }
          </div>
        </div>
    );
};

export default Donation;