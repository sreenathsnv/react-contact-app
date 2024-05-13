import React from 'react'
import ContactCard from './contactCard'
export  function ListComponent({list,setList,setContact}) {


    const del = (id)=>{

        const new_list = list.filter((i)=>id != i.id
        )
        
        setList(new_list)

        console.log(new_list)
    }

    const edit = (id)=>{

        const edited = list.find((i)=>{
        return i.id == id
        })
      
        setContact({id:edited.id,name:edited.name,email:edited.email})
        del(edited.id)
    }

  
    return(
        <div className='list-container'>
            <h2>Contact List</h2>
            {

                list.map((item)=>(
                    
                    <ContactCard key={item.id} del = {del} edit = {edit} item = {item}/>
                ))
            }
        </div>
    )
}
