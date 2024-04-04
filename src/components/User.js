import React, { useState } from 'react'

const User = (props) => {
    const [count] = useState(0);
  
  return (
    <div className='user_card'>
     <h1>count :{count}</h1>
 
      <h2>{props.name}</h2>
      <h3>{props.Location}</h3>
      <h4>{props.contactUs}</h4>
    </div>
  )
}

export default User;
