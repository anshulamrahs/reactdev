import React from 'react'

const ItemList = ({items}) => {
  return (
    <div>
            {items.map(item =>
             <div key={item.card.info.id}>

            </div> )}
    </div>
  )
}

export default ItemList