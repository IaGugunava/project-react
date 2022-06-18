import BarberListItem from "./BarberListItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as DbActions from "../../database/Users";

function BarberList() {
  const [barbers, setBarbers] = useState();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/dashboard/${id}`, {
        replace: true,
    })
  };

  useEffect(() => {
    const barbersList = DbActions.fetchBarberList();
    setBarbers(barbersList);
  }, []);

  return (
    <ul>
      {!barbers?.length ? (
        <p>Sorry, there is no barber to display</p>
      ) : (
        barbers.map((barber) => 
          <div onClick={() => handleClick(barber.id)} key={barber.id}>
              <BarberListItem
                firstName={barber.firstName}
                lastName={barber.lastName}
                price={barber.price}
                userRates={barber.userRates}
              />
          </div>
        )
      )}
    </ul>
  );
}

export default BarberList;
