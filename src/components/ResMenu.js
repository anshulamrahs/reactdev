import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResMenu from '../utils/useResMenu';

const ResMenu = () => {
    const {resId} = useParams();

const resMenu = useResMenu(resId);

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