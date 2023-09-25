import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {id,title,picture,category,category_bg,card_bg,text_button_bg} = card
    return (
        <div>
             <Link to={`/card/${id}`}>
             <div className='rounded-md'  style={{backgroundColor:card_bg}}>
              <img className='w-full' src={picture}  />
                <div className='p-3 '>
                 <button className='px-3 py-1 rounded-md my-2' style={{color:text_button_bg, backgroundColor:category_bg}}>{category}</button>
                 <h1 className='text-lg font-semibold' style={{color:text_button_bg}}>{title}</h1>
                </div>
              </div>
             </Link>
        </div>
    );
};

export default Card;