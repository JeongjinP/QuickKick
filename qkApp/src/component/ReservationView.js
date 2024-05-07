import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// http://localhost:8080/Reservation/search?resdate=2024-05-10
function ReservationView({date}) {
    const [data, setData] = useState(null);
    const SERVER_URL = "http://localhost:8080/Reservation/";
    useEffect(() => {
        const fetchData = async () => {
            try{
                const url = `${SERVER_URL}search?resdate=${date}`
                const response = await axios.post(url);
                setData(response.data);
                console.log('url:',url);
                console.log("예약 응답받은 데이터",response.data);
            } catch (error){
                console.error("예약 조회 에러:", error);

            }
           
        };
        fetchData();
    }, [date]);
}

export default ReservationView;