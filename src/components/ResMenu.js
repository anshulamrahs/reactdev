import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResMenu from '../utils/useResMenu';
import ResCategory from './ResCategory';

const ResMenu = () => {
    const {resId} = useParams();

const resMenu = useResMenu(resId);

const [showIndex, setShowIndex] = useState(null);

   if (resMenu === null) return <Shimmer/>;

 const { name, cuisines, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info;

 const{itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

 //console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card)

 const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
 
console.log(categories)
  return  ( 
    <div className='text-center'>
        <h1 className='text-bold my-6 text-2xl'>{name}</h1>
        <h2 className='text-bold text-lg'>{cuisines.join(" , ")} -  {costForTwoMessage}</h2>
        {/*acordions */}
        {categories.map((category,index)=>(
          <ResCategory key={category?.card?.card?.title} 
          data={category?.card?.card} 
          showItems={index == showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
          />
        ))}
    </div>
  );
  };

export default ResMenu