import { useState, useEffect } from "react";
import { Validate } from './Validate';
import StartPage from "./StartPage";
import { Link } from "react-router-dom";

function SignupBarber() {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        price: ''
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(Validate.validateBarberSignup(formValues));
        setIsSubmit(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            setIsSubmit(false);
            setFormValues(initialValues);
        }
    }, [formErrors])

    return (
        <StartPage>
        <form onSubmit={handleSubmit} className="flex-center bg-white">
          <div>
            <h1 className="hl-5">Signup</h1>
          </div>
          <div>
          
            <input
              name="firstName"
              type="text"
              className="hl-6"
              value={formValues.firstName}
              onChange={handleChange}
              placeholder="first name"
            />
            <p className="hl-6">{formErrors.firstName}</p>
          </div>
          <div>
          
            <input
              name="lastName"
              type="text"
              className="hl-6"
              value={formValues.lastName}
              onChange={handleChange}
              placeholder="last name"
            />
            <p className="hl-6">{formErrors.lastName}</p>
          </div>
          <div>
            
            <input
              name="email"
              type="text"
              className="hl-6"
              value={formValues.email}
              onChange={handleChange}
              placeholder="email"
            />
            <p className="hl-6">{formErrors.email}</p>
          </div>
          <div>
           
            <input
              name="address"
              type="text"
              className="hl-6"
              value={formValues.address}
              onChange={handleChange}
              placeholder="address"
            />
            <p className="hl-6">{formErrors.address}</p>
          </div>
          <div>
           
            <input
              name="price"
              type="number"
              className="hl-6"
              value={formValues.price}
              onChange={handleChange}
            />
            <p className="hl-6">{formErrors.price}</p>
          </div>
          <div>
            <button
              className="
                     flex-center bg-violet
                    "
            >
              Signup as barber
            </button>
          </div>
          <p className="">{ formErrors.alreadyExists }</p>
          <p>
            Already have an account ?<span> </span>
            <Link
              to="/Login"
              className="hl-5"
            >
                
            login
            </Link>
            <span> </span>
            or
            <span> </span>
            <Link
              to="/auth/signup"
              className=""
            >
              register
            </Link>
            <span> </span>
            as client
          </p>
        </form>
      </StartPage>
    )
}

export default BarberSignUp;
