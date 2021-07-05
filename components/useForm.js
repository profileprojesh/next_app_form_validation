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
            console.log("Adding errors in isinvalid")
            // setErrors(addError(values, validbackendemail, validbackendphone))
            return false
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        // console.log("name is", name)
        // console.log("value is", value)
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
            console.log("The response is ", res)
            if (!res.validemail) {
                setvalidbackendemail(false)
            }
            if (!res.validphone) {
                setvalidbackendphone(false)
            }
            else{
                console.log("Redirecting user")
                router.push('/')
            }


        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Inside handle submit")
        setSubmitevent()
        // setissubmitting(true)
        let notvalid = isinvalid()
        resetbackend() // This function is used to reset the backend error to initial state  
        console.log('issubmitting', issubmitting)
        console.log('not valid', notvalid)
        console.log('errors', Object.keys(errors).length)
        if (!notvalid && Object.keys(errors).length === 0 && issubmitting) {
            console.log("form submitted sucessfully")
            checkorCreatenewUser()
    
        }
        else {
            console.log("Adding errors in submit")
            setErrors(addError(values, validbackendemail, validbackendphone))
        }

    }



    useEffect(() => {
        console.log('errors', Object.keys(errors).length)
        console.log('issubmitting', issubmitting)
        if (issubmitting && Object.keys(errors).length === 0) {
            console.log("form has been submitted")
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
            console.log("Inside get all users")
            console.log("users are", users)
            console.log("users are length", users.length)
            setUsers(users)
            setNum(users.length)            
        })
    }

    // Load the users from backend for the first time dom is loaded
    useEffect(()=>{
        console.log("Geting all users initially")
        getallusers()
    },[])

    return (
        { values, handleInput, handleSubmit, num, users, getallusers, errors }
    )

}

export default useForm
