import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import { getallUser } from '../components/services/userservice'
import HomeComponent from '../components/Homecomponent'

export default function Home() {
  const [num,setNum] = useState(0)
  const [Users, setUsers] = useState([])
  useEffect(()=>{
      getallUser().then(res=>{
        if(res.file == false){
          setUsers([])
        }
        else{
          setUsers(()=>res)
          setNum(res.length)
        }
      })

  
  },[num])
  console.log('Users are ',Users)
  return(
<>
   {(num>0)?<><h3>List of Information about Registered User</h3>
<table><HomeComponent Users={Users}/></table></>
   :<h2>Currently there are no users</h2>
  }
   
   </>
  )
}

