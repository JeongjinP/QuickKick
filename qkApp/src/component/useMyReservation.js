import React, { useState, useCallback } from "react";
import axios from "axios";

const useMyReservation = () => {
  const [reservationData, setReservationData] = useState([]); // 초기값을 빈 배열로 설정
  const SERVER_URL = "http://localhost:8080/Reservation/";

  const fetchReservationData = useCallback(async (stdId, today) => {
    try {
      const url = `${SERVER_URL}search/res?stdnum=${stdId}`;
      const response = await axios.post(url);
      
      const filteredData = response.data.filter(item => {
        return item.resdate >= today;
      });
      setReservationData(filteredData.length === 0 ? [] : filteredData); // 필터링된 데이터가 없을 경우 빈 배열을 설정
    } catch (error) {
      console.error(error);
      setReservationData([]); // 에러가 발생했을 경우 빈 배열을 설정
    }
  }, []);

  return { reservationData, fetchReservationData };
};

export default useMyReservation;