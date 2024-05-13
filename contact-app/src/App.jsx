import { useEffect, useState } from 'react'

import { Heading } from './components/heading'
import {InputComponent}  from './components/inputComponent'
import {ListComponent} from './components/listComponent'

const LOCAL_STORAGE_KEY = "CkjlhdiycutyftgfOhjydgtcuyNjhedtgTsdkgAhdsgCjhsdgtTdshjgSjhdsfgsjyt"

function App() {


  const [list,setList] = useState([])
  const [contact,setContact] = useState({id: 0,name:"",email:""})

  useEffect(()=>{
    const retrievedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrievedList) setList(retrievedList)
  },[])
  useEffect(()=>{

    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(list))


  },[list])

  
  return (
    <>
      <Heading/>
      <InputComponent contact = {contact} setContact = {setContact}   list = {setList}/>
      <ListComponent setContact = {setContact} list = {list} setList  = {setList} />
    </>
  )
}

export default App
