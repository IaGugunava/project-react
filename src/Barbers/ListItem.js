import { useState, useEffect } from "react";

function BarberListItem({ firstName, lastName, price, userRates }) {
  const [averageRate, setAverageRate] = useState();
  const [tag, setTag] = useState();

  const handleAverageRate = () => {
     const ratesTotal = userRates.reduce((acc, curr) => acc + +curr.rate, 0);

     const average = userRates.length ? (ratesTotal / userRates.length).toFixed(2) : 0

     setAverageRate(average)
  };



  useEffect(() => {
    handleAverageRate();
    handleTag();
  }, [])
  return (
    <div className="flex column">
      <div  >
        <div  >Barber</div>
        <p  >
            First name: { firstName },
        </p>
        <p  >
            Last name: { lastName }
        </p>
        <p  >
            Average-rate: { averageRate }
        </p>
        <p  >
            Price: { price }$
        </p>
      </div>
      <div  >
        <span  >
          #{tag}
        </span>
      </div>
    </div>
  );
}

export default ListItem;
