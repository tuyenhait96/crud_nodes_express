export default function validateFormLogin(values) {
    let errors = {};
    //Email
    // need the string to be an email
    if(!values.email){
        errors.email = 'Email address is required';
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email address is invalid.';
    }
    
    //Password
    //be more than 10
    if(!values.password){
        errors.password = 'Password is required';
    }else if(values.password.length < 10){
        errors.password = 'Password need to be more than  10 characters.';
    }

    return errors;
}
