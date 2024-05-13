
import { useState,useId } from "react"

export  function InputComponent(props) {

  
  // const [contact,setContact] = useState({id: 0,name:"",email:""})
  const [id,setId] = useState(1222020202020)
  const handlechanges = (e)=>{

    let {name,value} = e.target

    props.setContact((prev)=>{
      return {...prev,[name]:value,id:id}
    })    
    
  }

  const add = (e)=>{

    e.preventDefault()

    props.list((prev)=>{
      
      return([...prev,props.contact])
    })
    setId(id+1)
    props.setContact({id:id,name:"",email:""})
    
    console.log(props.contact)
  }
  return (
    <div className ="form-field">
        <form className="rounded-input-field " onSubmit={add}>
            <input type="text" value = {props.contact.name} name="name" id="" onChange={handlechanges} placeholder="Enter name" required/>
            <input type="email" value = {props.contact.email} name="email" id="" onChange={handlechanges} placeholder="Enter email" required/>
            <input type="submit" value="Add"/>
        </form>
    </div>
  )
}
