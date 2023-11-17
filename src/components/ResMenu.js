import React from 'react'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../utils/constants';

const ResMenu = () => {

const [resMenu, setResMenu] = useState(null);
const {resId} = useParams();


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(MENU_API_URL + resId);

        const json = await data.json();
        setResMenu(json.data);

    };

   if (resMenu === null) return <Shimmer/>;

 const { name, cuisines, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info;

 const{itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return  ( 
    <div className='menu'>
        <h1>{name}</h1>
        <h2>{cuisines.join(" , ")} -  {costForTwoMessage}</h2>
        <ul>
           {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name}
            - {"Rs"} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice}</li>)}
        </ul>
    </div>
  );
  };

export default ResMenu