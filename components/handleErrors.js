function addError(values,validbackendemail,validbackendphone){
    console.log("education is",values.education)
    console.log("backend check is",validbackendemail)
    console.log("backend check is",validbackendphone)
    let errors = {}
    if(!values.username){
        errors.username = "username required"
    }
    else if(!/^[A-Za-z ]{5,25}$/.test(values.username)){
        console.log("name is invalid")
        errors.username = "Please enter a valid name"

    }

    if(!values.gender){
        errors.gender = "please select your gender"
    }

    if(!values.phone){
        errors.phone = "phone number required"
    }
    else if(!/^[\d+][\d\- ]{8,15}$/.test(values.phone)){
        errors.phone = "Please enter a valid phone number"

    }
    else if(!validbackendphone){
        errors.phone = "Phone number has been already used"

    }
   
    if(!values.email){
        errors.email = "Email field is required"
    }
    else if(!/^[A-Za-z_1-9]+@[A-Za-z]{2,8}\.[a-zA-Z]{2,4}$/.test(values.email)){
        errors.email = "Please enter a valid email"
    }
    else if(!validbackendemail){
        errors.email = "Email  has been already taken"
    }

    if(!values.address){
        errors.address = "Address field is required"
    }
    if(!values.nationality){
        errors.nationality = "Nationality field is required"
    }
    if(!values.dob){
        errors.dob = "date of birth field is required"
    }
    if(!values.education){
        errors.education = "education field is required"
    }

    return errors
}

export default addError