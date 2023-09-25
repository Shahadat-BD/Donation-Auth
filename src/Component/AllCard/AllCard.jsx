import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const AllCard = () => {
    const [allCard,setAllCard] = useState([])

    useEffect(()=>{
           fetch('donation.json')
           .then(res => res.json())
           .then(data => setAllCard(data))
    },[])
    return (
    <div className='lg:w-[80%] m-auto w-[90%] my-16'>
           <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
             {
                allCard.map(card=> <Card key={card.id} card={card}></Card>)
              }
           </div>
        </div>
    );
};

export default AllCard;