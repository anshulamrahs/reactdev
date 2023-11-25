import React from 'react'
import ItemList from './itemList';


const ResCategory = ({data}) => {
    console.log(data);
  return (
    <div>
        <div className="w-6/12 mx-auto my-6 bg-gray-100 shadow-lg p-4 flex justify-between">
        <span className='font-bold text-lg'>{data.title} ({data?.itemCards?.length})</span>
        <span>⬇️</span>
        </div>
        <ItemList items={data.itemCards}/>
    </div>
  );
}

export default ResCategory