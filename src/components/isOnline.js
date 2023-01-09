import { useEffect, useState } from "react";

export  function useNetwork(){
   const [isOnline, setNetwork] = useState(window.navigator.onLine);
   const updateNetwork = () => {
      setNetwork(window.navigator.onLine);
   };
   useEffect(() => {
      window.addEventListener("offline", updateNetwork);
      window.addEventListener("online", updateNetwork);
      return () => {
         window.removeEventListener("offline", updateNetwork);
         window.removeEventListener("online", updateNetwork);
      };
   });
   if(!isOnline){
      throw new Error('Internet connection is not available')
   }
};