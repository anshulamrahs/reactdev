
import { useState, useEffect } from "react";


const useRestList = () => {

    const [RestList, SetRestList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    useEffect(() =>{
        fetchData();
       },[]);
    
       const fetchData = async() => {
         const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
         const json = await data.json();
         //optional chaining 
    
        SetRestList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       };
  return RestList;
    
  
}

export default useRestList