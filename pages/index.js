import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import { getallUser } from '../components/services/userservice'
import HomeComponent from '../components/Homecomponent'
import { UserContext } from '../userContext'
import { useContext } from 'react'

export default function Home() {
 const {Users,num} = useContext(UserContext)
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

