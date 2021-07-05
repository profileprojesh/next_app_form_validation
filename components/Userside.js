import  {useState, useEffect} from 'react'
import {getallUser} from './useForm'

const Userside = ({num}) => {
   
    
return (
        <div>
            <>
            <h3>User sidebar</h3>
            <h2>{num}</h2>
            </>
            
        </div>
    )
}

export default Userside
