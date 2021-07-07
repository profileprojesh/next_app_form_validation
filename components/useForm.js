import { useState, useEffect } from 'react'
import { createUser } from './services/userservice'
import {useRouter} from 'next/router'
import { UserContext } from '../userContext'
import { useContext } from 'react'


function useForm(addError) {
    const router = useRouter()
    const {setUsers,setNum} = useContext(UserContext)
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



    function resetbackend(){
        setvalidbackendemail(true)
        setvalidbackendphone(true)
    }

    function checkorCreatenewUser(){
        console.log("INside createorcheck")
        createUser(values).then((res) => {
            console.log("Inside check and validate user")
            if(res.added){
                console.log("inside user added")
                setUsers(users=>[...users,values])
                setNum(num=>num+1)
                router.push('/')
            }
            else{
                if (!res.validemail) {
                    console.log("Inside if email check")
                    setvalidbackendemail(false)
                }
                if (!res.validphone) {
                    console.log("Inside if phone check")

                    setvalidbackendphone(false)
                }

            }

        })
    }



    const handleSubmit = (e) => {
        console.log("inside submitting ")
        e.preventDefault()
        console.log("submitting",issubmitting)
        console.log("submitting",issubmitting)
        setissubmitting(true)
        let notvalid = isinvalid()
        console.log(notvalid)
        console.log(Object.keys(errors).length)
        console.log(issubmitting)
        resetbackend() // This function is used to reset the backend error to initial state  
        if (!notvalid && Object.keys(errors).length === 0) {
            console.log("first submitting event")
            checkorCreatenewUser()
    
        }
        else {
            console.log("else part submitting event")
            setErrors(addError(values, validbackendemail, validbackendphone))
        }

    }



    useEffect(() => {
        console.log("Inide use effect errors")
        if (issubmitting && Object.keys(errors).length === 0) {
            console.log("Inide use effect errors if ")
           checkorCreatenewUser()
        }
    }

        , [errors])


// This is used to set backend error if there occured
    useEffect(()=>{
        console.log("Inide use effect backend")
        if(issubmitting){
            setErrors(addError(values,validbackendemail,validbackendphone))
        }
    },[validbackendemail,validbackendphone])

    return (
        { values, handleInput, handleSubmit, errors }
    )

}

export default useForm
