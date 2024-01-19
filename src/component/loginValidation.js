function Validation(values) {
    let errors = {};

    if(values.name === ""){
        errors.name = "Name is required";
    }
    
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Invalid email address";
    }

   
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    return errors;
}

export default Validation;

