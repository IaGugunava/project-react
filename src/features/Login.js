import StartPage from "./StartPage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Validate } from './Validate';

function Login({addActiveUser}) {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(Validate.validateLogin(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            if(!formErrors.wrongEmailOrPassword) {
                setIsSubmit(false);
                addActiveUser(formValues);
                setFormValues(initialValues);
            }
        }
    }, [formErrors])
    
    return (
        <StartPage>
            <form onSubmit={handleSubmit} className="flex-center">
                <div>
                    <h1 className="hl-5">Login</h1>
                </div>
                <div>
                    
                    <input
                        
                        name="email" type="text" className=""
                        value={ formValues.email }
                        onChange={ handleChange }
                    />
                    <p className="hl-6">{ formErrors.email }</p>
                </div>
                <div>
                    
                    <input
                        value={ formValues.password }
                        onChange={ handleChange }
                        name="password" type="password" className="hl-6"
                    />
                    <p className="hl-6">{ formErrors.password }</p>
                </div>
                <div>
                    <button
                        className="bg-violet flex-center "
                    >
                        Login
                    </button>
                </div>
                <p className="">{ formErrors.wrongEmailOrPassword }</p>
                <Link to='/ClientSignup' className="">Don't have an account?</ Link>
            </form>
        </StartPage>
    )
}

export default Login;