import {useState,createContext,useEffect} from 'react'
import { getallUser } from './components/services/userservice'


export const UserContext = createContext()

export const UserProvider = (props)=>{
    const [num,setNum] = useState(0)
  const [Users, setUsers] = useState([])
  useEffect(()=>{
    console.log("Inside use")
      getallUser().then(res=>{
        if(res.file == false){
          setUsers([])
        }
        else{
        console.log("Inside else block")
          setUsers(()=>res)
          setNum(res.length)
          console.log('Users are',Users)
          console.log('Users are',num)
        }
      })
  
  },[num])
  return(
      <UserContext.Provider value = {{Users,setUsers,num,setNum}}>
          {props.children}
      </UserContext.Provider>
  )

}