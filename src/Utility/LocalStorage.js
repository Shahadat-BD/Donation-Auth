

const getStoredDonation = () =>{
   const storedDonation = localStorage.getItem('donation')
   if (storedDonation) {
       return JSON.parse(storedDonation)
   }
   return [];
}

   const saveDonated = (id,toast) => {
      const storedDonation = getStoredDonation();
      const exists = storedDonation.find(donateId => donateId === id)
      if (!exists) {
         storedDonation.push(id);
         localStorage.setItem('donation',JSON.stringify(storedDonation))
          toast("donation successfully added")
      }else{
        return  toast('donation already added. sorry!')
      }
   }

   export {getStoredDonation,saveDonated}

