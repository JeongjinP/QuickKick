import React, { useState }  from "react";
import { Alert } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import TodayComponent from "./TodayCompnent";
import e from "cors";

// react-native-calendars 라이브러리를 사용해 달력 컴포넌트 구성
// https://github.com/wix/react-native-calendars

LocaleConfig.locales["kr"] = {
  monthNames: [
    "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월",],
  dayNames: [
    "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일",],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "kr";
function CalendarComponent( {onDateSelected }) {

  // 선택된 날짜를 useState 사용해서 설정
  const today = TodayComponent();
  const [selectedDate, setSelectedDate] = useState(today);
  // 선택한 날짜 뒤에 파란 동그라미 표시
  const markedDates = {
    [selectedDate] : {
      selected: true,
      selectedColor: "#0A4A9B",
      selectedTextColor: "#ffffff"
    }
  }

  return (
    // 달력 컴포넌트
    <Calendar
        // useState 사용해서 터치하면 날짜 선택
        onDayPress={(day) => {
          if (day.dateString < today) {
            Alert.alert("날짜 선택 오류", "오늘 이전의 날짜를 선택할 수 없습니다!", [{text: "알겠습니다"}]);
            setSelectedDate(today);
            onDateSelected(today);
          }
          else{
            setSelectedDate(day.dateString);
            onDateSelected(day.dateString);
          }
        }}
        onMonthChange={(month) => {
            console.log("month changed", month);
        }}
      // 달력 상단 스타일을 설정
        monthFormat={"yyyy년 M월"}

        // 달력의 날짜의 색상을 설정
        theme={{
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd", // 상단 요일표시 색상
            selectedDayTextColor: '#6491ff',
            selectedDayBackgroundColor: '#009688',
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "#ffa600",
            monthTextColor: "#0A4A9B",
            indicatorColor: "blue",
            // textDayFontFamily: "monospace",
            // textMonthFontFamily: "monospace",
            // textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
        }}
        markedDates={markedDates}
    />
  )

}
export default CalendarComponent;
