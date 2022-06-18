import StartPage from "./StartPage";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Validate } from './Validate';

function SignupClient({addActiveUser}) {
  const initialValues = { email: "", password: "", cpassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate.validateSignup(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
        setIsSubmit(false);
        addActiveUser(formValues);
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
            value={formValues.password}
            onChange={handleChange}
            name="password"
            type="password"
            className="hl-6"
            placeholder="password"
          />
          <p className="hl-6">{formErrors.password}</p>
        </div>
        <div>
          
          <input
            value={formValues.cpassword}
            onChange={handleChange}
            name="cpassword"
            type="password"
            className="hl-6"
            placeholder="confirm password"
          />
          <p className="hl-6">{formErrors.cpassword}</p>
        </div>
        <div>
          <button
            className="
               flex-center bg-violet
                "
          >
            Signup
          </button>
        </div>
        <p className="">{ formErrors.alreadyExists }</p>
        
      </form>
    </StartPage>
  );
}

export default ClientSignup;
