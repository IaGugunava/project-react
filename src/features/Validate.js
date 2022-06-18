import * as DbActions from '../../database/Users';

const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email)
}

const validatePrice = (price) => {
    const priceREgex = /^[0-9]*$/;
    return priceREgex.test(price);
}

export const Validators = {
    validateLogin: (values) => {
        const errors = { };

        if(!values.email) {
            errors.email = "Email is required";
        }  

        if(!values.password) {
            errors.password = "Password is required"
        }
        
        if(values.email && !validateEmail(values.email)) {
            errors.email = "Wrong email format"
        }
        
        if(!Object.keys(errors).length && !DbActions.login(values)) {
            errors.wrongEmailOrPassword = "User doesnt exist"
        }

        return errors;
    },

    validateSignup: (values) => {
        const errors = { };

        if(!values.email) {
            errors.email = "Email is required";
        }  

        if(values.email && !validateEmail(values.email)) {
            errors.email = "Wrong email format"
        }

        if(!values.password) {
            errors.password = "Password is required"
        }
        

        if(!Object.keys(errors).length && !DbActions.registerClient(values)) {
            errors.alreadyExists = "User already exists"
        }

        return errors;
    },

    validateBarberSignup: (values) => {
        const errors = { };

        if(!values.email) {
            errors.email = "Email is required";
        }  

        if(values.email && !validateEmail(values.email)) {
            errors.email = "Wrong email format"
        }

        if(!values.firstName) {
            errors.firstName = "Firstname is required"
        }

        if(!values.lastName) {
            errors.lastName = "Lastname is required"
        }

        if(!values.address) {
            errors.address = "Address is required"
        }

        if(!values.price) {
            errors.price = "Price is required"
        }

        if(values.price && !validatePrice(values.price)) {
            errors.price = "Invalid price, use positive numbers only, how hard is that?"
        }
        
        if(!Object.keys(errors).length && !DbActions.registerBarber(values)) {
            errors.alreadyExists = "Barber already exists"
        }
       
        return errors;
    }
}

export default Validate;