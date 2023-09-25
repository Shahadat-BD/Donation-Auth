import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveDonated } from '../../Utility/LocalStorage';

const CardDetails = () => {
    const donateInfo = useLoaderData()
    const {id}     =   useParams()
    const intId = parseInt(id)
    const donateInfoCard = donateInfo.find(info => info.id === intId)
    const {description,picture,price,title,text_button_bg} = donateInfoCard

const handleDonatedSend = () =>{
     saveDonated(intId)
}

    return (
        <div className='my-10'>
            <div className='lg:w-[80%] w-[90%] m-auto'>
                <img className='w-full' src={picture} />
                <div className='bg-[#2a292981] lg:w-[80%] w-[90%] h-24 -mt-24 absolute'>

                </div>
                   <button onClick={handleDonatedSend} className='absolute -mt-[70px] ml-5 px-10 text-white font-semibold py-3 rounded-md' style={{backgroundColor:text_button_bg}}>Donate ${price}</button> 
                  <h3 className='text-3xl font-bold my-8'>{title}</h3>
                 <p>{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;