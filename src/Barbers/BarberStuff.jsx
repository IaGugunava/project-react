
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as DbActions from "../../database/Users";

function BarberDetail({ email, signOut }) {
  const rate = {
    minRate: 0,
    maxRate: 5,
  };
  const initialValues = {
    rate: 1,
    description: "",
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const [barber, setBarber] = useState({});
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBarberOrder = () => {
    const { id } = barber;

    const val = DbActions.addBarber(email, id);

    navigate("/dashboard");
  }

  const handleSubmit = (e) => {
    const { rate, description } = formValues;
    e.preventDefault();
    const val = DbActions.addBarberRate(barber.id, { rate, description });
    if (val) {
      navigate("/dashboard");
      setFormValues(initialValues);
    }

    // handle errror
  };

  useEffect(() => {
    try {
      const parsed = parseInt(id);
      if (isNaN(parsed) || typeof parsed !== "number")
        throw new Error("Invalid param");

      const dbBarber = DbActions.fetchBarberDetail(id);

      if (!dbBarber) throw new Error("Invalid param");

      setBarber(dbBarber);
    } catch {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="flex-center">
     
      <div>
        <div>
          <p>{barber.firstName}</p>

          <p>{barber.lastName}</p>
          <p>{barber.email}</p>
          <p>{barber.address}</p>
          <p>{barber.price}$</p>
          {!DbActions.userHasSubscribedBarber(email, barber.id) ? (
            <button  onClick={handleBarberOrder} className="">
              Order
            </button>
          ) : (
            ""
          )}

          <ul>
            Reviews:
            {!barber.userRates?.length ? (
              <p>This barber has no reviews yet</p>
            ) : (
              barber.userRates?.map(({ id, rate, description }) => (
                <li key={id}>
                  <p>
                    <span className="hl-5">Rate:</span> {rate}/5
                  </p>
                  <p>{description}</p>
                </li>
              ))
            )}
          </ul>
        </div>
        {DbActions.userHasSubscribedBarber(email, barber.id) ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label >
                Choose rate {formValues.rate} / {rate.maxRate}
              </label>
              <input
                type="range"
                
                name="rate"
                value={formValues.rate}
                
                onChange={handleChange}
                id="customRange2"
              />
            </div>
            <div >
              
              <textarea
               
               
                name="description"
                onChange={handleChange}
                value={formValues.description}
                rows="3"
                placeholder="Your review"
              ></textarea>
            </div>
            <button className="flex-center bg-violet">
              Submit
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BarberStuff;
