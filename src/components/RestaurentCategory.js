import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurentCategory = ({data,show, setShowIndex,dummy}) => {
  //  const [show, setShow] = useState(false);

   const handleClick = ()=>{
      //  setShow(!show);
      setShowIndex();
   }
  return (
    <div>
      {/* Header*/ }
      <div className='w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 '>
      <div className='flex justify-between cursor-pointer' onClick={handleClick}>

     
        <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
        </div>

       {show && <ItemList items={data.itemCards} dummy={dummy}/>}
      </div>
      {/* Body */}
      
    </div>
  )
}

export default RestaurentCategory
