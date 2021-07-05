import { useState, useEffect } from 'react'
import { createUser, getallUser } from './services/userservice'
import {useRouter} from 'next/router'


function useForm(addError) {
    const router = useRouter()
    const [num, setNum] = useState(0)
    const [users, setUsers] = useState([])
    const [validbackendemail, setvalidbackendemail] = useState(true)
    const [validbackendphone, setvalidbackendphone] = useState(true)
    const [values, setValues] = useState({
        username: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        nationality: '',
        dob: '',
        education: '',
        contact: 'none'
    })

    const [issubmitting, setissubmitting] = useState(false)
    const [errors, setErrors] = useState({})

    // function to check if any form field is empty or not
    function isinvalid() {
        if (!values.username || !values.gender || !values.phone || !values.email || !values.address || !values.nationality || !values.dob || !values.education) {
            return true
        }
        else {
            return false
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }


// function to set submit to true
    function setSubmitevent(){
        setissubmitting(true)
    }


    function resetbackend(){
        setvalidbackendemail(true)
        setvalidbackendphone(true)
    }

    function checkorCreatenewUser(){
        createUser(values).then((res) => {
            if (!res.validemail) {
                setvalidbackendemail(false)
            }
            if (!res.validphone) {
                setvalidbackendphone(false)
            }
            else{
                router.push('/')
            }


        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitevent()
        // setissubmitting(true)
        let notvalid = isinvalid()
        resetbackend() // This function is used to reset the backend error to initial state  
        if (!notvalid && Object.keys(errors).length === 0 && issubmitting) {
            checkorCreatenewUser()
    
        }
        else {
            setErrors(addError(values, validbackendemail, validbackendphone))
        }

    }



    useEffect(() => {
        if (issubmitting && Object.keys(errors).length === 0) {
           checkorCreatenewUser()
            getallusers()
        }
    }

        , [errors])


// This is used to set bacend error if there occured
    useEffect(()=>{
        if(issubmitting){
            setErrors(addError(values,validbackendemail,validbackendphone))
        }
    },[validbackendemail,validbackendphone])



    function getallusers() {
        getallUser().then(users => {
            setUsers(users)
            setNum(users.length)            
        })
    }

    // Load the users from backend for the first time dom is loaded
    useEffect(()=>{
        getallusers()
    },[])

    return (
        { values, handleInput, handleSubmit, num, users, getallusers, errors }
    )

}

export default useForm
