import Card from '../Card/Card';

const AllCard = ({search}) => {


 
    return (
    <div className='lg:w-[80%] m-auto w-[90%] my-16'>

          <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
            
            {
                search.map(card=> <Card key={card.id} card={card}></Card>)
                
            }
            
            
           </div>

        </div>
    );
};

export default AllCard;