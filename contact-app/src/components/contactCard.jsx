
import React from 'react'



export default function ContactCard({item,del,edit}) {
  return (

    <div className='list-item' key={item.id}>
        <div className='details'>
        
            <p className="name">{item.name}</p>
            <p className="email">{item.email}</p>
        </div>

        <div className='btns'>
            <button onClick={()=>{del(item.id)}}>delete</button>
            <button onClick={()=>{edit(item.id)}}>edit</button>
        </div>
    </div>
  )
}