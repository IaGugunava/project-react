import React from "react";
import {Link} from 'react-router-dom';

const Start = () => {
    console.log('start')
    return(
        <div className="bg-white flex j-center al-center hl-4 column">
            <div className="hl-2">Which one are you?</div>
            <Link to='/Barber.jsx' className="bg-violet flex-center padding-55">Barber</Link>
            <Link to='/Client.jsx' className="bg-violet flex-center padding-55">Client</Link>
        </div>
    )
}

export default Start