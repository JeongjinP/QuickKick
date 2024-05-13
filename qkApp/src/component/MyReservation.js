import React, { useState, useEffect } from "react";
import axios from "axios";

const useMyReservation = (stdId, today) => {
    const [reservationData, setReservationData] = useState(null);
    const SERVER_URL = "http://localhost:8080/Reservation/";

    useEffect(() => {
        const fetchReservationData = async () => {
            const url = `${SERVER_URL}search/res?stdnum=${stdId}`;
            const response = await axios.post(url);
            
            const filteredData = response.data.filter(item => {
                return item.resdate >= today;
            });
            setReservationData(filteredData.length === 0 ? null : filteredData);
        };
        fetchReservationData();
    }, [stdId, today]);
    return reservationData;
};

export default useMyReservation;