import React from "react";
import axios from "axios";

function ReservationView({date}) {
    const SERVER_URL = "http://localhost:8080/Reservation/";
    const url = `${SERVER_URL}search?resdate=${date}`
    const response = axios.get(url);

    console.log('date:',date)
    console.log("예약 응답받은 데이터",response.data);
}

export default ReservationView;