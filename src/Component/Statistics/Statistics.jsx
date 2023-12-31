import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../../Utility/LocalStorage';
import Chart from 'react-apexcharts'



const Statistics = () => {
   const donationData = useLoaderData()
   let TotalDonation = 0
   let TotalYourDonation = 0

        donationData.forEach(element => {
              const everyDonationPrice = element.price 
                TotalDonation = TotalDonation + everyDonationPrice
        });

const [donated, setDonated] = useState([]);

    useEffect(() => {
        const storedDonation = getStoredDonation()
        if (donationData.length > 0) {
          const donationSend = donationData.filter(donate => storedDonation.includes(donate.id));
          setDonated(donationSend);
        }
      }, []);

      donated.forEach(element => {
        const everyDonationPrice = element.price 
          TotalYourDonation = TotalYourDonation + everyDonationPrice
              
  });

       
    return (
        <div className='lg:w-[80%] w-[90%] m-auto'>
        
         <Chart 
         type='pie'
          width={'100%'}
          height={500}
          series={[ TotalDonation , TotalYourDonation]}
          options={ {      
            labels:['total donation', 'your donation'],
            colors: [
              "#FF444A",
              "#00C49F",
            ],
        
            legend: {
              position: 'bottom'
          },
          
         dataLabels:{
               style:{
                fontSize:'16px',
                fontWeight:'bold',
               },  
            },
            title:{
              text:"Pie chart"
            }         
          }}
        
         />
        </div>
    );
};

export default Statistics;