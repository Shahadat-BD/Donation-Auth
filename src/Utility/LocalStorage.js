const getStoredDonation = () =>{
   const storedDonation = localStorage.getItem('donation')
   if (storedDonation) {
       return JSON.parse(storedDonation)
   }
   return [];
}

   const saveDonated = id => {
      const storedDonation = getStoredDonation();
      const exists = storedDonation.find(donateId => donateId.id === id)
      if (!exists) {
         storedDonation.push(id);
         localStorage.setItem('donation',JSON.stringify(storedDonation))
      }
   }

   export {getStoredDonation,saveDonated}

